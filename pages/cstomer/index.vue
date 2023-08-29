<template>
  <div>
    <v-card elevation="1" class="mt-3">
      <v-card-title>
        <b><v-icon>mdi-calendar-month</v-icon> คนไข้</b>
        <v-spacer />
        <div class="text-center">
          <v-btn text color="success" @click="dialog = true">
            <v-icon>mdi-account-multiple-plus</v-icon> เพิ่มคนไข้
          </v-btn>
        </div>
      </v-card-title>
      <v-divider />
      <v-card-text>
        <v-row>
          <!-- <v-col md="2">
            <v-menu v-model="menu" :close-on-content-click="false" :nudge-right="40" transition="scale-transition"
              offset-y min-width="auto">
              <template v-slot:activator="{ on, attrs }">
                <v-text-field v-model="date" label="วันที่" prepend-inner-icon="mdi-calendar" readonly v-bind="attrs"
                  v-on="on" outlined dense hide-details></v-text-field>
              </template>
              <v-date-picker v-model="date" color="deep-orange" @input="menu = false"></v-date-picker>
            </v-menu>
          </v-col> -->
          <v-col md="2">
            <v-text-field v-model="date" label="ชื่อ-นามสกุล" outlined dense hide-details></v-text-field>
          </v-col>
          <v-col md="2">
            <v-text-field v-model="date" label="บัตรประชาชน" outlined dense hide-details></v-text-field>
          </v-col>
        </v-row>
        <br />
        <v-divider style="border-top: 1px dashed rgba(0, 0, 0, 0.12)" />
        <v-simple-table fixed-header height="70vh">
          <template v-slot:default>
            <thead>
              <tr>
                <th style="background-color: #212121" class="text-center font-weight-bold white--text">
                  ลำดับ
                </th>
                <th style="background-color: #212121" class="text-center font-weight-bold white--text">
                  บัตรประชาชน
                </th>
                <th style="background-color: #212121" class="text-center font-weight-bold white--text">
                  ชื่อเล่น
                </th>
                <th style="background-color: #212121" class="text-center font-weight-bold white--text">
                  ชื่อ - สกุล
                </th>
                <th style="background-color: #212121" class="text-center font-weight-bold white--text">
                  เบอร์โทรศัพท์
                </th>
                <th style="background-color: #212121" class="text-center font-weight-bold white--text">
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(r, i) in get_loadtable" :key="i">
                <td class="text-center" nowrap="">{{ r.row }}</td>
                <td nowrap="" class="text-left">{{ r.IDCard }}</td>
                <td nowrap="" class="text-left">{{ r.Nicknname }}</td>
                <td nowrap="" class="text-left"> <v-avatar size="30">
                    <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
                  </v-avatar>
                  <span class="pl-3">{{ r.Name }}</span>
                </td>
                <td nowrap="" class="text-left">{{ r.Phone }}</td>
                <td nowrap="" class="text-center">
                  <v-icon @click="Detil(r)" color="primary">
                    mdi-account-eye
                  </v-icon>
                  <v-icon @click="Detil(r)" color="warning">
                    mdi-pencil
                  </v-icon>
                  <v-icon @click="Detil(r)" color="error">
                    mdi-delete-empty
                  </v-icon>
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
  name: 'InspirePage',
  data: () => ({
    skeletonshow: true,
    countdata: 0,
    page: 1,
    total_record: 1,
    get_loadtable: [
      { row: 1, IDCard: 1111111, Name: "Frozen Yogurt",Nicknname:"Nicknname",Phone:"088-888-8080" },
      { row: 2, IDCard: 2222222, Name: "Ice cream sandwich",Nicknname:"Nicknname",Phone:"088-888-8080"},
      { row: 3, IDCard: 3333333, Name: "Eclair",Nicknname:"Nicknname",Phone:"088-888-8080" },
      { row: 4, IDCard: 4444444, Name: "Cupcake",Nicknname:"Nicknname",Phone:"088-888-8080" },
      { row: 5, IDCard: 5555555, Name: "Gingerbread",Nicknname:"Nicknname",Phone:"088-888-8080" },
      { row: 6, IDCard: 6666666, Name: "Jelly bean",Nicknname:"Nicknname",Phone:"088-888-8080" },
      { row: 7, IDCard: 7777777, Name: "Lollipop",Nicknname:"Nicknname",Phone:"088-888-8080" },
      { row: 8, IDCard: 8888888, Name: "Honeycomb",Nicknname:"Nicknname",Phone:"088-888-8080" },
      { row: 9, IDCard: 9999999, Name: "Donut",Nicknname:"Nicknname",Phone:"088-888-8080" },
      { row: 10, IDCard: 1010101, Name: "KitKat",Nicknname:"Nicknname",Phone:"088-888-8080" },




    ]
  }),
  methods: {
    Detil() {
      this.$router.push({
        path: "/cstomer/Details",
      });
    },
  },
}
</script>
  