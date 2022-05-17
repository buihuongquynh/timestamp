<template>
  <div>
    <li class="row">
      <div class="col-1 tow_icon">
        <div class="tow_icon">
          <a @click="show = !show" v-if="!show" class="up">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chevron-down"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </a>
          <a @click="show = !show" v-else class="up">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </a>
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
        </div>

        <span>{{ itemsTable.time }} </span>
      </div>
      <div class="col-2">
        {{ itemsTable.checkin }}
      </div>
      <div class="col-2">
        {{ itemsTable.checkout }}
      </div>
      <div v-if="!show">
        <div  v-for="item in listItemChilds" :key="item.id">
          <div class="row">
            <div class="col-1"></div>
            <div class="col-2 text_edit">
              {{ item.checkins }}
            </div>
            <div class="col-2 text_edit">
              {{ item.checkouts }}
            </div>
          </div>
        </div>
      </div>
    </li>
  </div>
</template>
<script>
import { RepositoryFactory } from "../repository/factory";
// import ListItemChild from "./ListitemChild.vue"
const ListReponsitory = RepositoryFactory.get("list");
export default {
  data() {
    return {
      show: false,
      listItemChilds: [],
    };
  },
  props: {
    itemsTable: Object,
    index: Number,
  },
  created() {
    this.getTimeEdits();
  },
  // components: {
  //   ListItemChild
  // },
  methods: {
    async getTimeEdits() {
      const data = await ListReponsitory.getTimeEdit({
        timestamp_id: this.itemsTable?.id,
      });
      data?.data?.forEach((element) => {
        this.listItemChilds.push({
          ids: element?.id,
          checkins: element?.checkin?.slice(10, 19),
          checkouts: element?.checkout?.slice(10, 19),
        });
      });
    },
  },
};
</script>
<style scoped>
.tow_icon {
  display: flex;
  align-items: center;
}
.text_edit {
  color: red;
}
.up{
  cursor: pointer;
}
</style>