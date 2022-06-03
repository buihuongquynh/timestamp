  <template>
  <section class="content">
    <div class="container-fluid">
      <div class="select">
      <b-form-select
        @change="onChange()"
        v-model="selected"
        :options="options"
      ></b-form-select>
    </div>
      <div class="row">

        <div class="col-12">

          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Time List</h3>
            </div>

            <!-- /.card-header -->
            <div class="card-body table-responsive p-0">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th>Day</th>
                    <th>Start Time</th>
                    <th>End Time</th>
                    <th>Start Time Update</th>
                    <th>End Time Update</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="product in itemsTables" :key="product.time">
                    <td>{{ product.time }}</td>
                    <td>{{ product.checkin }}</td>
                    <td>{{ product.checkout }}</td>
                    <td><div class="update">{{ product.checkin_update }}</div></td>
                    <td><div class="update">{{ product.checkout_update }}</div></td>
                                <td>
                      <a :href="'edit/' + selected + '-' + product.time + '/' + product.id">
                        <i class="fa fa-edit blue"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- /.card-body -->
            <div class="card-footer">
              <pagination :data="products" @pagination-change-page="getResults"></pagination>
            </div>
          </div>
          <!-- /.card -->
        </div>
      </div>

      <!-- Modal -->
      <div class="modal fade" id="addNew" tabindex="-1" role="dialog" aria-labelledby="addNew" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" v-show="!editmode">Create New Product</h5>
              <h5 class="modal-title" v-show="editmode">Edit Product</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

 <script>
import { RepositoryFactory } from "../repository/factory";
const ListReponsitory = RepositoryFactory.get("list");
import ItemTime from "./ItemTime.vue";
export default {
  data() {
    return {
      selected: null,
      options: [],
      itemsTables: [],

      show: false,
      componentKey: 1,
    };
  },
  created() {
    this.Time();
  },
  components: {
    ItemTime,
  },
  props: {
    user_id: String,
  },
  methods: {
    pushMonth(month, res) {
      var countDay;
      if (
        month == 1 ||
        month == 3 ||
        month == 5 ||
        month == 7 ||
        month == 8 ||
        month == 10 ||
        month == 12
      ) {
        countDay = 31;
      } else if (month === 2) {
        countDay = 29;
      } else {
        countDay = 30;
      }
      const arrMonth = [];
      const arrMonthRes = [];
      res.forEach(element => {
        element?.checkin? arrMonthRes?.push(parseInt(element?.checkin?.slice(8, 10))) :  arrMonthRes?.push(parseInt(element?.checkin_update?.slice(8, 10)))
      });
      for (let index = 1; index <= countDay; index++) {
        for (  let item = 0; item < res.length; item++) {
          console.log(res[item].checkin?.slice(8, 10),"res[item].checkin?.slice(8, 10)")
          if (parseInt(res[item].checkin?.slice(8, 10)) === index || parseInt(res[item].checkin_update?.slice(8, 10)) === index ) {
            res[item].checkin ? arrMonth.push(parseInt(res[item].checkin?.slice(8, 10))) : arrMonth.push(parseInt(res[item].checkin_update?.slice(8, 10)))
            this.itemsTables?.push({
              id: res[item].id,
              time: res[item]?.checkin? res[item]?.checkin?.slice(8, 10) : res[item].checkin_update?.slice(8, 10),
              checkin: res[item]?.checkin?.slice(10, 19),
              checkout: res[item]?.checkout?.slice(10, 19),
              checkin_update: res[item]?.checkin_update?.slice(10, 19),
              checkout_update: res[item]?.checkout_update?.slice(10, 19),
            });
          } else if(!arrMonth.includes(index) && !arrMonthRes.includes(index)) {
           console.log(arrMonth,"arrmonth")
                      console.log(arrMonthRes,"arrMonthRes")

            arrMonth.push(parseInt(index));
            this.itemsTables?.push({
              time: index < 10? '0' + index : index,
              id: 0,
              checkin: "",
              checkout: "",
              checkin_update: "",
              checkout_update: "",
            });
            //  break;
          }
         
        }
      }
      console.log(this.itemsTables,"items")
    },
    onChange(value) {
      this.TimeOfUser(this.selected);
    },
    async Time() {
      try {
        const data = await ListReponsitory.getTimeWorks();
        for (const variable in data.data) {
          this.options.push({
            value: data.data[variable],
            text: data.data[variable],
          });
        }
        this.selected = this.options[0].value;
        this.TimeOfUser(this.options[0].value);
      } catch (error) {
        console.log("errrro");
      }
    },
    async TimeOfUser(selected) {
      // try {
        const res = await ListReponsitory.getTimeUserWorks({
          user_id: this.user_id,
          checkin: selected,
        });
        this.pushMonth(this.selected.slice(5, 7), res);
      // } catch (error) {
      //   console.log("erroroo");
      // }
    },
  },
};
</script>
<style scoped>
/* CSS */
.button-33 {
  background-color: #c2fbd7;
  border-radius: 100px;
  box-shadow: rgba(44, 187, 99, .2) 0 -25px 18px -14px inset, rgba(44, 187, 99, .15) 0 1px 2px, rgba(44, 187, 99, .15) 0 2px 4px, rgba(44, 187, 99, .15) 0 4px 8px, rgba(44, 187, 99, .15) 0 8px 16px, rgba(44, 187, 99, .15) 0 16px 32px;
  color: green;
  cursor: pointer;
  display: inline-block;
  font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;
  padding: 3px 10px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: 10px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-33:hover {
  box-shadow: rgba(44, 187, 99, .35) 0 -25px 18px -14px inset, rgba(44, 187, 99, .25) 0 1px 2px, rgba(44, 187, 99, .25) 0 2px 4px, rgba(44, 187, 99, .25) 0 4px 8px, rgba(44, 187, 99, .25) 0 8px 16px, rgba(44, 187, 99, .25) 0 16px 32px;
  transform: scale(1.05) rotate(-1deg);
}
.button-34{
  color: red;
  background-color: rgb(245, 189, 189);
}
.button-34:hover{

}
.update{
  color: red;
}
</style>