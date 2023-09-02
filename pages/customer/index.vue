<style scoped>
::v-deep .costomgray > .v-input__control > .v-input__slot {
  background-color: white;
}
</style>
<template>
  <div>
    <v-card elevation="1" class="mt-3">
      <v-card-title>
        <b><v-icon>mdi-account-tie</v-icon> คนไข้&nbsp;</b>
        <v-chip color="error" label outlined>
          ทั้งหมด {{ get_loadtable.length }} รายการ
        </v-chip>
        <v-spacer />
        <div class="text-center">
          <v-btn text color="success" to="/customer/profile?type=add">
            <v-icon>mdi-account-multiple-plus</v-icon> เพิ่มคนไข้
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
                placeholder="รหัสลูกค้า ชื่อ-นามสกุล เลขบัตรประชาชน"
                hide-details
              ></v-text-field>
            </v-col>
            <v-col md="1">
              <v-btn elevation="0" color="primary">
                <v-icon>mdi-magnify</v-icon>
                ค้นหา
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
        <br />
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
                  class="text-center font-weight-bold white--text"
                >
                  รหัสลูกค้า
                </th>
                <th
                  style="background-color: #212121"
                  class="text-center font-weight-bold white--text"
                >
                  ชื่อเล่น
                </th>
                <th
                  style="background-color: #212121"
                  class="text-center font-weight-bold white--text"
                >
                  ชื่อ - สกุล
                </th>
                <th
                  style="background-color: #212121"
                  class="text-center font-weight-bold white--text"
                >
                  เบอร์โทรศัพท์
                </th>
                <th
                  style="background-color: #212121"
                  class="text-center font-weight-bold white--text"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(r, i) in get_loadtable" :key="i">
                <td class="text-center" nowrap="">{{ r.row }}</td>
                <td nowrap="" class="text-left">{{ r.IDCard }}</td>
                <td nowrap="" class="text-left">{{ r.Nickname }}</td>
                <td nowrap="" class="text-left">
                  <v-avatar size="30">
                    <img
                      src="https://cdn.vuetifyjs.com/images/john.jpg"
                      alt="John"
                    />
                  </v-avatar>
                  <span class="pl-3">{{ r.Fisrtname }}&nbsp;{{ r.Lastname }}</span>
                </td>
                <td nowrap="" class="text-left">{{ r.tell }}</td>
                <td nowrap="" class="text-center">
                  <v-btn
                    elevation="0"
                    color="info"
                    x-small
                    text
                    to="/customer/profile?type=detail&idcus=101011001"
                  >
                    <v-icon> mdi-eye</v-icon>
                  </v-btn>
                  <v-btn
                    elevation="0"
                    color="warning"
                    x-small
                    text
                    to="/customer/profile?type=edit&idcus=101011001"
                  >
                    <v-icon> mdi-pencil</v-icon>
                  </v-btn>
                  <v-btn elevation="0" color="error" x-small text>
                    <v-icon> mdi-delete</v-icon>
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card-text>
    </v-card>
  </div>
</template>
  
<script>
export default {
  name: "InspirePage",
  data: () => ({
    skeletonshow: true,
    countdata: 0,
    page: 1,
    total_record: 1,
    get_loadtable: [
      {
        ID_customer: "0000001",
        IDCard: "1011100033000",
        Nickname: "แดง",
        Prefix: "นาย",
        Fisrtname: "น้ำแดง",
        Lastname: "จ้า",
        Birthday: "1997-09-09",
        Occupation: "s",
        Race: "s",
        Nationality: "e",
        religion: "",
        status_relationship: "",
        weight: "",
        height: "",
        address_number: "",
        address_moo: "",
        address_village: "",
        address_soi: "",
        address_road: "",
        address_subdistrict: "",
        address_district: "",
        address_province: "",
        postal: "",
        tell: "0093999948",
        email: "",
        profile: "",
      },
    ],
  }),
  methods: {
    Detil() {
      this.$router.push({
        path: "/customer/Details",
      });
    },
  },
};
</script>
  