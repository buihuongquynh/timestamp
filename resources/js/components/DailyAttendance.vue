<template>
  <div class="mt-10 list_time">
    <div class="select">
      <b-form-select @change="onChange()"  v-model="selected" :options="options"></b-form-select>
    </div>
    <div  class="tables">
      <ul class="head">
        <li class="row">
          <div class="col-1">
            <b>Ngày</b>
          </div>
          <div class="col-2">
            <b>checkin</b>
          </div>
          
          <div class="col-2">
            <b>checkout</b>
          </div>
        </li>
      </ul>
      <ul  v-for="(itemsTable, index) in itemsTables" :key="itemsTable.id">
        <ItemTime :itemsTable="itemsTable" :index="index" />
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
      componentKey: 1
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

      this.selected= this.options[0].value
      this.TimeOfUser(this.options[0].value);
      } catch (error) {
        console.log('errrro');
      }
    },
    async TimeOfUser(selected) {
      try {
        const res = await ListReponsitory.getTimeUserWorks({
          user_id: this.user_id,
          checkin: selected,
        });
        this.itemsTables = [];
        res?.forEach((element) => {
          this.itemsTables?.push({
            id: element.id,
            time: element.checkin.slice(8, 10),
            checkin: element.checkin.slice(10, 19),
            checkout: element.checkout.slice(10, 19),
            checkin_update: element?.checkin_update?.slice(10, 19),
            checkout_update:  element?.checkout_update?.slice(10, 19),
          });
        });
      } catch (error) {
        console.log("erroroo");
      }
    },
  },
};
</script>
<style scoped>
.head {
  background: #95A5A6;
  color: white;
  margin-bottom: 0;
}
.list_time ul {
  border: 0.5px solid #bcc1c5;
  margin-left: 10px;
}
.list_time ul li div {
  border-right: 1px solid #bcc1c5;
  border-bottom: 1px solid #bcc1c5;
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