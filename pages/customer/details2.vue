<style scoped>
::v-deep .costomgray > .v-input__control > .v-input__slot {
  background-color: rgb(234, 233, 226);
}
fieldset {
  border: 4px solid rgb(234, 233, 226);
  padding: 3px 10px;
  border-radius: 4px;
}
legend {
  background-color: rgb(234, 233, 226);
  border-radius: 4px;
}
</style>
<template>
  <div>
    <fieldset>
      <legend class="pl-2 pr-2 pt-1 pb-1">
        <h3 class="font-weight-bold black--text text-center">ข้อมูลทั่วไป</h3>
      </legend>
      <v-row>
        <v-col md="2" sm="12" cols="12" class="pb-0">
          <div class="font-weight-bold">ชื่อ :</div>
        </v-col>
        <v-col md="4" sm="12" cols="12" class="pb-0">
          <v-text-field
            class="costomgray"
            solo
            flat
            dense
            hide-details
            readonly
            value=""
          ></v-text-field>
        </v-col>
        <v-col md="2" sm="12" cols="12" class="pb-0">
          <div class="font-weight-bold">นามสกุล :</div>
        </v-col>
        <v-col md="4" sm="12" cols="12" class="pb-0">
          <v-text-field
            class="costomgray"
            solo
            flat
            dense
            hide-details
            readonly
            value=""
          ></v-text-field>
        </v-col>
        <v-col md="2" sm="12" cols="12" class="pb-0">
          <div class="font-weight-bold">บัตรประชาชน :</div>
        </v-col>
        <v-col md="4" sm="12" cols="12" class="pb-0">
          <v-text-field
            class="costomgray"
            solo
            flat
            dense
            hide-details
            readonly
            value=""
          ></v-text-field>
        </v-col>
        <v-col md="2" sm="12" cols="12" class="pb-0">
          <div class="font-weight-bold">Passport no. :</div>
        </v-col>
        <v-col md="4" sm="12" cols="12" class="pb-0">
          <v-text-field
            class="costomgray"
            solo
            flat
            dense
            hide-details
            readonly
            value=""
          ></v-text-field>
        </v-col>
        <v-col md="2" sm="12" cols="12" class="pb-0">
          <div class="font-weight-bold">เบอร์โทรศัพท์ :</div>
        </v-col>
        <v-col md="4" sm="12" cols="12" class="pb-0">
          <v-text-field
            class="costomgray"
            solo
            flat
            dense
            hide-details
            readonly
            value=""
          ></v-text-field>
        </v-col>
        <v-col md="2" sm="12" cols="12" class="pb-0">
          <div class="font-weight-bold">Email :</div>
        </v-col>
        <v-col md="4" sm="12" cols="12" class="pb-0">
          <v-text-field
            class="costomgray"
            solo
            flat
            dense
            hide-details
            readonly
            value=""
          ></v-text-field>
        </v-col>

        <v-col md="2" sm="12" cols="12" class="pb-0">
          <div class="font-weight-bold">วันเกิด :</div>
        </v-col>
        <v-col md="4" sm="12" cols="12" class="pb-0">
          <v-text-field
            class="costomgray"
            solo
            flat
            dense
            hide-details
            readonly
            value=""
          ></v-text-field>
        </v-col>
        <v-col md="2" sm="12" cols="12" class="pb-0">
          <div class="font-weight-bold">อายุ :</div>
        </v-col>
        <v-col md="4" sm="12" cols="12" class="pb-0">
          <v-text-field
            class="costomgray"
            solo
            flat
            dense
            hide-details
            readonly
            value=""
          ></v-text-field>
        </v-col>
        <v-col md="2" sm="12" cols="12" class="pb-0">
          <div class="font-weight-bold">เพศ :</div>
        </v-col>
        <v-col md="4" sm="12" cols="12" class="pb-0">
          <v-text-field
            class="costomgray"
            solo
            flat
            dense
            hide-details
            readonly
            value=""
          ></v-text-field>
        </v-col>
        <v-col md="2" sm="12" cols="12" class="pb-0">
          <div class="font-weight-bold">อาชีพ :</div>
        </v-col>
        <v-col md="4" sm="12" cols="12" class="pb-0">
          <v-text-field
            class="costomgray"
            solo
            flat
            dense
            hide-details
            readonly
            value=""
          ></v-text-field>
        </v-col>
        <v-col md="2" sm="12" cols="12" class="pb-0">
          <div class="font-weight-bold">เชื้อชาติ :</div>
        </v-col>
        <v-col md="4" sm="12" cols="12" class="pb-0">
          <v-text-field
            class="costomgray"
            solo
            flat
            dense
            hide-details
            readonly
            value=""
          ></v-text-field>
        </v-col>
        <v-col md="2" sm="12" cols="12" class="pb-0">
          <div class="font-weight-bold">สัญชาติ :</div>
        </v-col>
        <v-col md="4" sm="12" cols="12" class="pb-0">
          <v-text-field
            class="costomgray"
            solo
            flat
            dense
            hide-details
            readonly
            value=""
          ></v-text-field>
        </v-col>
        <v-col md="2" sm="12" cols="12" class="pb-0">
          <div class="font-weight-bold">ศาสนา :</div>
        </v-col>
        <v-col md="4" sm="12" cols="12" class="pb-0">
          <v-text-field
            class="costomgray"
            solo
            flat
            dense
            hide-details
            readonly
            value=""
          ></v-text-field>
        </v-col>
        <v-col md="2" sm="12" cols="12" class="pb-0">
          <div class="font-weight-bold">สถานภาพ :</div>
        </v-col>
        <v-col md="4" sm="12" cols="12" class="pb-0">
          <v-text-field
            class="costomgray"
            solo
            flat
            dense
            hide-details
            readonly
            value=""
          ></v-text-field>
        </v-col>
        <v-col md="2" sm="12" cols="12" class="pb-0">
          <div class="font-weight-bold">น้ำหนัก(kg.) :</div>
        </v-col>
        <v-col md="4" sm="12" cols="12" class="pb-0">
          <v-text-field
            class="costomgray"
            solo
            flat
            dense
            hide-details
            readonly
            value=""
          ></v-text-field>
        </v-col>
        <v-col md="2" sm="12" cols="12" class="pb-0">
          <div class="font-weight-bold">ส่วนสูง(cm.) :</div>
        </v-col>
        <v-col md="4" sm="12" cols="12" class="pb-0">
          <v-text-field
            class="costomgray"
            solo
            flat
            dense
            hide-details
            readonly
            value=""
          ></v-text-field>
        </v-col>
      </v-row>
      <br />
    </fieldset>
    <br />
    <fieldset>
      <legend class="pl-2 pr-2 pt-1 pb-1">
        <h3 class="font-weight-bold black--text text-center">ที่อยู่</h3>
      </legend>
      <v-row>
        <v-col md="2" sm="12" cols="12" class="pb-0">
          <div class="font-weight-bold">บ้านเลขที่ :</div>
        </v-col>
        <v-col md="4" sm="12" cols="12" class="pb-0">
          <v-text-field
            class="costomgray"
            solo
            flat
            dense
            hide-details
            readonly
            value=""
          ></v-text-field>
        </v-col>
        <v-col md="2" sm="12" cols="12" class="pb-0">
          <div class="font-weight-bold">หมู่บ้าน :</div>
        </v-col>
        <v-col md="4" sm="12" cols="12" class="pb-0">
          <v-text-field
            class="costomgray"
            solo
            flat
            dense
            hide-details
            readonly
            value=""
          ></v-text-field>
        </v-col>
        <v-col md="2" sm="12" cols="12" class="pb-0">
          <div class="font-weight-bold">ตรอก/ซอย :</div>
        </v-col>
        <v-col md="4" sm="12" cols="12" class="pb-0">
          <v-text-field
            class="costomgray"
            solo
            flat
            dense
            hide-details
            readonly
            value=""
          ></v-text-field>
        </v-col>
        <v-col md="2" sm="12" cols="12" class="pb-0">
          <div class="font-weight-bold">ถนน :</div>
        </v-col>
        <v-col md="4" sm="12" cols="12" class="pb-0">
          <v-text-field
            class="costomgray"
            solo
            flat
            dense
            hide-details
            readonly
            value=""
          ></v-text-field>
        </v-col>
        <v-col md="2" sm="12" cols="12" class="pb-0">
          <div class="font-weight-bold">หมู่ :</div>
        </v-col>
        <v-col md="4" sm="12" cols="12" class="pb-0">
          <v-text-field
            class="costomgray"
            solo
            flat
            dense
            hide-details
            readonly
            value=""
          ></v-text-field>
        </v-col>
        <v-col md="2" sm="12" cols="12" class="pb-0">
          <div class="font-weight-bold">แขวง/ตำบล :</div>
        </v-col>
        <v-col md="4" sm="12" cols="12" class="pb-0">
          <v-text-field
            class="costomgray"
            solo
            flat
            dense
            hide-details
            readonly
            value=""
          ></v-text-field>
        </v-col>
        <v-col md="2" sm="12" cols="12" class="pb-0">
          <div class="font-weight-bold">เขต/อำเภอ :</div>
        </v-col>
        <v-col md="4" sm="12" cols="12" class="pb-0">
          <v-text-field
            class="costomgray"
            solo
            flat
            dense
            hide-details
            readonly
            value=""
          ></v-text-field>
        </v-col>
        <v-col md="2" sm="12" cols="12" class="pb-0">
          <div class="font-weight-bold">จังหวัด :</div>
        </v-col>
        <v-col md="4" sm="12" cols="12" class="pb-0">
          <v-text-field
            class="costomgray"
            solo
            flat
            dense
            hide-details
            readonly
            value=""
          ></v-text-field>
        </v-col>
        <v-col md="2" sm="12" cols="12" class="pb-0">
          <div class="font-weight-bold">รหัสไปรษณีย์ :</div>
        </v-col>
        <v-col md="4" sm="12" cols="12" class="pb-0">
          <v-text-field
            class="costomgray"
            solo
            flat
            dense
            hide-details
            readonly
            value=""
          ></v-text-field>
        </v-col>
      </v-row>
      <br />
    </fieldset>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tab: 0,
      
    };
  },
};
</script>