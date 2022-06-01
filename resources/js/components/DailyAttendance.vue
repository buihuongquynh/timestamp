<template>
  <div class="mt-10 list_time">
    <div class="select">
      <b-form-select
        @change="onChange()"
        v-model="selected"
        :options="options"
      ></b-form-select>
    </div>
    <div class="tables">
      <ul class="head">
        <li class="row">
          <div class="col-lg-1 col-md-2">
            <b>Ngày</b>
          </div>
          <div class="col-lg-2 col-md-5">
            <b>checkin</b>
          </div>

          <div class="col-lg-2 col-md-5">
            <b>checkout</b>
          </div>
        </li>
      </ul>
      <ul v-for="(itemsTable, index) in itemsTables" :key="itemsTable.id">
        <ItemTime :selected="selected" :itemsTable="itemsTable" :index="index" />
      </ul>
    </div>
  </div>
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
      console.log(res, "ressss");
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
      // const daySelect = element?.checkin? element?.checkin.slice(8, 10) : element?.checkin-.slice(8, 10)
      res.forEach(element => {
        element?.checkin? arrMonthRes?.push(parseInt(element?.checkin?.slice(8, 10))) :  arrMonthRes?.push(parseInt(element?.checkin_update?.slice(8, 10)))
      });
      console.log(this.selected,"res")
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
            console.log(arrMonth,"array")
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
.head {
  background: #95a5a6;
  color: white;
  margin-bottom: 0;
}
.list_time ul {
  border: 0.5px solid #bcc1c5;
  margin-left: 10px;
}
.list_time ul li div {
  border-right: .5px solid #bcc1c5;
  border-bottom: .5px solid #bcc1c5;
  padding: 5px;
}
.list_time .head li div {
  border-bottom: none;
}
.list_time .tables {
  margin-top: 30px;
}
.list_time {
  margin-top: 30px;
}
ul {
  margin-bottom: 0;
}
svg {
  cursor: pointer;
}
.select {
  margin-left: 10px;
}
</style>