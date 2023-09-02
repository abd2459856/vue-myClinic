<style scoped>
::v-deep .costomgray > .v-input__control > .v-input__slot {
  background-color: white;
}
</style>
<template>
  <div>
    <v-card elevation="1" class="mt-3">
      <v-card-title>
        <b><v-icon>mdi-doctor</v-icon> แพทย์ &nbsp;</b>
        <v-chip color="error" label outlined>
          ทั้งหมด {{ desserts.length }} รายการ
        </v-chip>
        <v-spacer />
        <div class="text-center">
          <v-btn text color="success" @click="dialog = true">
            <v-icon>mdi-calendar-plus-outline</v-icon> เพิ่มแพทย์
          </v-btn>
        </div>
      </v-card-title>
      <v-divider />
      <v-card-text>
        <v-card color="rgb(237 235 215)" elevation="0" class="pa-5 mb-3">
          <v-row>
            <v-col md="11">
              <v-text-field
                class="costomgray"
                prepend-inner-icon="mdi-magnify"
                outlined
                dense
                placeholder="รหัสแพทย์ หรือ ชื่อ-นามสกุล"
                hide-details
                v-model="textSearch"
              ></v-text-field>
            </v-col>
            <v-col md="1">
              <v-btn elevation="0" color="primary" @click="fn_getData">
                <v-icon>mdi-magnify</v-icon>
                ค้นหา
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
        <v-divider style="border-top: 1px dashed rgba(0, 0, 0, 0.12)" />
        <v-simple-table fixed-header height="70vh">
          <template v-slot:default>
            <thead>
              <tr>
                <th
                  style="background-color: #212121"
                  class="text-center font-weight-bold white--text"
                >
                  ลำดับ
                </th>
                <th
                  style="background-color: #212121"
                  class="text-left font-weight-bold white--text"
                >
                  รหัสแพทย์
                </th>
                <th
                  style="background-color: #212121"
                  class="text-left font-weight-bold white--text"
                >
                  ชื่อ-นามสกุล
                </th>
                <th
                  style="background-color: #212121"
                  class="text-left font-weight-bold white--text"
                >
                  ใบประกอบ
                </th>
                <th
                  style="background-color: #212121"
                  class="text-left font-weight-bold white--text"
                >
                  สถานะ
                </th>
                <th
                  style="background-color: #212121"
                  class="text-left font-weight-bold white--text"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, i) in desserts" :key="i">
                <td class="text-center">{{ i + 1 }}</td>
                <td class="text-left">{{ item.ID_Doctor }}</td>
                <td class="text-left">
                  <v-avatar size="30">
                    <img
                      src="https://cdn.vuetifyjs.com/images/john.jpg"
                      alt="John"
                    />
                  </v-avatar>
                  <span class="pl-3"
                    >{{ item.Fisrtname }}&nbsp;{{ item.Lastname }}</span
                  >
                </td>
                <td class="text-left">
                  <v-btn
                    v-if="item.License"
                    elevation="0"
                    color="primary"
                    text
                    small
                  >
                    <v-icon>mdi-image</v-icon>
                  </v-btn>
                </td>
                <td class="text-left">{{ item.Status }}</td>
                <td class="text-left">
                  <v-btn elevation="0" color="warning" x-small text>
                    <v-icon> mdi-pencil</v-icon>
                  </v-btn>
                  <v-btn
                    elevation="0"
                    @click="fn_delateData(item.ID)"
                    color="error"
                    x-small
                    text
                  >
                    <v-icon> mdi-delete</v-icon>
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card-text>
    </v-card>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5"
            ><v-icon>mdi-calendar-plus-outline</v-icon> เพิ่มแพทย์</span
          >
        </v-card-title>
        <v-card-text>
          <v-form ref="form" lazy-validation>
            <v-row>
              <v-col md="6" sm="12" cols="12">
                <v-text-field
                  label="รหัส"
                  outlined
                  dense
                  hide-details
                  v-model="formInsert.ID_Doctor"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col md="6" sm="12" cols="12">
                <v-text-field
                  label="ชื่อ"
                  outlined
                  dense
                  hide-details
                  :rules="[(v) => !!v || '']"
                  v-model="formInsert.Fisrtname"
                ></v-text-field>
              </v-col>
              <v-col md="6" sm="12" cols="12">
                <v-text-field
                  label="นามสกุล"
                  outlined
                  dense
                  hide-details
                  :rules="[(v) => !!v || '']"
                  v-model="formInsert.Lastname"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-form>
          <v-row class="mt-2">
            <v-col md="12" sm="12" cols="12">
              <v-file-input
                multiple
                v-model="formInsert.License"
                label="ใบประกอบ"
                outlined
                dense
              ></v-file-input>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="fn_insertData">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from "axios";
import Vmenu from "@/components/Vmenu";
export default {
  name: "IndexPage",
  components: {
    Vmenu,
  },
  data() {
    return {
      dialog: false,
      desserts: [],
      textSearch: "",
      formInsert: {
        ID_Doctor: "",
        Fisrtname: "",
        Lastname: "",
      },
    };
  },
  methods: {
    async fn_getData() {
      await axios
        .get(`${process.env.api_url}/doctor?textSearch=${this.textSearch}`, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          this.desserts = res.data.data;
        })
        .catch((err) => {
          alert(err);
        });
    },
    async fn_insertData() {
      if (!this.$refs.form.validate()) {
        return false;
      }
      console.log(this.formInsert.License.length);
     
      
      let formData = new FormData();

      this.formInsert.License.forEach(element => {
        formData.append("fileLicense[]", element);
      });
      // formData.append("fileLicense", this.formInsert.License);
      formData.append("ID_Doctor", this.formInsert.ID_Doctor);
      formData.append("Fisrtname", this.formInsert.Fisrtname);
      formData.append("Lastname", this.formInsert.Lastname);
      await axios
        .post(`${process.env.api_url}/doctor/insert`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          this.dialog = false;
          this.fn_getData();
          // this.$refs.confirm.dailogalert("เพิ่มค่าใช้จ่ายเรียบร้อย", ``, {
          //   icon: "success",
          //   color: "success",
          //   btnCanceltext: "ตกลง",
          // });
        })
        .catch((err) => {
          alert(err);
        });
    },
    async fn_delateData(ID) {
      let body ={
        ID:ID
      }
      await axios
        .post(
          `${process.env.api_url}/ConfigCon/delete_doctor`,body,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          this.fn_getData();
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
  mounted() {
    this.fn_getData();
  },
};
</script>