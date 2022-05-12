<template>
  <div class="container mt-10 list_time">
    <div class="select">
      <b-form-select v-model="selected" :options="options"></b-form-select>
    </div>
    <div class="tables">
<ul class="head">
      <li class="row ">
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
    <ul v-if="itemsTables.length">
      <li class="row" v-for="itemsTable in itemsTables" :key="itemsTable.id">
        <div class="col-1">
          <a :href="'/edit/' + itemsTable.id">
              <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-pencil"
            viewBox="0 0 16 16"
          >
            <path
              d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
            />
          </svg>
          </a>
         
          <span>{{ itemsTable.time }} </span>
        </div>
        <div class="col-2">
          {{ itemsTable.checkin }}
        </div>
        <div class="col-2">
          {{ itemsTable.checkout }}
        </div>
      </li>
    </ul>
    </div>
    
  </div>
</template>
<script>
import { RepositoryFactory } from "../repository/factory";
const ListReponsitory = RepositoryFactory.get("list");
export default {
  data() {
    return {
      selected: null,
      options: [],
      itemsTables: [],
    };
  },
  created() {
    this.Time();
  },
  props: {
    user_id: String,
  },
  methods: {
    async Time() {
      try {
        const data = await ListReponsitory.getTimeWorks();
        data?.data?.forEach((element) => {
          this.options.push({
            value: element,
            text: element,
          });
        });
        this.selected = data?.data[0];

        this.TimeOfUser(data?.data[0]);
      } catch (error) {}
    },
    async TimeOfUser(selected) {
      try {
        const res = await ListReponsitory.getTimeUserWorks({
          user_id: this.user_id,
          checkin: selected,
        });
        res?.forEach((element) => {
          this.itemsTables?.push({
            id: element.id,
            time: element.checkin.slice(8, 10),
            checkin: element.checkin.slice(10, 19),
            checkout: element.checkout.slice(10, 19),
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
.head{
  background: black;
  color: white;
  margin-bottom: 0;
}
.list_time ul {
border: 1px solid #bcc1c5;
margin-left: 10px;
}
.list_time ul li div{
border-right: 1px solid #bcc1c5;
border-bottom: 1px solid #bcc1c5;
padding: 5px;

}
.list_time .head li div{
  border-bottom: none;
}
.list_time .tables{
  margin-top: 30px;
}
.list_time{
  margin-top: 30px;
}
svg{
  cursor: pointer;
}
</style>