  <template>
  <section style="background-color: #eee">
    <div class="container">
      <div class="mb-2 btn-edit">
        <a href="/profile" class="button-62">View profile</a>
      </div>
      <div class="row">
        <div class="col-lg-4">
          <div class="card mb-4">
            <div class="card-body text-center">
              <img
                :src="
                  data.avatar
                    ? `uploads/images/${data.avatar}`
                    : 'https://hanhtrinhmouoc2018.thanhnien.vn/img/general/avatar-default.png'
                "
                alt="avatar"
                class="rounded-circle img-fluid"
                style="width: 150px"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#3d80f4"
                class="bi bi-camera-fill edit-camera"
                viewBox="0 0 16 16"
              >
                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path
                  d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"
                />
              </svg>
              <div class="row">
                <div class="col-8">
                  <label class="btn btn-default p-0">
                    <input
                      type="file"
                      accept="image/*"
                      ref="file"
                      @change="selectImage"
                    />
                  </label>
                </div>

                <div class="col-4">
                  <button
                    class="btn btn-success btn-sm float-right"
                    :disabled="!currentImage"
                    @click="upload"
                  >
                    Upload
                  </button>
                </div>
              </div>
              <div v-if="currentImage" class="progress">
                <div
                  class="progress-bar progress-bar-info"
                  role="progressbar"
                  :aria-valuenow="progress"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  :style="{ width: progress + '%' }"
                >
                  {{ progress }}%
                </div>
              </div>

              <div v-if="previewImage">
                <div>
                  <img
                    width="200px"
                    height="200px"
                    class="preview my-3"
                    :src="previewImage"
                    alt=""
                  />
                </div>
              </div>
              <h5 class="my-3"></h5>
              <p class="text-muted mb-1">Full Stack Developer</p>
              <p class="text-muted mb-4">{{ data.address }}</p>
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
                  <b-form-input
                    v-model="name"
                    placeholder="Enter your name"
                  ></b-form-input>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Email</p>
                </div>
                <div class="col-sm-9">
                  <b-form-input
                    v-model="email"
                    placeholder="Enter your email"
                  ></b-form-input>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Birthday</p>
                </div>
                <div class="col-sm-9">
                  <b-form-datepicker
                    id="example-datepicker"
                    v-model="birthday"
                    class="mb-2"
                  ></b-form-datepicker>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Address</p>
                </div>
                <div class="col-sm-9">
                  <b-form-input
                    v-model="address"
                    placeholder="Enter your address"
                  ></b-form-input>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Link github</p>
                </div>
                <div class="col-sm-9">
                  <b-form-input
                    v-model="github"
                    placeholder="Enter your github"
                  ></b-form-input>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Link Zalo</p>
                </div>
                <div class="col-sm-9">
                  <b-form-input
                    v-model="zalo"
                    placeholder="Enter your zalo"
                  ></b-form-input>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Link skype</p>
                </div>
                <div class="col-sm-9">
                  <b-form-input
                    v-model="skype"
                    placeholder="Enter your skype"
                  ></b-form-input>
                </div>
              </div>
              <hr />
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
      <div class="btn-submit">
        <a href="" @click="handleSubmit" class="button-62">Submit</a>
      </div>
    </div>
  </section>
</template>
  <script>
import { RepositoryFactory } from "../repository/factory";
const ListReponsitory = RepositoryFactory.get("api");
import { BASE_URL } from "../constants";
import UploadService from "../repository/UploadFilesService";

export default {
  data() {
    return {
      data: {},
      name: "",
      email: "",
      address: "",
      birthday: "",
      github: "",
      zalo: "",
      skype: "",
      currentImage: undefined,
      previewImage: undefined,
      progress: 0,
      message: "",
      imageInfos: [],
    };
  },
  props: {
    user_id: String,
  },
  methods: {
    async getDetail() {
      const data = await ListReponsitory.getProfile(this.user_id);
      this.name = data?.name;
      this.email = data?.email;
      this.address = data?.address;
      this.birthday = data?.birthday;
      this.github = data?.github;
      (this.zalo = data?.zalo), (this.skype = data?.skype), (this.data = data);
    },
    async handleSubmit() {
      const data = {
        name: this.name,
        email: this.email,
        address: this.address,
        birthday: this.birthday,
        github: this.github,
        zalo: this.zalo,
        skype: this.skype,
      };
      const res = await ListReponsitory.editProfile(this.user_id, data);
    },
    selectImage() {
      this.currentImage = this.$refs.file.files.item(0);
      this.previewImage = URL.createObjectURL(this.currentImage);
      this.progress = 0;
      this.message = "";
    },
    upload() {
      this.progress = 0;
      UploadService.upload(
        this.currentImage,
        (event) => {
          this.progress = Math.round((100 * event.loaded) / event.total);
        },
        this.user_id
      )
        .then((response) => {
          this.message = response.data.message;
          this.getDetail(), (this.previewImage = undefined);
        })
        .then((images) => {
          this.imageInfos = images.data;
        })
        .catch((err) => {
          this.progress = 0;
          this.message = "Could not upload the image! " + err;
          this.currentImage = undefined;
          this.getDetail();
        });
    },
  },
  created() {
    this.getDetail();
  },
};
</script>
<style scoped>
.btn-edit button {
  color: white;
}
.img-fluid {
  height: 150px;
}
.edit-camera {
  cursor: pointer;
}
.btn-submit{
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 20px;
}
</style>