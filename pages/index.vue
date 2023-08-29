<style scoped>
::v-deep .costomgray > .v-input__control > .v-input__slot {
  background-color: white;
}
</style>
<template>
  <div>
    <v-card elevation="1" class="mt-3">
      <v-card-title>
        <b><v-icon>mdi-calendar-month</v-icon> นัดวันนี้ &nbsp;</b>
        <v-chip color="error" label outlined>
          ทั้งหมด {{ desserts.length }} รายการ
        </v-chip>
        <v-spacer />
        <div class="text-center">
          <v-btn text color="success" @click="dialog = true">
            <v-icon>mdi-calendar-plus-outline</v-icon> เพิ่มนัด
          </v-btn>
        </div>
      </v-card-title>
      <v-divider />
      <v-card-text>
        <v-card color="rgb(237 235 215)" elevation="0" class="pa-5 mb-3">
          <v-row>
            <v-col md="7">
              <v-text-field
                class="costomgray"
                prepend-inner-icon="mdi-magnify"
                outlined
                dense
                placeholder="รหัสลูกค้า ชื่อ-นามสกุล หรือ แพทย์"
                hide-details
              ></v-text-field>
            </v-col>
            <v-col md="2">
              <Vmenu :vdate="dateStart" :label="'ตั้งแต่วันที่'" />
            </v-col>
            <v-col md="2">
              <Vmenu :vdate="dateStart" :label="'ถึงวันที่'" />
            </v-col>
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
                  รหัสลูกค้า
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
                  แพทย์
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
                  เวลานัด
                </th>
                <th
                  style="background-color: #212121"
                  class="text-left font-weight-bold white--text"
                >
                  เลื่อน/ยกเลิก
                </th>
                <th
                  style="background-color: #212121"
                  class="text-left font-weight-bold white--text"
                >
                  มาถึง
                </th>
                <th
                  style="background-color: #212121"
                  class="text-left font-weight-bold white--text"
                >
                  เข้าตรวจ
                </th>
                <th
                  style="background-color: #212121"
                  class="text-left font-weight-bold white--text"
                >
                  ตรวจเสร็จ
                </th>

                <th
                  style="background-color: #212121"
                  class="text-left font-weight-bold white--text"
                >
                  หมายเหตุ
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
                <td class="text-left">{{ item.Doctor_name }}</td>
                <td class="text-left">{{ item.Status }}</td>
                <td class="text-left">
                  {{ DateFormat(item.Date_nut, "HH:mm A") }}
                </td>
                <td class="text-left">
                  <v-btn
                    elevation="0"
                    color="error"
                    small
                    text
                    @click="dialogEdit = true"
                  >
                    <v-icon>mdi-text-box-edit</v-icon>
                  </v-btn>
                </td>
                <td class="text-left">
                  <span v-if="item.Date_come">{{
                    DateFormat(item.Date_come, "HH:mm A")
                  }}</span>
                  <v-btn
                    v-else
                    elevation="0"
                    color="info"
                    small
                    @click="fn_CustomerCome(item)"
                  >
                    มาถึง
                  </v-btn>
                </td>
                <td class="text-left">
                  <v-btn
                    v-if="item.Date_come && !item.Date_inspect"
                    elevation="0"
                    color="warning"
                    small
                    @click="fn_CustomerInspect(item)"
                  >
                    เข้าตรวจ
                  </v-btn>
                  <span v-else>{{
                    DateFormat(item.Date_inspect, "HH:mm A")
                  }}</span>
                </td>
                <td class="text-left">
                  <v-btn
                    v-if="
                      item.Date_come && item.Date_inspect && !item.Date_finish
                    "
                    elevation="0"
                    color="success"
                    small
                    @click="fn_CustomerFinish(item)"
                  >
                    ตรวจเสร็จ
                  </v-btn>
                  <span v-else>{{
                    DateFormat(item.Date_finish, "HH:mm A")
                  }}</span>
                </td>
                <td class="text-left">{{ item.Remark }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card-text>
    </v-card>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card >
        <v-card-title>
          <span class="text-h5"
            ><v-icon>mdi-calendar-plus-outline</v-icon> เพิ่มนัด</span
          >
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col md="6" sm="12" cols="12">
              <Vmenu ref="" :vdate="FormAdd.Date_nut" :label="'วันที่'" />
            </v-col>
          </v-row>
          <v-row class="pb-3">
            <v-col md="6" sm="12" cols="12">
              <v-text-field
                label="เริ่มเวลา"
                outlined
                dense
                hide-details
                type="time"
              ></v-text-field>
            </v-col>
            <v-col md="6" sm="12" cols="12">
              <v-text-field
                label="สิ้นสุด"
                outlined
                dense
                hide-details
                type="time"
              ></v-text-field>
            </v-col>
            <v-col md="6" sm="12" cols="12">
              <v-select
                outlined
                dense
                hide-details
                placeholder="-----เลือกแพทย์-----"
                :items="['-----เลือกแพทย์-----']"
              ></v-select>
            </v-col>
            <v-col md="6" sm="12" cols="12">
              <v-select
                outlined
                dense
                hide-details
                placeholder="----- ห้อง -----"
                :items="['-----เลือกห้อง-----']"
              ></v-select>
            </v-col>
            <v-col md="6" sm="12" cols="12">
              <v-select
                outlined
                dense
                hide-details
                placeholder="----- เลือกหมายเหตุ -----"
                :items="['-----เลือกหมายเหตุ-----']"
              ></v-select>
            </v-col>
            <v-col md="12" sm="12" cols="12">
              <v-textarea
                outlined
                dense
                hide-details
                label="หมายเหตุ"
                rows="3"
              ></v-textarea>
            </v-col>
          </v-row>
          <v-divider />
          <v-row class="pt-3">
            <v-col md="6" sm="12" cols="12">
              <v-autocomplete
                :items="CoustomerOP"
                placeholder="ชื่อ หรือ รหัส คนไข้"
                outlined
                dense
                hide-details
              ></v-autocomplete>
            </v-col>
          </v-row>
          <v-row>
            <v-col md="6" sm="12" cols="12">
              <v-text-field
                label="ชื่อคนไข้"
                outlined
                dense
                hide-details
              ></v-text-field>
            </v-col>
            <v-col md="6" sm="12" cols="12">
              <v-text-field
                label="เบอร์โทร"
                outlined
                dense
                hide-details
              ></v-text-field>
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
    <v-dialog v-model="dialogEdit" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5"
            ><v-icon>mdi-calendar-plus-outline</v-icon> เลื่อน/ยกเลิก</span
          >
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col md="6" sm="12" cols="12">
              <v-select
                outlined
                dense
                hide-details
                label="เลือก"
                :items="['เลื่อนนัด', 'ยกเลิก']"
              ></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col md="6" sm="12" cols="12">
              <Vmenu ref="" :vdate="FormEdit.Date_nut" :label="'วันที่'" />
            </v-col>
          </v-row>
          <v-row class="pb-3">
            <v-col md="6" sm="12" cols="12">
              <v-text-field
                label="เริ่มเวลา"
                outlined
                dense
                hide-details
                type="time"
              ></v-text-field>
            </v-col>
            <v-col md="6" sm="12" cols="12">
              <v-text-field
                label="สิ้นสุด"
                outlined
                dense
                hide-details
                type="time"
              ></v-text-field>
            </v-col>
            <!-- <v-col md="6" sm="12" cols="12">
              <v-select
                outlined
                dense
                hide-details
                placeholder="-----เลือกแพทย์-----"
                :items="['-----เลือกแพทย์-----']"
              ></v-select>
            </v-col>
            <v-col md="6" sm="12" cols="12">
              <v-select
                outlined
                dense
                hide-details
                placeholder="----- ห้อง -----"
                :items="['-----เลือกห้อง-----']"
              ></v-select>
            </v-col>
            <v-col md="6" sm="12" cols="12">
              <v-select
                outlined
                dense
                hide-details
                placeholder="----- เลือกหมายเหตุ -----"
                :items="['-----เลือกหมายเหตุ-----']"
              ></v-select>
            </v-col> -->
            <v-col md="12" sm="12" cols="12">
              <v-textarea
                outlined
                dense
                hide-details
                label="หมายเหตุ"
                rows="3"
              ></v-textarea>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialogEdit = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="dialogEdit = false">
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