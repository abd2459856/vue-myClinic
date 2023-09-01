<template>
  <div>
    <v-card color="#212121" elevation="0" height="300px" class="pa-5">
      <div align="right" class="mb-5">
        <v-btn depressed text color="#D4AF37" @click="tab = 1">
          ประวัติคนไข้
        </v-btn>
        <v-btn depressed text color="#D4AF37" @click="tab = 1">
          การรักษา
        </v-btn>
        <v-btn depressed text color="#D4AF37"> Error </v-btn>
      </div>
    </v-card>
    <div class="pl-5 pr-5" style="margin-top: -150px !important">
      <v-row>
        <v-col md="3">
          <div align="center" style="margin-top: -100px !important">
            <v-avatar size="200" style="border: 3px solid #d4af37; z-index: 1">
              <img
                src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                alt="John"
              />
            </v-avatar>
          </div>
          <v-card elevation="0" style="margin-top: -100px !important">
            <v-card-text style="padding-top: 130px" class="pl-10">
              <h1 align="center" class="font-weight-bold pb-5">Maaa Abideen</h1>
              <p>
                <v-icon color="#D4AF37" small>mdi-email</v-icon>&nbsp;
                aliconnors@example.com
              </p>
              <p>
                <v-icon color="#D4AF37" small>mdi-phone</v-icon>&nbsp;
                088-888-8888
              </p>
              <p>
                <v-icon color="#D4AF37" small>mdi-cake-variant</v-icon>&nbsp; -
              </p>
              <p>
                <v-icon color="#D4AF37" small>mdi-calendar</v-icon>&nbsp;
                มาครั้งล่าสุด 28/08/2566
              </p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col md="9">
          <v-card elevation="0">
            <v-tabs
              v-model="tab"
              background-color="rgb(234, 233, 226)"
              color="#D4AF37"
            >
              <v-tab> ประวัติคนไข้ </v-tab>
              <v-tab> การรักษา </v-tab>
            </v-tabs>
            <v-tabs-items v-model="tab">
              <v-tab-item>
                <v-card-text>
                  <Detail_cus></Detail_cus>
                </v-card-text>
              </v-tab-item>
              <v-tab-item>
                <v-card-text>
               <Treatment></Treatment>
                </v-card-text>
              </v-tab-item>
            </v-tabs-items>
          </v-card>
        </v-col>
      </v-row>
    </div>
 

  </div>
</template>

<script>
import Detail_cus from "@/components/Customer/Detail_cus";
import Treatment from "@/components/Customer/Treatment";
export default {
  name: "IndexPage",
  components: {
    Detail_cus,
    Treatment,
  },
  data() {
    return {
      tab: 0,
      
    };
  },
  
 
};
</script>