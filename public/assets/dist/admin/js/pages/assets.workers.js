/**
 * Run after base.js
 */
$(function () {
  'use strict'

  var countRow = 6;
  var singleQuantity = 0, singleTotalWorker = 0, singleTotalUser = 0,
    setQuantity = 0, setTotalWorker = 0, setTotalUser = 0,
    reportQuantity = 0, reportTotalWorker = 0, reportTotalUser = 0;

  // ユーザー請求書発行
  $('#user-table').DataTable({
    'dom': "<'row'<'col-12'B>><'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 pagination-sm'p>>",
    'ajax': {
      url: window.location.href.replace('/detail/', '/salary/'),
      dataSrc: function (json) {
        let salary = json.data.salary;
        let list = [{
          name: '①（単品）基本55円',
          quantity: 0,
          subtotal: 55,
          total: 0
        },
        {
          name: '①（要期限）要期限15円',
          quantity: 0,
          subtotal: 15,
          total: 0
        },
        {
          name: '①（大型）大型商品55円',
          quantity: 0,
          subtotal: 55,
          total: 0
        },
        {
          name: '②（SET）基本110円',
          quantity: 0,
          subtotal: 110,
          total: 0
        },
        {
          name: '②（要期限）要期限15円',
          quantity: 0,
          subtotal: 15,
          total: 0
        },
        {
          name: '②（大型）大型商品55円',
          quantity: 0,
          subtotal: 55,
          total: 0
        }
        ];

        reportQuantity = 0;
        reportTotalUser = 0;
        $.each(monthlyReport, function (k, v) {
          let quantity = salary ? salary[k + '_quantity'] : 0;
          if (quantity > 0) {
            let subtotal = v['subtotal'] || (salary ? salary[k + '_subtotal'] : 0);
            let total = subtotal * quantity;

            list.push(
              {
                name: '③' + v['name'],
                quantity: quantity,
                subtotal: subtotal,
                total: total
              }
            );

            reportQuantity += quantity * 1;
            reportTotalUser += total;
            countRow++;
          }
        });

        if (salary) {
          list[0]['quantity'] = salary.single55 * 1;
          list[0]['total'] = salary.single55 * 55;

          list[1]['quantity'] = salary.limit33 * 1;
          list[1]['total'] = salary.limit33 * 15;

          list[2]['quantity'] = salary.large55 * 1;
          list[2]['total'] = salary.large55 * 55;

          list[3]['quantity'] = salary.set110 * 1;
          list[3]['total'] = salary.set110 * 110;

          list[4]['quantity'] = salary.set_limit33 * 1;
          list[4]['total'] = salary.set_limit33 * 15;

          list[5]['quantity'] = salary.set_large55 * 1;
          list[5]['total'] = salary.set_large55 * 55;

          // 手入力欄
          if (json.data.additions) {
            $.each(json.data.additions, function (key, value) {
              if (value['group'] === '2') {
                return true;
              }
              list.push({
                name: '<input value="' + value['title'] + '" type="text" name="user_additions[' + key + '][title]" class="form-control form-control-sm" required>',
                quantity: '<input value="' + value['quantity'] + '" type="number" name="user_additions[' + key + '][quantity]" class="form-control form-control-sm" required>',
                subtotal: '<input value="' + value['subtotal'] + '" type="number" name="user_additions[' + key + '][subtotal]" class="form-control form-control-sm" required>',
                total: '<div class="form-inline justify-content-between"><span class="calculate">' + value['subtotal'] * value['quantity'] + "</span>" +
                  '<button class="btn btn-outline-danger btn-sm">&times;</button></div>',
              });
            });
          }
        }

        // 固定の値
        singleQuantity = list[0]['quantity'] + list[1]['quantity'] + list[2]['quantity'];
        singleTotalUser = list[0]['total'] + list[1]['total'] + list[2]['total'];
        setQuantity = list[3]['quantity'] + list[4]['quantity'] + list[5]['quantity'];
        setTotalUser = list[3]['total'] + list[4]['total'] + list[5]['total'];

        return list;
      }
    },
    'createdRow': function (row, data, dataIndex) {
      if (isNaN(data.quantity)) {
        $(row).addClass('table-warning');
      }
    },
    'paging': false,
    'info': false,
    'stateSave': false,
    'search': {
      regex: true
    },
    'columns': [
      {
        data: 'name',
      },
      {
        data: 'subtotal'
      },
      {
        data: 'quantity'
      },
      {
        data: 'total'
      }
    ],
    'buttons': [
      {
        extend: 'csvHtml5',
        text: '<i class="fas fa-file-csv"></i> CSVエクスポート',
        exportOptions: {
          customizeData: function (data) {
            let table = $('#user-table');
            let i = countRow; // 手入力欄
            table.find('.table-warning').each(function () {
              data.body[i] = [
                $(this).find('input').eq(0).val(),
                $(this).find('input').eq(1).val(),
                $(this).find('input').eq(2).val(),
              ];
              i++;
            });

            table.find('tfoot').find('tr').each(function () {
              data.body[i] = [
                $(this).find('th').eq(0).text(),
                $(this).find('th').eq(1).text(),
                $(this).find('th').eq(2).text(),
              ];
              i++;
            });
          }
        }
      },
      {
        extend: 'pdfHtml5',
        text: '<i class="fas fa-file-pdf"></i> ユーザー請求書発行',
        action: function (e, dt, node, config) {
          let buttons = $('#salary-form').find('button');
          buttons.prop('disabled', true);

          let table = $('#user-table');
          let total = new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(table.find('#salary-total-user').text());

          var doc = {
            pageMargins: 45,
            pageSize: config.pageSize,
            pageOrientation: config.orientation,
            defaultStyle: {
              font: 'subset',
              fontSize: 10
            }
          };

          let i = 0;
          var body1 = [[
            { text: '品番・品名', style: 'tableHeader', margin: [0, 5] },
            { text: '数量', style: 'tableHeader', margin: [0, 5] },
            { text: '単価', style: 'tableHeader', margin: [0, 5] },
            { text: '金額', style: 'tableHeader', margin: [0, 5] }
          ]];
          $.each(dt.data(), function (key, value) {
            body1.push([
              {
                border: [true, false, true, true],
                text: value['name'],
                margin: [0, 5],
              },
              {
                border: [false, false, true, true],
                text: value['quantity'],
                alignment: 'center',
                margin: [0, 5],
              },
              {
                border: [false, false, true, true],
                text: value['subtotal'],
                alignment: 'center',
                margin: [0, 5],
              },
              {
                border: [false, false, true, true],
                text: value['total'],
                alignment: 'center',
                margin: [0, 5],
              }
            ]);
            i++;

            if (i > (countRow - 1)) {
              return false;
            }
          });

          table.find('.table-warning').each(function () {
            body1.push([
              {
                border: [true, false, true, true],
                text: $(this).find('input').eq(0).val(),
                margin: [0, 5],
              },
              {
                border: [false, false, true, true],
                text: $(this).find('input').eq(2).val(),
                alignment: 'center',
                margin: [0, 5],
              },
              {
                border: [false, false, true, true],
                text: $(this).find('input').eq(1).val(),
                alignment: 'center',
                margin: [0, 5],
              },
              {
                border: [false, false, true, true],
                text: $(this).find('.calculate').text(),
                alignment: 'center',
                margin: [0, 5],
              }
            ]);
            i++;
          });

          for (let index = i; index < 10; index++) {
            body1.push([
              {
                border: [true, false, true, true],
                text: ' ',
              },
              {
                border: [false, false, true, true],
                text: ' ',
              },
              {
                border: [false, false, true, true],
                text: ' ',
              },
              {
                border: [false, false, true, true],
                text: ' ',
              }
            ]);
          }

          body1.push([
            {
              border: [false, false, false, false],
              text: ' ',
            },
            {
              border: [true, false, false, true],
              text: '小計',
              margin: [0, 5],
            },
            {
              border: [false, false, false, true],
              text: ' ',
            },
            {
              border: [true, false, true, true],
              text: total,
              alignment: 'right',
              margin: [0, 5],
            }
          ]);

          body1.push([
            {
              border: [false, false, false, false],
              text: ' ',
            },
            {
              border: [true, false, false, true],
              text: '合計',
              margin: [0, 5],
            },
            {
              border: [false, false, false, true],
              text: ' ',
            },
            {
              border: [true, false, true, true],
              text: total,
              alignment: 'right',
              margin: [0, 5],
            }
          ]);

          doc.styles = {
            tableHeader: {
              bold: true,
              fontSize: 11,
              fillColor: '#d9d8d8',
              alignment: 'center'
            },
            title: {
              alignment: 'center',
              fontSize: 25
            },
          };

          let user = $('#works').select2('data');
          if (user.length == 0) {
            alert('ユーザー設定はありません。');
            return false;
          }
          user = user[0];

          doc.content = [
            {
              margin: [0, 0, 0, 10],
              text: moment().format('YYYY年MM月DD日'), alignment: 'right'
            },
            {
              margin: [0, 0, 0, 10],
              text: '請求番号: ' + moment().format('YYYYMMDD') + '-' + user['id'].padStart(3, '0'), alignment: 'right'
            },
            { text: '請求書', style: 'title', margin: [0, 0, 0, 20] },
            {
              margin: [0, 0, 0, 40],
              columns: [
                [
                  {
                    margin: [0, 0, 0, 20],
                    text: user['text'].substring(0, user['text'].indexOf('様（')) + ' 様', fontSize: 15, decoration: 'underline'
                  },
                  {
                    margin: [0, 0, 0, 20],
                    text: '下記のとおりご請求申し上げます。'
                  },
                  {
                    margin: [0, 0, 0, 3],
                    text: 'ご請求金額' + total.padStart(17, ' ') + '-', fontSize: 15
                  },
                  {
                    table: {
                      widths: [210],
                      body: [[{ text: '', border: [false, true, false, false] }]]
                    }
                  },
                ],
                {
                  columns: [
                    [
                      {
                        margin: [20, 0, 0, 20],
                        text: '株式会社JOINT', fontSize: 12
                      },
                      {
                        margin: [20, 0, 0, 20],
                        text: '〒5770045\n大阪府東大阪市\n西堤本通東3-4-26'
                      },
                      {
                        margin: [20, 0, 0, 0],
                        text: 'TEL:06-6789-3131\ntakano@office-joint.net'
                      }
                    ],
                    {
                      image: 'data:image/jpeg;base64,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',
                      width: 60,
                      alignment: 'right'
                    },
                  ]
                },
              ]
            },
            {
              margin: [0, 0, 0, 30],
              table: {
                heights: 20,
                widths: [300, '*', '*', '*'],
                body: body1
              }
            },
            {
              margin: [0, 0, 0, 20],
              text: '恐れ入りますが、振込手数料は貴社でご負担願います。'
            },
            {
              margin: [0, 0, 0, 5],
              text: 'お振込先：', bold: true, fontSize: 15
            },
            {
              text: '関西みらい銀行　 高井田支店176 　（普）0033157 　カ）ジョイント'
            },
          ];

          let pdf = $.fn.dataTable.Buttons.pdfMake().createPdf(doc);
          let filename = $('#year').val() + '年' + $('#month').val() + '月分請求書-' + user['text'].substring(0, user['text'].indexOf('（'));

          // メールでファイルを送信する
          if (e.isTrigger) {
            pdf.getBlob((blob) => {
              let fd = new FormData();
              fd.append('group', 1);
              fd.append('name', filename + '.pdf');
              fd.append('file', blob);

              $.ajax({
                url: '/admin/assets/workers/mail/' + user['id'],
                method: 'POST',
                data: fd,
                processData: false,
                contentType: false
              }).done(function (data) {
                // If error
                if (!$.isEmptyObject(data.errors)) {
                  showError(data.errors);
                } else {
                  showSuccess('送信しました');
                }
              }).always(function (data) {
                buttons.prop('disabled', false);
              });
            });
          } else { // ファイルをダウンロードする
            pdf.download(filename);
            buttons.prop('disabled', false);
          }
        }
      },
      {
        text: '<i class="fas fa-envelope"></i> メールを送る',
        action: function (e, dt, node, config) {
          dt.button(1).trigger();
        }
      }
    ]
  });

  // ワーカー給料明細
  window.setTimeout(
    $('#worker-table').DataTable({
      'dom': "<'row'<'col-12'B>><'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 pagination-sm'p>>",
      'ajax': {
        url: window.location.href.replace('/detail/', '/salary/'),
        dataSrc: function (json) {
          let salary = json.data.salary;
          let list = [
            {
              name: '①（単品）基本55円',
              quantity: 0,
              subtotal: 44,
              total: 0
            },
            {
              name: '①（要期限）要期限15円',
              quantity: 0,
              subtotal: 12,
              total: 0
            },
            {
              name: '①（大型）大型商品55円',
              quantity: 0,
              subtotal: 44,
              total: 0
            },
            {
              name: '②（SET）基本110円',
              quantity: 0,
              subtotal: 88,
              total: 0
            },
            {
              name: '②（要期限）要期限15円',
              quantity: 0,
              subtotal: 12,
              total: 0
            },
            {
              name: '②（大型）大型商品55円',
              quantity: 0,
              subtotal: 44,
              total: 0
            }
          ];

          reportQuantity = 0;
          reportTotalWorker = 0;
          $.each(monthlyReport, function (k, v) {
            let quantity = salary ? salary[k + '_quantity'] : 0;
            if (quantity > 0) {
              let subtotal = Math.round(0.8 * (v['subtotal'] || (salary ? salary[k + '_subtotal'] : 0)));
              let total = subtotal * quantity;

              list.push(
                {
                  name: '③' + v['name'],
                  quantity: quantity,
                  subtotal: subtotal,
                  total: total
                }
              );

              reportQuantity += quantity * 1;
              reportTotalWorker += total;
            }
          });

          let note = '';
          if (salary) {
            note = salary.note;

            list[0]['quantity'] = salary.single55 * 1;
            list[0]['total'] = salary.single55 * 44;

            list[1]['quantity'] = salary.limit33 * 1;
            list[1]['total'] = salary.limit33 * 12;

            list[2]['quantity'] = salary.large55 * 1;
            list[2]['total'] = salary.large55 * 44;

            list[3]['quantity'] = salary.set110 * 1;
            list[3]['total'] = salary.set110 * 88;

            list[4]['quantity'] = salary.set_limit33 * 1;
            list[4]['total'] = salary.set_limit33 * 12;

            list[5]['quantity'] = salary.set_large55 * 1;
            list[5]['total'] = salary.set_large55 * 44;

            // 手入力欄
            if (json.data.additions) {
              $.each(json.data.additions, function (key, value) {
                if (value['group'] === '1') {
                  return true;
                }
                list.push({
                  name: '<input value="' + value['title'] + '" type="text" name="worker_additions[' + key + '][title]" class="form-control form-control-sm" required>',
                  quantity: '<input value="' + value['quantity'] + '" type="number" name="worker_additions[' + key + '][quantity]" class="form-control form-control-sm" required>',
                  subtotal: '<input value="' + value['subtotal'] + '" type="number" name="worker_additions[' + key + '][subtotal]" class="form-control form-control-sm" required>',
                  total: '<div class="form-inline justify-content-between"><span class="calculate">' + value['subtotal'] * value['quantity'] + "</span>" +
                    '<button class="btn btn-outline-danger btn-sm">&times;</button></div>'
                });
              });
            }
          }

          // 固定の値
          singleQuantity = list[0]['quantity'] + list[1]['quantity'] + list[2]['quantity'];
          singleTotalWorker = list[0]['total'] + list[1]['total'] + list[2]['total'];
          setQuantity = list[3]['quantity'] + list[4]['quantity'] + list[5]['quantity'];
          setTotalWorker = list[3]['total'] + list[4]['total'] + list[5]['total'];

          // 備考を設定する
          $('#note').val(note);

          return list;
        },
      },
      'createdRow': function (row, data, dataIndex) {
        if (isNaN(data.quantity)) {
          $(row).addClass('table-warning');
        }
      },
      'paging': false,
      'info': false,
      'stateSave': false,
      'search': {
        regex: true,
      },
      'columns': [
        {
          data: 'name'
        },
        {
          data: 'subtotal'
        },
        {
          data: 'quantity'
        },
        {
          data: 'total'
        }
      ],
      'buttons': [
        {
          extend: 'csvHtml5',
          text: '<i class="fas fa-file-csv"></i> CSVエクスポート',
          exportOptions: {
            customizeData: function (data) {
              let table = $('#worker-table');
              let i = countRow; // 手入力欄
              table.find('.table-warning').each(function () {
                data.body[i] = [
                  $(this).find('input').eq(0).val(),
                  $(this).find('input').eq(1).val(),
                  $(this).find('input').eq(2).val(),
                ];
                i++;
              });

              table.find('tfoot').find('tr').each(function () {
                data.body[i] = [
                  $(this).find('th').eq(0).text(),
                  $(this).find('th').eq(1).text(),
                  $(this).find('th').eq(2).text(),
                ];
                i++;
              });
            },
          },
        },
        {
          extend: 'pdfHtml5',
          text: '<i class="fas fa-file-pdf"></i> ワーカー給料明細',
          filename: $('#year').val() + '年' + $('#month').val() + '月分給与明細書-' + $('#name1').val() + '様',
          action: function (e, dt, node, config) {
            let buttons = $('#salary-form').find('button');
            buttons.prop('disabled', true);

            let table = $('#worker-table');
            let total = new Intl.NumberFormat('ja-JP', {
              style: 'currency',
              currency: 'JPY'
            }).format(table.find('#salary-total-worker').text());

            var doc = {
              pageMargins: 45,
              pageSize: config.pageSize,
              pageOrientation: config.orientation,
              defaultStyle: {
                font: 'subset',
                fontSize: 10
              }
            };

            let i = 0;
            var body1 = [
              [
                {
                  text: '支給',
                  style: 'tableHeader',
                  colSpan: 2,
                  margin: [0, 3],
                },
                {},
              ],
            ];
            $.each(dt.data(), function (key, value) {
              let fillColor = i % 2 === 0 ? null : '#f2f2f2';

              body1.push([
                {
                  border: [true, false, true, true],
                  text: value['name'],
                  fillColor: fillColor,
                  margin: [0, 3],
                },
                {
                  border: [false, false, true, true],
                  text: value['total'],
                  alignment: 'center',
                  fillColor: fillColor,
                  margin: [0, 3],
                }
              ]);
              i++;

              if (i > (countRow - 1)) {
                return false;
              }
            });

            table.find('.table-warning').each(function () {
              let fillColor = i % 2 === 0 ? null : '#f2f2f2';

              body1.push([
                {
                  border: [true, false, true, true],
                  text: $(this).find('input').eq(0).val(),
                  fillColor: fillColor,
                  margin: [0, 3]
                },
                {
                  border: [false, false, true, true],
                  text: $(this).find('.calculate').text(),
                  alignment: 'center',
                  fillColor: fillColor,
                  margin: [0, 3]
                }
              ]);
              i++;
            });

            for (let index = i; index < 18; index++) {
              let fillColor = index % 2 === 0 ? null : '#f2f2f2';
              body1.push([
                {
                  border: [true, false, true, true],
                  text: ' ',
                  fillColor: fillColor
                },
                {
                  border: [false, false, true, true],
                  text: ' ',
                  fillColor: fillColor
                }
              ]);
            }

            body1.push([
              {
                text: '支給額合計',
                style: 'tableHeader',
                margin: [0, 3]
              },
              {
                border: [false, true, true, true],
                text: total,
                alignment: 'center',
                margin: [0, 3]
              }
            ]);

            doc.styles = {
              tableHeader: {
                bold: true,
                fontSize: 11,
                color: 'white',
                fillColor: '#203864',
                alignment: 'center'
              },
              title: {
                alignment: 'center',
                fontSize: 20
              }
            };

            doc.content = [
              {
                text: $('#year').val() + '年' + $('#month').val() + '月分 給与明細書',
                style: 'title',
                margin: [0, 0, 0, 50]
              },
              {
                margin: [0, 0, 0, 20],
                columns: [
                  {
                    table: {
                      widths: [80, 100],
                      body: [
                        [
                          {
                            text: '氏名',
                            style: 'tableHeader'
                          },
                          {
                            text: $('#name1').val() + $('#name2').val() + ' 様',
                            alignment: 'center'
                          },
                        ],
                      ],
                    },
                  },
                  {
                    text: '株式会社ＪＯＩＮＴ',
                    alignment: 'center',
                    fontSize: 15
                  }
                ]
              },
              {
                margin: [0, 0, 0, 20],
                table: {
                  widths: [80, 130],
                  heights: [32],
                  body: [
                    [
                      {
                        text: '\n差引支給額',
                        style: 'tableHeader'
                      },
                      {
                        text: '\n' + total,
                        alignment: 'center',
                        fontSize: 11
                      }
                    ]
                  ]
                }
              },
              {
                margin: [0, 0, 0, 30],
                columns: [
                  {
                    table: {
                      widths: ['*', '*'],
                      heights: 17,
                      body: body1
                    }
                  }
                ]
              },
              {
                table: {
                  heights: ['*', 60],
                  widths: ['*'],
                  body: [
                    [
                      {
                        text: '備考',
                        style: 'tableHeader'
                      }
                    ],
                    [
                      {
                        border: [true, false, true, true],
                        text: $('#note').val()
                      }
                    ]
                  ]
                }
              }
            ];

            var pdf = $.fn.dataTable.Buttons.pdfMake().createPdf(doc);

            // メールでファイルを送信する
            if (e.isTrigger) {
              pdf.getBlob((blob) => {
                var fd = new FormData();
                fd.append('group', 2);
                fd.append('name', config.filename + '.pdf');
                fd.append('file', blob);

                $.ajax({
                  url: window.location.href.replace('/detail/', '/mail/'),
                  method: 'POST',
                  data: fd,
                  processData: false,
                  contentType: false
                }).done(function (data) {
                  // If error
                  if (!$.isEmptyObject(data.errors)) {
                    showError(data.errors);
                  } else {
                    showSuccess('送信しました');
                  }
                }).always(function (data) {
                  buttons.prop('disabled', false);
                });
              });
            } else { // ファイルをダウンロードする
              pdf.download(config.filename);
              buttons.prop('disabled', false);
            }
          }
        },
        {
          text: '<i class="fas fa-envelope"></i> メールを送る',
          action: function (e, dt, node, config) {
            dt.button(1).trigger();
          }
        }
      ]
    }),
    200
  );

  let tableUser = $('#user-table');
  function calculateUser() {
    // 手入力欄を合計する
    let otherQuantity = 0, otherTotal = 0;
    tableUser.find('.table-warning').each(function () {
      otherQuantity += $(this).find('input').eq(2).val() * 1;

      let subtotal = $(this).find('input').eq(1).val() * $(this).find('input').eq(2).val();
      $(this).find('.calculate').text(subtotal);
      otherTotal += subtotal;
    });

    tableUser.find('tfoot')
      .find('tr').eq(0)
      .find('th').eq(1).html(singleQuantity)
      .next().html(singleTotalUser)
      .end().end().end()
      .next('tr')
      .find('th').eq(1).html(setQuantity)
      .next().html(setTotalUser)
      .end().end().end()
      .next('tr')
      .find('th').eq(1).html(reportQuantity)
      .next().html(reportTotalUser)
      .end().end().end()
      .next('tr')
      .find('th').eq(1).html(otherQuantity)
      .next().html(otherTotal)
      .end().end().end()
      .next('tr')
      .find('th').eq(2).html(singleTotalUser + setTotalUser + reportTotalUser + otherTotal);
  }

  let tableWorker = $('#worker-table');
  function calculateWorker() {
    // 手入力欄を合計する
    let otherQuantity = 0, otherTotal = 0;
    tableWorker.find('.table-warning').each(function () {
      otherQuantity += $(this).find('input').eq(2).val() * 1;

      let subtotal = $(this).find('input').eq(1).val() * $(this).find('input').eq(2).val();
      $(this).find('.calculate').text(subtotal);
      otherTotal += subtotal;
    });

    tableWorker.find('tfoot')
      .find('tr').eq(0)
      .find('th').eq(1).html(singleQuantity)
      .next().html(singleTotalWorker)
      .end().end().end()
      .next('tr')
      .find('th').eq(1).html(setQuantity)
      .next().html(setTotalWorker)
      .end().end().end()
      .next('tr')
      .find('th').eq(1).html(reportQuantity)
      .next().html(reportTotalWorker)
      .end().end().end()
      .next('tr')
      .find('th').eq(1).html(otherQuantity)
      .next().html(otherTotal)
      .end().end().end()
      .next('tr')
      .find('th').eq(2).html(singleTotalWorker + setTotalWorker + reportTotalWorker + otherTotal);
  }

  // 検索した後に再計算
  tableUser.DataTable().on('draw', function () {
    calculateUser();
  });
  tableWorker.DataTable().on('draw', function () {
    calculateWorker();
  });

  // 変更した後に再計算
  tableUser.on('change', 'input[type="number"]', function () {
    calculateUser();
  });
  tableWorker.on('change', 'input[type="number"]', function () {
    calculateWorker();
  });

  // 削除した後に再計算
  tableUser.on('click', 'button', function () {
    $(this).parents('tr').remove();
    calculateUser();
  });
  tableWorker.on('click', 'button', function () {
    $(this).parents('tr').remove();
    calculateWorker();
  });

  var i = 1000;
  $('#row-add-user').click(function () {
    tableUser
      .find('tbody')
      .append(
        '<tr class="table-warning">' +
        '<td><input value="④" type="text" name="user_additions[' +
        i +
        '][title]" class="form-control form-control-sm" required></td>' +
        '<td><input value="0" type="number" name="user_additions[' +
        i +
        '][subtotal]" class="form-control form-control-sm" required></td>' +
        '<td><input value="0" type="number" name="user_additions[' +
        i +
        '][quantity]" class="form-control form-control-sm" required></td>' +
        '<td><div class="form-inline justify-content-between"><span class="calculate">0</span>' +
        '<button class="btn btn-outline-danger btn-sm">&times;</button></div></td>' +
        "</tr>"
      );

    i++;
  });

  $('#row-add-worker').click(function () {
    tableWorker
      .find('tbody')
      .append(
        '<tr class="table-warning">' +
        '<td><input value="④" type="text" name="worker_additions[' +
        i +
        '][title]" class="form-control form-control-sm" required></td>' +
        '<td><input value="0" type="number" name="worker_additions[' +
        i +
        '][subtotal]" class="form-control form-control-sm" required></td>' +
        '<td><input value="0" type="number" name="worker_additions[' +
        i +
        '][quantity]" class="form-control form-control-sm" required></td>' +
        '<td><div class="form-inline justify-content-between"><span class="calculate">0</span>' +
        '<button class="btn btn-outline-danger btn-sm">&times;</button></div></td>' +
        "</tr>"
      );

    i++;
  });

  $('#year, #month').change(function () {
    $('#search-advanced').trigger('click');
  });

  $('#btn-save').click(function (e) {
    if ($('#custom-tabs2').hasClass('active')) {
      e.preventDefault();
      $('#salary-year').val($('#year').val());
      $('#salary-month').val($('#month').val());
      $('#btn-list-back').attr('href', window.location.href);
      $('#salary-form').submit();
    }
  });

  $('#salary-form').validate();

  // 日本語対応PDFフォント
  pdfMake.fonts = {
    subset: {
      normal: 'subset.ttf',
      bold: 'subset.ttf',
      italics: 'subset.ttf',
      bolditalics: 'subset.ttf',
    },
  };
});
