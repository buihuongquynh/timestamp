  <template>
  <section class="content">
    <div class="container-fluid">
      <div class="row">

        <div class="col-12">

          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Product List</h3>
            </div>

            <!-- /.card-header -->
            <div class="card-body table-responsive p-0">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Start Off</th>
                    <th>End Off</th>
                    <th>reason</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="product in products.data" :key="product.id">

                    <td>{{ product.id }}</td>
                    <td>{{ product.username }}</td>
                    <td>{{ product.start_day_off }}</td>
                    <td>{{ product.end_day_off }}</td>
                    <td>{{ product.reason }}</td>
                    <td v-if="product.status">
                      <!-- HTML !-->
                      <button class="button-34 button-33" @click="ChangeStatus(product.id)"  role="button">remove approve</button>

                    </td>
                    <td v-else><button class="button-33" @click="ChangeStatus(product.id)" role="button">approve</button>
                    </td>
                    <td>

                      <a href="#" @click="editModal(product)">
                        <i class="fa fa-edit blue"></i>
                      </a>
                      /
                      <a href="#" @click="deleteProduct(product.id)">
                        <i class="fa fa-trash red"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- /.card-body -->
            <div class="card-footer">
              <pagination :data="products" @pagination-change-page="getResults"></pagination>
            </div>
          </div>
          <!-- /.card -->
        </div>
      </div>

      <!-- Modal -->
      <div class="modal fade" id="addNew" tabindex="-1" role="dialog" aria-labelledby="addNew" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" v-show="!editmode">Create New Product</h5>
              <h5 class="modal-title" v-show="editmode">Edit Product</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <!-- <form @submit.prevent="editmode ? updateProduct() : createProduct()">
                      <div class="modal-body">
                          <div class="form-group">
                              <label>Name</label>
                              <input v-model="form.name" type="text" name="name"
                                  class="form-control" :class="{ 'is-invalid': form.errors.has('name') }">
                              <has-error :form="form" field="name"></has-error>
                          </div>
                          <div class="form-group">
                              <label>Description</label>
                              <input v-model="form.description" type="text" name="description"
                                  class="form-control" :class="{ 'is-invalid': form.errors.has('description') }">
                              <has-error :form="form" field="description"></has-error>
                          </div>
                          <div class="form-group">
                              <label>Price</label>
                              <input v-model="form.price" type="text" name="price"
                                  class="form-control" :class="{ 'is-invalid': form.errors.has('price') }">
                              <has-error :form="form" field="price"></has-error>
                          </div>
                          <div class="form-group">

                              <label>Category</label>
                              <select class="form-control" v-model="form.category_id">
                                <option 
                                    v-for="(cat,index) in categories" :key="index"
                                    :value="index"
                                    :selected="index == form.category_id">{{ cat }}</option>
                              </select>
                              <has-error :form="form" field="category_id"></has-error>
                          </div>
                          <div class="form-group">
                              <label>Tags</label>
                              <vue-tags-input
                                v-model="form.tag"
                                :tags="form.tags"
                                :autocomplete-items="filteredItems"
                                @tags-changed="newTags => form.tags = newTags"
                              />
                              <has-error :form="form" field="tags"></has-error>
                          </div>
                      </div>
                      <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                          <button v-show="editmode" type="submit" class="btn btn-success">Update</button>
                          <button v-show="!editmode" type="submit" class="btn btn-primary">Create</button>
                      </div>
                    </form> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

  <script>
import { RepositoryFactory } from "../../repository/factory";
const ListReponsitory = RepositoryFactory.get("api");
import VueTagsInput from '@johmun/vue-tags-input';
import LaravelVuePagination from 'laravel-vue-pagination';
export default {
  components: {
    VueTagsInput,
    'Pagination': LaravelVuePagination
  },
  data() {
    return {
      editmode: false,
      products: {},
      categories: [],
      cusPage: null,
      tag: '',
      autocompleteItems: [],
    }
  },
  methods: {

    async getResults(page = 1) {
      const data = await ListReponsitory.getAllLeave(page);
      this.products = data
      this.cusPage = page;
    },
    async loadProducts() {
      const data = await ListReponsitory.getAllLeave();
      this.products = data
    },
    async ChangeStatus(id){
      await ListReponsitory.changeStatus(id);
      this.getResults(this.cusPage)
    },
    editModal(product) {
      this.editmode = true;
      this.form.reset();
      $('#addNew').modal('show');
      this.form.fill(product);
    },
    newModal() {
      this.editmode = false;
      this.form.reset();
      $('#addNew').modal('show');
    },
    createProduct() {
      this.form.post('api/product')
        .then((data) => {
          if (data.data.success) {
            $('#addNew').modal('hide');

            Toast.fire({
              icon: 'success',
              title: data.data.message
            });
            this.$Progress.finish();
            this.loadProducts();

          } else {
            Toast.fire({
              icon: 'error',
              title: 'Some error occured! Please try again'
            });

            this.$Progress.failed();
          }
        })
        .catch(() => {

          Toast.fire({
            icon: 'error',
            title: 'Some error occured! Please try again'
          });
        })
    },
    updateProduct() {
      this.form.put('api/product/' + this.form.id)
        .then((response) => {
          $('#addNew').modal('hide');
          Toast.fire({
            icon: 'success',
            title: response.data.message
          });
          this.$Progress.finish();
          this.loadProducts();
        })
        .catch(() => {
          this.$Progress.fail();
        });

    },
    deleteProduct(id) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          this.form.delete('api/product/' + id).then(() => {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            );
            this.loadProducts();
          }).catch((data) => {
            Swal.fire("Failed!", data.message, "warning");
          });
        }
      })
    },

  },
  mounted() {

  },
  created() {
    this.loadProducts();
  },
}
</script>
<style>
/* CSS */
.button-33 {
  background-color: #c2fbd7;
  border-radius: 100px;
  box-shadow: rgba(44, 187, 99, .2) 0 -25px 18px -14px inset, rgba(44, 187, 99, .15) 0 1px 2px, rgba(44, 187, 99, .15) 0 2px 4px, rgba(44, 187, 99, .15) 0 4px 8px, rgba(44, 187, 99, .15) 0 8px 16px, rgba(44, 187, 99, .15) 0 16px 32px;
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
  box-shadow: rgba(44, 187, 99, .35) 0 -25px 18px -14px inset, rgba(44, 187, 99, .25) 0 1px 2px, rgba(44, 187, 99, .25) 0 2px 4px, rgba(44, 187, 99, .25) 0 4px 8px, rgba(44, 187, 99, .25) 0 8px 16px, rgba(44, 187, 99, .25) 0 16px 32px;
  transform: scale(1.05) rotate(-1deg);
}
.button-34{
  color: red;
  background-color: rgb(245, 189, 189);
}
.button-34:hover{

}
</style>