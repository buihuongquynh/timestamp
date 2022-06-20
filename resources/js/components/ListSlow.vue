  <template>
  <section class="content">
    <div class="container-fluid">
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
                    <th>ID</th>
                    <th>Start Off</th>
                    <th>End Off</th>
                    <th>reason</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr :class="[product.is_slow ? 'slow_row' : '', '']" v-for="product in products.data" :key="product.id">
                    <td>{{ product.id }}</td>
                    <td>{{ product.start_day_off }}</td>
                    <td>{{ product.end_day_off }}</td>
                    <td>{{ product.reason }}</td>
                    <td v-if="product.status">
                      <b class="approve">approve</b>
                    </td>
                    <td v-else><b class="pendding">pendding</b></td>
                    <td>
                      <span
                        @click="
                          !product.status ? toggleModalEdit(product.id) : null
                        "
                        v-bind:class="getClass(product.status)"
                      >
                        <i class="fa fa-edit blue"></i>
                      </span>
                      /
                      <span
                        @click="
                          !product.status ? toggleModal(product.id) : null
                        "
                        v-bind:class="getClass(product.status)"
                      >
                        <i class="fa fa-trash red"></i>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- /.card-body -->
            <div class="card-footer">
              <pagination
                :data="products"
                @pagination-change-page="getResults"
              ></pagination>
            </div>
          </div>
          <!-- /.card -->
        </div>
      </div>

      <!-- Modal -->
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
      <b-modal
        ref="modal-edit"
        hide-footer
        title="Edit
                           item"
      >
        {{ row }}
        <edit-slow
          :listTimeSlow="getResults"
          :toggleModalEdit="toggleModalEdit"
          :id="idSelect"
        />
      </b-modal>
    </div>
  </section>
</template>

  <script>
import { RepositoryFactory } from "../repository/factory";
const ListReponsitory = RepositoryFactory.get("api");
import VueTagsInput from "@johmun/vue-tags-input";
import LaravelVuePagination from "laravel-vue-pagination";
export default {
  components: {
    VueTagsInput,
    Pagination: LaravelVuePagination,
  },
  data() {
    return {
      editmode: false,
      products: {},
      categories: [],
      cusPage: null,
      tag: "",
      autocompleteItems: [],
      idSelect: null,
    };
  },
  props: {
    user_id: String,
  },
  methods: {
    getClass(stt) {
      return {
        "trash": !stt,
        "trash disable": stt,
      };
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
    },
    toggleModal(id) {
      this.$refs["my-modal"].toggle("#toggle-btn");
      this.idSelect = id;
    },
    toggleModalEdit(id) {
      this.$refs["modal-edit"].toggle("#toggle-btn");
      this.idSelect = id;
    },
    async deleteItem(id) {
      await ListReponsitory.deleteSlowItem(id);
      this.getResults();
      this.hideModal()
    },
    async getResults(page = 1) {
      const data = await ListReponsitory.listTimeSlow(this.user_id, page);
      this.products = data;
      this.cusPage = page;
    },
  },
  mounted() {},
  created() {
    this.getResults();
  },
};
</script>
<style>
/* CSS */
.slow_row{
  background: #f4f5ca;
}
.button-33 {
  background-color: #c2fbd7;
  border-radius: 100px;
  box-shadow: rgba(44, 187, 99, 0.2) 0 -25px 18px -14px inset,
    rgba(44, 187, 99, 0.15) 0 1px 2px, rgba(44, 187, 99, 0.15) 0 2px 4px,
    rgba(44, 187, 99, 0.15) 0 4px 8px, rgba(44, 187, 99, 0.15) 0 8px 16px,
    rgba(44, 187, 99, 0.15) 0 16px 32px;
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
  box-shadow: rgba(44, 187, 99, 0.35) 0 -25px 18px -14px inset,
    rgba(44, 187, 99, 0.25) 0 1px 2px, rgba(44, 187, 99, 0.25) 0 2px 4px,
    rgba(44, 187, 99, 0.25) 0 4px 8px, rgba(44, 187, 99, 0.25) 0 8px 16px,
    rgba(44, 187, 99, 0.25) 0 16px 32px;
  transform: scale(1.05) rotate(-1deg);
}
.button-34 {
  color: red;
  background-color: rgb(245, 189, 189);
}

.trash {
  cursor: pointer;
}
.trash i {
  color:#0d6efd;
}
.approve {
  color: darkgreen;
}
.pendding {
  color: red;
}
.disable i{
  opacity: 0.5;
}
</style>