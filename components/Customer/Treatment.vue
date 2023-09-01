<template>
  <div>
    <v-list two-line>
      <v-list-item-group active-class="pink--text">
        <template v-for="(item, index) in items">
          <v-list-item :key="item.title" @click="fn_ddddd">
            <template v-slot:default="{ active }">
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>

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

                <v-icon v-else color="yellow darken-3"> mdi-star </v-icon>
              </v-list-item-action>
            </template>
          </v-list-item>

          <v-divider v-if="index < items.length - 1" :key="index"></v-divider>
        </template>
      </v-list-item-group>
    </v-list>

    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card >
        <v-toolbar dark color="#212121">
          <v-toolbar-title>HN-2023080001 - นายแดง ไบเล่</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <br />
        <v-row>
          <v-col md="5">
            <div style="height: 85vh; overflow: auto">
              <v-list two-line>
                <v-list-item-group v-model="selectHe" active-class="pink--text">
                  <template v-for="(item, index) in itemsub">
                    <v-list-item :key="item.title" @change="fn_detaailHe(item)">
                      <template v-slot:default="{ active }">
                        <v-list-item-content>
                          <v-list-item-title
                            >{{ index + 1 }} &nbsp;{{
                              item.title
                            }}
                            </v-list-item-title>

                          <v-list-item-subtitle
                            class="text--primary"
                            v-text="item.headline"
                          ></v-list-item-subtitle>
                          <spa style="font-size: 0.875rem;color: rgb(0 0 0 / 87%);">{{ item.subtitle }}</spa>
                        </v-list-item-content>

                        <v-list-item-action>
                          <v-list-item-action-text
                            v-text="item.action"
                          ></v-list-item-action-text>

                          <!-- <v-icon v-if="!active" color="grey lighten-1">
                            mdi-star-outline
                          </v-icon>

                          <v-icon v-else color="yellow darken-3">
                            mdi-star
                          </v-icon> -->
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
            </div>
          </v-col>
          <v-col md="7">
            <div
              v-if="selectHe != null && selectHe >= 0"
              style="height: 85vh; overflow: auto"
            >
              <v-row>
                <v-col v-for="n in 9" :key="n" cols="12">
                  <v-img
                    :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                    :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                    :aspect-ratio="16 / 8"
                    class="grey lighten-2"
                  >
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular
                          indeterminate
                          color="grey lighten-5"
                        ></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
      itemsub: [
        {
          action: "20 Apr,2022",
          headline: "neighborhood",
          subtitle: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
          title: "ทำจมูก",
        },
        {
          action: "15 Apr,2022",
          headline: "Summer BBQ",
          subtitle: `Wish I could come, but I'm out of town this weekend.`,
          title: "ทำจมูก",
        },
        {
          action: "10 Apr,2022",
          headline: "Oui oui",
          subtitle: "Do you have Paris recommendations? Have you ever been?",
          title: "ทำจมูก",
        },
      ],
      dialog: false,
      detaailHe: {},
      selectHe: null,
    };
  },
  methods: {
    fn_ddddd() {
      this.dialog = true;
    },
    fn_detaailHe(item) {
      this.detaailHe = item;
    },
  },
};
</script>
