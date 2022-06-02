<template>
  <div>
    <b-table striped hover :items="items">
      <template #cell(delete)="data" >
        <span @click="!data.value.stt ? toggleModal(data.value.id) : null" class="trash">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
           v-bind:class="getClass(data.value.stt)"
            viewBox="0 0 16 16"
          >
            <path
              d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"
            />
          </svg>
          <b-modal ref="my-modal" hide-footer title="Detele item">
            <div class="d-block text-center">
              <h3>Are you sure?</h3>
            </div>
            <b-button
              class="mt-3"
              variant="outline-danger"
              block
              @click="deleteItem(idSelect)"
              >Yes</b-button
            >
            <b-button
              class="mt-3"
              variant="outline-warning"
              block
              @click="toggleModal"
              >No</b-button
            >
          </b-modal>
        </span>
      </template>
      <template #cell(edit)="data">
        <span
          @click="!data.value.stt ? toggleModal(data.value.id) : null"
          class="trash"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
           v-bind:class="getClass(data.value.stt)"
            viewBox="0 0 16 16"
          >
            <path
              d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
            />
          </svg>
           <b-modal ref="modal-edit" hide-footer title="Edit
            item">
               {{row}}
            <edit-slow :toggleModalEdit="toggleModalEdit" :id="idSelect"/>
          </b-modal>
        </span>
      </template>
      <template #cell(status)="data">
        <div v-if="data.value"><b class="approve">approve</b></div>
        <div v-else><b class="pendding">pendding</b></div>
      </template>
    </b-table>
  </div>
</template>

<script>
import { RepositoryFactory } from "../repository/factory";
const ListReponsitory = RepositoryFactory.get("list");
import { BASE_URL_WEB } from "../constants";
export default {
  data() {
    return {
      items: [],
      idSelect: null,
    };
  },
  props: {
    user_id: String,
  },
  created() {
    this.listTimeSlow();
  },
  components: {
  },
  methods: {
     getClass(stt){
        return {
            'bi bi-pencil': !stt,  
            'bi bi-pencil disable': stt}
    },
    async listTimeSlow() {
      this.items = [];
      const data = await ListReponsitory.listTimeSlow(this.user_id);
      data.forEach((element) => {
        this.items.push({
          start_time: element?.start_day_off,
          end_time: element?.end_day_off,
          reason: element?.reason,
          _rowVariant: element?.is_slow ? "white" : "danger",
          status: element?.status,
          delete: {id: element?.id, stt: element.status},
          edit:  {id: element?.id, stt: element.status},
        });
      });
    },
    showModal(id) {
      this.$refs["my-modal"].show();
      this.idSelect = id;
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    handleEdit(id) {
      this.idSelect = id;
      console.log("asdafsf")
    },
    toggleModal(id) {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs["my-modal"].toggle("#toggle-btn");
      this.idSelect = id;
    },
     toggleModalEdit(id) {
      this.$refs["modal-edit"].toggle("#toggle-btn");
      this.idSelect = id;
    },
    async deleteItem(id) {
      await ListReponsitory.deleteSlowItem(id);
      this.listTimeSlow();
    },
  },
};
</script>
<style>
.trash {
  cursor: pointer;
}
.trash svg {
  color: blue;
}
.approve{
  color: darkgreen;
}
.pendding{
  color: red;
}
.disable{
  opacity: .5;
}
</style>