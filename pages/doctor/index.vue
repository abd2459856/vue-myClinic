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
              ></v-text-field>
            </v-col>
            <!-- <v-col md="2">
              <Vmenu :vdate="dateStart" :label="'ตั้งแต่วันที่'" />
            </v-col>
            <v-col md="2">
              <Vmenu :vdate="dateStart" :label="'ถึงวันที่'" />
            </v-col> -->
            <v-col md="1">
              <v-btn elevation="0" color="primary">
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
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item, i) in desserts"
                :key="i"
                :style="`background-color:${
                  item.Date_finish ? '#E8F5E9' : item.Date_come ? '#FFF3E0' : ''
                };`"
              >
                <td class="text-center">{{ i + 1 }}</td>
                <td class="text-left">{{ item.ID_Customer }}</td>
                <td class="text-left">
                  <v-avatar size="30">
                    <img
                      src="https://cdn.vuetifyjs.com/images/john.jpg"
                      alt="John"
                    />
                  </v-avatar>
                  <span class="pl-3">{{ item.name }}</span>
                </td>
                <td class="text-left">
                  <v-btn elevation="0" color="primary" text small>
                    <v-icon>mdi-image</v-icon>
                  </v-btn>
                </td>
                <td class="text-left">{{ item.Status }}</td>
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
          <v-row>
            <v-col md="6" sm="12" cols="12">
              <v-text-field
                label="รหัส"
                outlined
                dense
                hide-details
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
              ></v-text-field>
            </v-col>
            <v-col md="6" sm="12" cols="12">
              <v-text-field
                label="นามสกุล"
                outlined
                dense
                hide-details
              ></v-text-field>
            </v-col>
            <v-col md="12" sm="12" cols="12">
              <v-file-input label="ใบประกอบ" outlined dense></v-file-input>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Vmenu from "@/components/Vmenu";
export default {
  name: "IndexPage",
  components: {
    Vmenu,
  },
  data() {
    return {
      dateStart: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      dateEnd: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menuDailog: false,
      dialog: false,
      dialogEdit: false,
      desserts: [
        {
          name: "Frozen Yogurt",
          ID_Customer: 159,
          Doctor_name: "john wick",
          Status: "",
          Date_nut: new Date(
            Date.now() - new Date().getTimezoneOffset() * 60000
          ),
          Date_come: "",
          Date_inspect: "",
          Date_finish: "",
          Remark: "",
        },
        {
          name: "Ice cream sandwich",
          ID_Customer: 237,
          Doctor_name: "john wick",
          Status: "",
          Date_nut: new Date(
            Date.now() - new Date().getTimezoneOffset() * 60000
          ),
          Date_come: "",
          Date_inspect: "",
          Date_finish: "",
          Remark: "",
        },
        {
          name: "Eclair",
          ID_Customer: 262,
          Doctor_name: "john wick",
          Status: "",
          Date_nut: new Date(
            Date.now() - new Date().getTimezoneOffset() * 60000
          ),
          Date_come: "",
          Date_inspect: "",
          Date_finish: "",
          Remark: "",
        },
        {
          name: "Cupcake",
          ID_Customer: 305,
          Doctor_name: "john wick",
          Status: "",
          Date_nut: new Date(
            Date.now() - new Date().getTimezoneOffset() * 60000
          ),
          Date_come: "",
          Date_inspect: "",
          Date_finish: "",
          Remark: "",
        },
        {
          name: "Gingerbread",
          ID_Customer: 356,
          Doctor_name: "john wick",
          Status: "",
          Date_nut: new Date(
            Date.now() - new Date().getTimezoneOffset() * 60000
          ),
          Date_come: "",
          Date_inspect: "",
          Date_finish: "",
          Remark: "",
        },
        {
          name: "Jelly bean",
          ID_Customer: 375,
          Doctor_name: "john wick",
          Status: "",
          Date_nut: new Date(
            Date.now() - new Date().getTimezoneOffset() * 60000
          ),
          Date_come: "",
          Date_inspect: "",
          Date_finish: "",
          Remark: "",
        },
        {
          name: "Lollipop",
          ID_Customer: 392,
          Doctor_name: "john wick",
          Status: "",
          Date_nut: new Date(
            Date.now() - new Date().getTimezoneOffset() * 60000
          ),
          Date_come: "",
          Date_inspect: "",
          Date_finish: "",
          Remark: "",
        },
        {
          name: "Honeycomb",
          ID_Customer: 408,
          Doctor_name: "john wick",
          Status: "",
          Date_nut: new Date(
            Date.now() - new Date().getTimezoneOffset() * 60000
          ),
          Date_come: "",
          Date_inspect: "",
          Date_finish: "",
          Remark: "",
        },
        {
          name: "Donut",
          ID_Customer: 452,
          Doctor_name: "john wick",
          Status: "",
          Date_nut: new Date(
            Date.now() - new Date().getTimezoneOffset() * 60000
          ),
          Date_come: "",
          Date_inspect: "",
          Date_finish: "",
          Remark: "",
        },
        {
          name: "KitKat",
          ID_Customer: 518,
          Doctor_name: "john wick",
          Status: "",
          Date_nut: new Date(
            Date.now() - new Date().getTimezoneOffset() * 60000
          ),
          Date_come: "",
          Date_inspect: "",
          Date_finish: "",
          Remark: "",
        },
      ],
      FormAdd: {
        Date_nut: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10),
      },
      FormEdit: {
        Date_nut: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10),
      },
      CoustomerOP: [
        {
          text: "Frozen Yogurt",
          value: 159,
        },
        {
          text: "Ice cream sandwich",
          value: 237,
        },
        {
          text: "Eclair",
          value: 262,
        },
        {
          text: "Cupcake",
          value: 305,
        },
        {
          text: "Gingerbread",
          value: 356,
        },
        {
          text: "Jelly bean",
          value: 375,
        },
        {
          text: "Lollipop",
          value: 392,
        },
        {
          text: "Honeycomb",
          value: 408,
        },
        {
          text: "Donut",
          value: 452,
        },
        {
          text: "KitKat",
          value: 518,
        },
      ],
    };
  },
  methods: {
    fn_CustomerCome(item) {
      item.Date_come = new Date(
        Date.now() - new Date().getTimezoneOffset() * 60000
      );
      // alert(item)
    },
    fn_CustomerInspect(item) {
      item.Date_inspect = new Date(
        Date.now() - new Date().getTimezoneOffset() * 60000
      );
      // alert(item)
    },
    fn_CustomerFinish(item) {
      item.Date_finish = new Date(
        Date.now() - new Date().getTimezoneOffset() * 60000
      );
      // alert(item)
    },
  },
};
</script>