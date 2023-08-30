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
      <!-- <v-row>
        <v-col md="auto">
          <v-avatar size="150" style="border: 3px solid #d4af37">
            <img
              src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
              alt="John"
            />
          </v-avatar>
        </v-col>
        <v-col md="auto">
          <div class="pa-3" style="color: #d4af37">
            <h1 style="color: #d4af37"><strong>Anna</strong></h1>
            <p><strong>Anna Adame</strong></p>
            <p>
              <v-icon color="#D4AF37" small>mdi-map-marker</v-icon> 2/67
              รามคำแหง 157
              <v-icon color="#D4AF37" small>mdi-phone</v-icon> 088-888-8888
            </p>
          </div>
        </v-col>
      </v-row> -->
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
          <!-- <div align="right" class="mb-5">
            <v-btn depressed text color="#D4AF37" @click="tab = 1">
              ประวัติคนไข้
            </v-btn>
            <v-btn depressed text color="#D4AF37" @click="tab = 1">
              การรักษา
            </v-btn>
            <v-btn depressed text color="#D4AF37"> Error </v-btn>
          </div> -->
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
                  <fieldset>
                    <legend class="pl-2 pr-2 pt-1 pb-1">
                      <h3 class="font-weight-bold black--text text-center">
                        ข้อมูลทั่วไป
                      </h3>
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
                      <h3 class="font-weight-bold black--text text-center">
                        ที่อยู่
                      </h3>
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
                </v-card-text>
              </v-tab-item>
              <v-tab-item>
                <v-card-text>
                  <v-list two-line>
                    <v-list-item-group
                      active-class="pink--text"
                    >
                      <template v-for="(item, index) in items">
                        <v-list-item :key="item.title" @click="fn_ddddd">
                          <template v-slot:default="{ active }">
                            <v-list-item-content>
                              <v-list-item-title
                                v-text="item.title"
                              ></v-list-item-title>

                              <v-list-item-subtitle
                                class="text--primary"
                                v-text="item.headline"
                              ></v-list-item-subtitle>

                              <v-list-item-subtitle
                                v-text="item.subtitle"
                              ></v-list-item-subtitle>
                            </v-list-item-content>

                            <v-list-item-action>
                              <v-list-item-action-text
                                v-text="item.action"
                              ></v-list-item-action-text>

                              <v-icon v-if="!active" color="grey lighten-1">
                                mdi-star-outline
                              </v-icon>

                              <v-icon v-else color="yellow darken-3">
                                mdi-star
                              </v-icon>
                            </v-list-item-action>
                          </template>
                        </v-list-item>

                        <v-divider
                          v-if="index < items.length - 1"
                          :key="index"
                        ></v-divider>
                      </template>
                    </v-list-item-group>
                  </v-list>
                </v-card-text>
              </v-tab-item>
            </v-tabs-items>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <!-- 
    <v-card elevation="1" class="mt-3">
      <v-card-title>
        <b><v-icon>mdi-account-tie</v-icon> ประวัติคนไข้</b>
        <v-spacer />
      </v-card-title>
      <v-divider />
      <v-card-text>
        <v-row justify="center">
          <v-col cols="6">
            <v-card>
              <div align="center" class="pa-10">
                <v-avatar size="200">
                  <img
                    src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                    alt="John"
                  />
                </v-avatar>
              </div>

              <v-card-title>Cafe Badilico</v-card-title>

              <v-card-text>
                <v-row align="center" class="mx-0">
                  <v-rating
                    :value="4.5"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  ></v-rating>

                  <div class="grey--text ms-4">4.5 (413)</div>
                </v-row>

                <div class="my-4 text-subtitle-1">$ • Italian, Cafe</div>

                <div>
                  Small plates, salads & sandwiches - an intimate setting with
                  12 indoor seats plus patio seating.
                </div>
              </v-card-text>

              <v-divider class="mx-4"></v-divider>

              <v-card-title>Tonight's availability</v-card-title>

              <v-card-text>
                <v-row>
                  <v-col md="6">
                    <v-text-field
                      label="รหัสลูกค้า"
                      outlined
                      dense
                      hide-details
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col md="6">
                    <v-text-field
                      label="บัตรประชาชน"
                      outlined
                      dense
                      hide-details
                    ></v-text-field>
                  </v-col>
                  <v-col md="6">
                    <v-text-field
                      label="Passport no."
                      outlined
                      dense
                      hide-details
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col md="6">
                    <v-text-field
                      label="ชื่อเล่น"
                      outlined
                      dense
                      hide-details
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col md="6">
                    <v-text-field
                      label="ชื่อ"
                      outlined
                      dense
                      hide-details
                    ></v-text-field>
                  </v-col>
                  <v-col md="6">
                    <v-text-field
                      label="นามสกุล"
                      outlined
                      dense
                      hide-details
                    ></v-text-field>
                  </v-col>
                  <v-col md="6">
                    <v-text-field
                      label="เพศ"
                      outlined
                      dense
                      hide-details
                    ></v-text-field>
                  </v-col>
                  <v-col md="6">
                    <v-text-field
                      label="วันเกิด"
                      outlined
                      dense
                      hide-details
                    ></v-text-field>
                  </v-col>
                  <v-col md="6">
                    <v-text-field
                      label="อายุ"
                      outlined
                      dense
                      hide-details
                    ></v-text-field>
                  </v-col>
                  <v-col md="6">
                    <v-text-field
                      label="อาชีพ"
                      outlined
                      dense
                      hide-details
                    ></v-text-field>
                  </v-col>
                  <v-col md="6">
                    <v-text-field
                      label="เชื้อชาติ"
                      outlined
                      dense
                      hide-details
                    ></v-text-field>
                  </v-col>
                  <v-col md="6">
                    <v-text-field
                      label="สัญชาติ"
                      outlined
                      dense
                      hide-details
                    ></v-text-field>
                  </v-col>
                  <v-col md="6">
                    <v-text-field
                      label="ศาสนา"
                      outlined
                      dense
                      hide-details
                    ></v-text-field>
                  </v-col>
                  <v-col md="6">
                    <v-text-field
                      label="สถานภาพ"
                      outlined
                      dense
                      hide-details
                    ></v-text-field>
                  </v-col>
                  <v-col md="6">
                    <v-text-field
                      label="น้ำหนัก(kg.)"
                      outlined
                      dense
                      hide-details
                    ></v-text-field>
                  </v-col>
                  <v-col md="6">
                    <v-text-field
                      label="ส่วนสูง(cm.)"
                      outlined
                      dense
                      hide-details
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-card-text>

              <v-card-actions>
                <v-btn color="deep-purple lighten-2" text> Reserve </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card> -->
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar
          dark
          color="primary"
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Settings</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              dark
              text
              @click="dialog = false"
            >
              Save
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-list
          three-line
          subheader
        >
          <v-subheader>User Controls</v-subheader>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Content filtering</v-list-item-title>
              <v-list-item-subtitle>Set the content filtering level to restrict apps that can be downloaded</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Password</v-list-item-title>
              <v-list-item-subtitle>Require password for purchase or use password to restrict purchase</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list
          three-line
          subheader
        >
          <v-subheader>General</v-subheader>
          <v-list-item>
            <v-list-item-action>
              <!-- <v-checkbox v-model="notifications"></v-checkbox> -->
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Notifications</v-list-item-title>
              <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <!-- <v-checkbox v-model="sound"></v-checkbox> -->
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Sound</v-list-item-title>
              <v-list-item-subtitle>Auto-update apps at any time. Data charges may apply</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <!-- <v-checkbox v-model="widgets"></v-checkbox> -->
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Auto-add widgets</v-list-item-title>
              <v-list-item-subtitle>Automatically add home screen widgets</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tab: 0,
      items: ["Appetizers", "Entrees", "Deserts", "Cocktails"],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      selected: [],
      items: [
        {
          action: "15 min",
          headline: "",
          subtitle: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
          title: "ทำจมูก",
        },
        {
          action: "2 hr",
          headline: "Summer BBQ",
          subtitle: `Wish I could come, but I'm out of town this weekend.`,
          title: "ทำปาก",
        },
        {
          action: "6 hr",
          headline: "Oui oui",
          subtitle: "Do you have Paris recommendations? Have you ever been?",
          title: "จัดฟัน",
        },
      ],
      dialog:false,
    };
  },
  methods: {
    fn_ddddd() {
      this.dialog =true
    },
  },
  mounted() {},
};
</script>