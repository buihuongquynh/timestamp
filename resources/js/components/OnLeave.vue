<template>
  <div class="container mt-5">
    <div class="icon-list mb-3">
      <span>
 <a href="list-slow" >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-card-list"
        viewBox="0 0 16 16"
      >
        <path
          d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"
        />
        <path
          d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"
        />
      </svg>
    </a>
      </span>

    </div>
   
    <b-card no-body>
      <b-tabs card>
        <b-tab title="Xin đi muộn" active>
          <b-card-text>
            <div class="col-lg-3">
              <div>
                <label for="example-input">Choose a date</label>
                <b-input-group class="mb-3">
                  <b-form-input
                    id="example-input"
                    v-model="date"
                    type="text"
                    placeholder="YYYY-MM-DD"
                    autocomplete="off"
                  ></b-form-input>
                  <b-input-group-append>
                    <b-form-datepicker
                      v-model="date"
                      button-only
                      right
                      locale="en-US"
                      aria-controls="example-input"
                      @context="onContext"
                    ></b-form-datepicker>
                  </b-input-group-append>
                </b-input-group>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-3">
                <div>start</div>
                <vue-timepicker v-model="time_start"></vue-timepicker>
              </div>
              <div class="col-lg-3">
                <div>end</div>
                <vue-timepicker v-model="time_end"></vue-timepicker>
              </div>
            </div>
            <div>Reason</div>
            <b-form-textarea
              id="textarea"
              v-model="text"
              placeholder="Enter something..."
              rows="3"
              max-rows="6"
            ></b-form-textarea>
            <button class="mt-3 button-62" v-on:click="SubmitForm(true)">
              Submit
            </button>
          </b-card-text>
        </b-tab>
        <b-tab title="xin nghỉ">
          <b-card-text>
            <div class="row">
              <div class="col-lg-3">
                <div>
                  <label for="example-input">Choose a date</label>
                  <b-input-group class="mb-3">
                    <b-form-input
                      id="example-input"
                      v-model="start_day_off"
                      type="text"
                      placeholder="YYYY-MM-DD"
                      autocomplete="off"
                    ></b-form-input>
                    <b-input-group-append>
                      <b-form-datepicker
                        v-model="start_day_off"
                        button-only
                        right
                        locale="en-US"
                        aria-controls="example-input"
                        @context="onContext"
                      ></b-form-datepicker>
                    </b-input-group-append>
                  </b-input-group>
                </div>
              </div>
              <div class="col-lg-3">
                <div>
                  <label for="example-input">Choose a date</label>
                  <b-input-group class="mb-3">
                    <b-form-input
                      id="example-input"
                      v-model="end_day_off"
                      type="text"
                      placeholder="YYYY-MM-DD"
                      autocomplete="off"
                    ></b-form-input>
                    <b-input-group-append>
                      <b-form-datepicker
                        v-model="end_day_off"
                        button-only
                        right
                        locale="en-US"
                        aria-controls="example-input"
                        @context="onContext"
                      ></b-form-datepicker>
                    </b-input-group-append>
                  </b-input-group>
                </div>
              </div>
            </div>
            <div>Reason</div>
            <b-form-textarea
              id="textarea"
              v-model="text"
              placeholder="Enter something..."
              rows="3"
              max-rows="6"
            ></b-form-textarea>
            <button class="mt-3 button-62" v-on:click="SubmitForm(false)">
              Submit
            </button>
          </b-card-text>
        </b-tab>
      </b-tabs>
    </b-card>
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
</template>
 
<script>
import { RepositoryFactory } from "../repository/factory";
const ListReponsitory = RepositoryFactory.get("list");
import { BASE_URL_WEB } from "../constants";
export default {
  data() {
    return {
      date: "",
      time_start: "",
      time_end: "",
      text: "",
      start_day_off: "",
      end_day_off: "",
    };
  },
  props: {
    user_id: String,
  },
  methods: {
    compare_date(date1, date2, date4) {
      if (
        date1.valueOf() <= date2.getTime() &&
        date1.valueOf() >= date4.getTime()
      ) {
        return true;
      } else {
        return false;
      }
    },

    onContext(ctx) {
      this.formatted = ctx.selectedFormatted;
      this.selected = ctx.selectedYMD;
    },
    async SubmitForm(is_slow) {
      let d1 = new Date(this.start_day_off);
      let d2 = new Date(this.end_day_off);
      let d3 = new Date(this.date);
      let d4 = new Date();
      const body = {
        start_day_off: is_slow
          ? this.date + " " + this.time_start
          : this.start_day_off + " 07:30:00",
        end_day_off: is_slow
          ? this.date + " " + this.time_end
          : this.end_day_off + " 07:30:00",
        user_id: this.user_id,
        reason: this.text,
        is_slow: is_slow,
      };
      const valiTime_start = this.time_start?.split(":");
      const valiTime_end = this.time_end?.split(":");
      try {
        if (!is_slow) {
          this.start_day_off !== "" || this.end_day_off !== ""
            ? this.compare_date(d1, d2, d4)
              ? await ListReponsitory.on_leave(body)
              : new bootstrap.Toast(document.querySelector("#error")).show()
            : new bootstrap.Toast(document.querySelector("#error")).show();
        } else {
          if (
            d3.valueOf() < d4.getTime() ||
            this.date === "" ||
            this.time_start === "" ||
            this.time_end === ""
          ) {
            new bootstrap.Toast(document.querySelector("#error")).show();
          } else {
            parseInt(valiTime_start[0] * 60 + valiTime_start[1]) >
            parseInt(valiTime_end[0] * 60 + valiTime_end[1])
              ? new bootstrap.Toast(document.querySelector("#error")).show()
              : await ListReponsitory.on_leave(body);
            new bootstrap.Toast(document.querySelector("#basicToast")).show();
          }
        }
      } catch (error) {}
    },
  },
};
</script>
<style>

.icon-list svg{
  color: blue;
  width: 30px;
  height: 30px;
  cursor: pointer;
}
.icon-list{
  display:flex;
  justify-content: flex-end;  
}
</style>