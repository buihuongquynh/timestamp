<template>
  <div>
    <li class="row">
      <div class="col-lg-1 col-md-2 tow_icon">
        <div class="tow_icon">
          <a :href="'edit/' + selected + '-' + itemsTable.time + '/' + itemsTable.id">
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
      <div class="col-lg-2 col-md-5">
       <p> {{ itemsTable.checkin }}</p>
       <p  class="red">  {{ itemsTable.checkin_update }}</p>
      
      </div>
      <div class="col-lg-2 col-md-5">
        <p>{{ itemsTable.checkout }}</p>
        <p class="red">{{ itemsTable.checkout_update }}</p>
      </div>
    </li>
  </div>
</template>
<script>
export default {
  props: {
    itemsTable: Object,
    index: Number,
    selected: String,
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
p{
  margin: 0;
}
.red{
  color: red;
}
</style>