<template>
  <div class="container center">
    <div>
      <vue-timepicker class="m-1 ip-btd" v-model="checkin"></vue-timepicker>
      <vue-timepicker class="m-1 ip-btd" v-model="checkout"></vue-timepicker>
      <button class="m-1 button-62" v-on:click="this.createNewTimeEdit">
        Submit
      </button>
      <div class="toast-container position-fixed top-0 end-0 p-3">
        <div
          id="basicToast"
          class="toast"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div class="toast-header bg-success text-light">
            <h5 class="my-0">Success!</h5>
          </div>
        </div>
        <div
          id="error"
          class="toast"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div class="toast-header bg-danger text-light">
            <h5 class="my-0">Error!</h5>
          </div>
        </div>
      </div>
    </div>
   
  </div>
</template>
<script>

import { RepositoryFactory } from "../repository/factory";
const ListReponsitory = RepositoryFactory.get("list");
import { BASE_URL_WEB } from "../constants";
export default {
  data() {
    return {
      checkin: "",
      checkout: "",
      isAddNew: false,
    };
  },

  created() {
    this.TimeId();
  },
   props: {
    user_id: String,
  },
  methods: {
    async TimeId() {
      const array = window.location.href?.split("/");
      console.log(array[array.length - 2]);
      if (array[array.length - 1] !== "0") {
        try {
          const data = await ListReponsitory.getTimeId(array[array.length - 1]);
          const arrCheckIn = data?.checkin
            ? data?.checkin?.split(" ")
            : data?.checkin_update?.split(" ");
          const arrCheckout = data?.checkout
            ? data?.checkout?.split(" ")
            : data?.checkout_update?.split(" ");
          !data?.checkin_update
            ? (this.checkin = arrCheckIn[1])
            : (this.checkin = data?.checkin_update?.split(" ")[1]);
          !data?.checkout_update
            ? (this.checkout = arrCheckIn[1])
            : (this.checkout = data?.checkout_update?.split(" ")[1]);
        } catch (error) {
          console.log("err");
        }
      } else {
        this.isAddNew = true;
      }
    },
    async createNewTimeEdit() {
      const array = window.location.href.split("/");
      const body = {
        timestamp_id: array[array.length - 1],
        user_id: this.user_id,
        checkout: array[array.length - 2] + " " + this.checkout,
        checkin: array[array.length - 2] + " " + this.checkin,
      };
      const valiCheckIn = this.checkin.split(":");
      const valiCheckOut = this.checkout.split(":");
      if (
        parseInt(valiCheckIn[0] * 60 + valiCheckIn[1]) >
        parseInt(valiCheckOut[0] * 60 + valiCheckOut[1])
      ) {
        new bootstrap.Toast(document.querySelector("#error")).show();
      } else {
        if (!this.isAddNew) {
          const data = await ListReponsitory.createTimeEdit(body);
          window.location = BASE_URL_WEB + "/works";
          new bootstrap.Toast(document.querySelector("#basicToast")).show();
        } else {
          const data = await ListReponsitory.createTimeOfDayNoCheckIn(body);
          window.location = BASE_URL_WEB + "/works";
          new bootstrap.Toast(document.querySelector("#basicToast")).show();
        }
      }
    },
  },
};
</script>
<style scoped>
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>