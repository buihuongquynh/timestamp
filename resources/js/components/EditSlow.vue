<template>
  <div>
    <div v-if="is_slow" class="d-block">
      <b-card-text>
        <div class="col-lg-6">
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
          <div class="col-lg-6">
            <div>start</div>
            <vue-timepicker v-model="time_start"></vue-timepicker>
          </div>
          <div class="col-lg-6">
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
    </div>
    <div v-else>
          <b-card-text>
            <div class="row">
              <div class="col-lg-6">
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
              <div class="col-lg-6">
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
       is_slow: null,
      date: "",
      time_start: "",
      time_end: "",
      text: "",
      start_day_off: "",
      end_day_off: "",
    };
  },
  props: {
    toggleModalEdit: Function,
    id: Number,
  },
  created() {
    this.getDetail();
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
    async getDetail() {
      const data = await ListReponsitory.detailSlow(this.id);
      const time_start = data.start_day_off?.split(" ")
      const time_end = data.end_day_off?.split(" ")
      this.is_slow = data.is_slow;
      this.date = time_start[0]
      this.time_start= time_start[1]
      this.time_end= time_end[1]
      this.text= data.reason,
      this.start_day_off =  time_start[0]
      this.end_day_off= time_end[0]
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
              ? await ListReponsitory.edit_slow(this.id,body)
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
              : await ListReponsitory.edit_slow(this.id,body);
            new bootstrap.Toast(document.querySelector("#basicToast")).show();
          }
        }
        this.toggleModalEdit()
      } catch (error) {}
    },
  },
};
</script>
<style>
.rows {
  display: flex;
  align-items: center;
}
.mr-10 {
  margin-right: 10px;
}
</style>