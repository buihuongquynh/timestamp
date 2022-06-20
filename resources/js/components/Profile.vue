  <template>
  <section style="background-color: #eee">
    <div class="container">
      <div class="mb-2 btn-edit">
        <a href="/edit-profile" class="button-62">Edit profile</a>
      </div>
      <div class="row">
        <div class="col-lg-4">
          <div class="card mb-4">
            <div class="card-body text-center">
              <img
                :src="data.avatar? `uploads/images/${data.avatar}`: 'https://hanhtrinhmouoc2018.thanhnien.vn/img/general/avatar-default.png'"
                alt="avatar"
                class="rounded-circle img-fluid"
                style="width: 150px"
              />
              <h5 class="my-3"></h5>
              <p class="text-muted mb-1">Full Stack Developer</p>
              <p class="text-muted mb-4">{{ data.address }}</p>
            </div>
          </div>
          <div class="card mb-4 mb-lg-0">
            <div class="card-body p-0">
              <ul class="list-group list-group-flush rounded-3">
                <li
                  class="
                    list-group-item
                    d-flex
                    justify-content-between
                    align-items-center
                    p-3
                  "
                >
                  <i class="fab fa-github fa-lg" style="color: #333333"></i>
                  <p class="mb-0">{{ data.github }}</p>
                </li>
                <li
                  class="
                    list-group-item
                    d-flex
                    justify-content-between
                    align-items-center
                    p-3
                  "
                >
                  <i class="fab fa-facebook fa-lg" style="color: #55acee"></i>
                  <p class="mb-0">{{ data.zalo }}</p>
                </li>
                <li
                  class="
                    list-group-item
                    d-flex
                    justify-content-between
                    align-items-center
                    p-3
                  "
                >
                  <i class="fab fa-skype fa-lg" style="color: #ac2bac"></i>
                  <p class="mb-0">{{ data.skype }}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="card mb-4">
            <div class="card-body">
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Full Name</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{{ data.name }}</p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Email</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{{ data.email }}</p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Birthday</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{{ data.birthday }}</p>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Address</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">{{ data.address }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="card mb-4 mb-md-0">
                <div class="card-body">
                  <p class="mb-4">
                    <span class="text-primary font-italic me-1">assigment</span>
                    Project Status
                  </p>
                  <p class="mb-1" style="font-size: 0.77rem">Web Design</p>

                  <p class="mt-4 mb-1" style="font-size: 0.77rem">
                    Website Markup
                  </p>

                  <p class="mt-4 mb-1" style="font-size: 0.77rem">One Page</p>

                  <p class="mt-4 mb-1" style="font-size: 0.77rem">
                    Mobile Template
                  </p>

                  <p class="mt-4 mb-1" style="font-size: 0.77rem">
                    Backend API
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card mb-4 mb-md-0">
                <div class="card-body">
                  <p class="mb-4">
                    <span class="text-primary font-italic me-1">assigment</span>
                    Project Status
                  </p>
                  <p class="mb-1" style="font-size: 0.77rem">Web Design</p>

                  <p class="mt-4 mb-1" style="font-size: 0.77rem">
                    Website Markup
                  </p>

                  <p class="mt-4 mb-1" style="font-size: 0.77rem">One Page</p>

                  <p class="mt-4 mb-1" style="font-size: 0.77rem">
                    Mobile Template
                  </p>

                  <p class="mt-4 mb-1" style="font-size: 0.77rem">
                    Backend API
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  <script>
import { RepositoryFactory } from "../repository/factory";
const ListReponsitory = RepositoryFactory.get("api");
export default {
  data() {
    return {
      data: {},
    };
  },
  props: {
    user_id: String,
  },
  methods: {
    async getDetail() {
      const data = await ListReponsitory.getProfile(this.user_id);
      console.log(data, "data");
      this.data = data;
    },
  },
  mounted() {},
  created() {
    this.getDetail();
  },
};
</script>
<style scoped>
.btn-edit button {
  color: white;
}
.img-fluid{
  height: 150px;
}
</style>