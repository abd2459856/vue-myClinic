<template>
    <div>
        <v-card elevation="1" class="mt-3">
            <v-card-title>
                <b><v-icon>mdi-calendar-month</v-icon> ประวัติคนไข้</b>
                <v-spacer />
                <!-- <div class="text-center">
                    <v-btn text color="success" @click="dialog = true">
                        <v-icon>mdi-calendar-plus-outline</v-icon> เพิ่มนัด
                    </v-btn>
                </div> -->
            </v-card-title>
            <v-divider />
            <v-card-text>
                <v-row justify="center" cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                    <v-col cols="12" :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
                        <v-card elevation="2" cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                            <template>
                                <v-card class="mx-auto">
                                    <v-img src="https://cdn.vuetifyjs.com/images/lists/ali.png" height="300px" dark>
                                        <v-row class="fill-height">
                                            <!-- <v-card-title>
                                                <v-btn dark icon>
                                                    <v-icon>mdi-chevron-left</v-icon>
                                                </v-btn>
                                                <v-spacer></v-spacer>
                                                <v-btn dark icon class="mr-4">
                                                    <v-icon>mdi-pencil</v-icon>
                                                </v-btn>
                                                <v-btn dark icon>
                                                    <v-icon>mdi-dots-vertical</v-icon>
                                                </v-btn>
                                            </v-card-title> -->
                                            <v-spacer></v-spacer>
                                            <!-- <v-card-title class="white--text pl-12 pt-12">
                                                <div class="text-h4 pl-12 pt-12">
                                                    Ali Conners
                                                </div>
                                            </v-card-title> -->
                                        </v-row>
                                    </v-img>
                                    <v-list two-line>
                                        <v-list-item>
                                            <v-list-item-icon>
                                                <v-icon color="indigo">
                                                    mdi-account
                                                </v-icon>
                                            </v-list-item-icon>
                                            <v-list-item-content>
                                                <v-list-item-title>นาย กกก ดดด</v-list-item-title>
                                                <v-list-item-subtitle></v-list-item-subtitle>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-divider inset></v-divider>
                                        <v-list-item>
                                            <v-list-item-icon>
                                                <v-icon color="indigo">
                                                    mdi-phone
                                                </v-icon>
                                            </v-list-item-icon>
                                            <v-list-item-content>
                                                <v-list-item-title>088-888-8888</v-list-item-title>
                                                <v-list-item-subtitle>Mobile</v-list-item-subtitle>
                                            </v-list-item-content>
                                            <!-- <v-list-item-icon>
                                                <v-icon>mdi-message-text</v-icon>
                                            </v-list-item-icon> -->
                                        </v-list-item>
                                        <v-divider inset></v-divider>
                                        <v-list-item>
                                            <v-list-item-icon>
                                                <v-icon color="indigo">
                                                    mdi-email
                                                </v-icon>
                                            </v-list-item-icon>
                                            <v-list-item-content>
                                                <v-list-item-title>aliconnors@example.com</v-list-item-title>
                                                <v-list-item-subtitle>Personal</v-list-item-subtitle>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-divider inset></v-divider>
                                        <v-list-item>
                                            <v-list-item-icon>
                                                <v-icon color="indigo">
                                                    mdi-map-marker
                                                </v-icon>
                                            </v-list-item-icon>
                                            <v-list-item-content>
                                                <v-list-item-title>รามคำแหง 157</v-list-item-title>
                                                <v-list-item-subtitle>2/67 </v-list-item-subtitle>
                                            </v-list-item-content>
                                        </v-list-item>
                                        <v-divider inset></v-divider>
                                        <v-list-item>
                                            <v-list-item-icon>
                                                <v-icon color="indigo">
                                                    mdi-calendar-account-outline
                                                </v-icon>
                                            </v-list-item-icon>
                                            <v-list-item-content>
                                                <v-list-item-title>มาครั้งล่าสุด</v-list-item-title>
                                                <v-list-item-subtitle> 28/08/2566 </v-list-item-subtitle>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-list>
                                </v-card>
                            </template>
                        </v-card>
                    </v-col>
                    <v-col cols="12" :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
                        <v-card elevation="2" cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                            <v-card-title>ประวัติ</v-card-title>
                            <v-card-text>
                                <v-row cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                    <v-tabs fixed-tabs background-color="indigo" dark>
                                        <v-tab>
                                            ประวัติส่วนตัว
                                        </v-tab>
                                        <v-tab>
                                            ประวัติการรักษา    
                                        </v-tab>
                                        <v-tab>
                                            Items
                                        </v-tab>
                                        <v-tab>
                                            Another Screen
                                        </v-tab>
                                    </v-tabs>
                                </v-row>
                                <v-row cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                    <v-col cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                        <v-row cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                            <v-col cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                                <b class="font-weight-bold black--text"><v-icon large
                                                        color="" dense>
                                                        mdi-card-account-details-outline
                                                    </v-icon>
                                                    บัตรประชาชน : </b>
                                            </v-col>
                                            <v-col cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                                <v-otp-input length="13"></v-otp-input>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                    <v-col cols="12" :xs="12" :sm="12" :md="4" :lg="4" :xl="4">
                                        <v-row cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                            <v-col cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                                <b class="font-weight-bold black--text"><v-icon large
                                                        color="">
                                                        mdi-account-star
                                                    </v-icon>
                                                    ชื่อเล่น : </b>
                                            </v-col>
                                            <v-col cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                                <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name"
                                                    required></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                    <v-col cols="12" :xs="12" :sm="12" :md="4" :lg="4" :xl="4">
                                        <v-row cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                            <v-col cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                                <b class="font-weight-bold black--text"><v-icon large
                                                        color="">
                                                        mdi-gender-male-female
                                                    </v-icon>
                                                    เพศ : </b>
                                            </v-col>
                                            <v-col cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                                <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name"
                                                    required></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                    <v-col cols="12" :xs="12" :sm="12" :md="4" :lg="4" :xl="4">
                                        <v-row cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                            <v-col cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                                <b class="font-weight-bold black--text"><v-icon large
                                                        color="">
                                                        mdi-badge-account
                                                    </v-icon>
                                                    คำนำหน้า : </b>
                                            </v-col>
                                            <v-col cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                                <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name"
                                                    required></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                    <v-col cols="12" :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
                                        <v-row cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                            <v-col cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                                <b class="font-weight-bold black--text"><v-icon large
                                                        color="">
                                                        mdi-rename
                                                    </v-icon>
                                                    ชื่อ : </b>
                                            </v-col>
                                            <v-col cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                                <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name"
                                                    required></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                    <v-col cols="12" :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
                                        <v-row cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                            <v-col cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                                <b class="font-weight-bold black--text"><v-icon large
                                                        color="">
                                                        mdi-rename
                                                    </v-icon>
                                                    สกุล : </b>
                                            </v-col>
                                            <v-col cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                                <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name"
                                                    required></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                    <v-col cols="12" :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
                                        <v-row cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                            <v-col cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                                <b class="font-weight-bold black--text"><v-icon large
                                                        color="">
                                                        mdi-weight-kilogram
                                                    </v-icon>
                                                    น้ำหนัก : </b>
                                            </v-col>
                                            <v-col cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                                <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name"
                                                    required></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                    <v-col cols="12" :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
                                        <v-row cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                            <v-col cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                                <b class="font-weight-bold black--text"><v-icon large
                                                        color="">
                                                        mdi-human-male-height
                                                    </v-icon>
                                                    ส่วนสูง : </b>
                                            </v-col>
                                            <v-col cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                                <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name"
                                                    required></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                    <v-col cols="12" :xs="12" :sm="12" :md="4" :lg="4" :xl="4">
                                        <v-row cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                            <v-col cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                                <b class="font-weight-bold black--text"><v-icon large
                                                        color="">
                                                        mdi-phone-outline
                                                    </v-icon>
                                                    เบอร์โทรศัพท์ : </b>
                                            </v-col>
                                            <v-col cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                                <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name"
                                                    required></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                    <v-col cols="12" :xs="12" :sm="12" :md="4" :lg="4" :xl="4">
                                        <v-row cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                            <v-col cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                                <b class="font-weight-bold black--text"><v-icon large
                                                        color="">
                                                        mdi-email-outline
                                                    </v-icon>
                                                    อีเมล : </b>
                                            </v-col>
                                            <v-col cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                                <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name"
                                                    required></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                    <v-col cols="12" :xs="12" :sm="12" :md="4" :lg="4" :xl="4">
                                        <v-row cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                            <v-col cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                                <b class="font-weight-bold black--text"><v-icon large
                                                        color="">
                                                        mdi-cake
                                                    </v-icon>
                                                    วัน/เดือน/ปี เกิด : </b>
                                            </v-col>
                                            <v-col cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                                <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name"
                                                    required></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                    <v-col cols="12" :xs="12" :sm="12" :md="4" :lg="4" :xl="4">
                                        <v-row cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                            <v-col cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                                <b class="font-weight-bold black--text"><v-icon large
                                                        color="">
                                                        mdi-star-david
                                                    </v-icon>
                                                    ศาสนา: </b>
                                            </v-col>
                                            <v-col cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                                <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name"
                                                    required></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                    <v-col cols="12" :xs="12" :sm="12" :md="4" :lg="4" :xl="4">
                                        <v-row cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                            <v-col cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                                <b class="font-weight-bold black--text"><v-icon large
                                                        color="">
                                                        mdi-flag
                                                    </v-icon>
                                                    เชื้อชาติ : </b>
                                            </v-col>
                                            <v-col cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                                <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name"
                                                    required></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                    <v-col cols="12" :xs="12" :sm="12" :md="4" :lg="4" :xl="4">
                                        <v-row cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                            <v-col cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                                <b class="font-weight-bold black--text"><v-icon large
                                                        color="">
                                                        mdi-flag
                                                    </v-icon>
                                                    สัญชาติ : </b>
                                            </v-col>
                                            <v-col cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                                <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name"
                                                    required></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                    <v-col cols="12" :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
                                        <v-row cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                            <v-col cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                                <b class="font-weight-bold black--text"><v-icon large
                                                        color="">
                                                        mdi-briefcase-account-outline
                                                    </v-icon>
                                                    อาชีพ : </b>
                                            </v-col>
                                            <v-col cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                                <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name"
                                                    required></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                    <v-col cols="12" :xs="12" :sm="12" :md="6" :lg="6" :xl="6">
                                        <v-row cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                            <v-col cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                                <b class="font-weight-bold black--text"><v-icon large
                                                        color="">
                                                        mdi-account-heart-outline
                                                    </v-icon>
                                                    ความสัมพันธ์ : </b>
                                            </v-col>
                                            <v-col cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                                <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name"
                                                    required></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                    <v-col cols="12" :xs="12" :sm="12" :md="4" :lg="4" :xl="4">
                                        <v-row cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                            <v-col cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                                <b class="font-weight-bold black--text"><v-icon large
                                                        color=" ">
                                                        mdi-home-account
                                                    </v-icon>
                                                    บ้านเลขที่ : </b>
                                            </v-col>
                                            <v-col cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                                <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name"
                                                    required></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                    <v-col cols="12" :xs="12" :sm="12" :md="4" :lg="4" :xl="4">
                                        <v-row cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                            <v-col cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                                <b class="font-weight-bold black--text"><v-icon large
                                                        color="">
                                                        mdi-home-group
                                                    </v-icon>
                                                    หมู่บ้าน : </b>
                                            </v-col>
                                            <v-col cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                                <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name"
                                                    required></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                    <v-col cols="12" :xs="12" :sm="12" :md="4" :lg="4" :xl="4">
                                        <v-row cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                            <v-col cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                                <b class="font-weight-bold black--text"><v-icon large
                                                        color="">
                                                        mdi-road-variant
                                                    </v-icon>
                                                    ซอย : </b>
                                            </v-col>
                                            <v-col cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                                <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name"
                                                    required></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                    <v-col cols="12" :xs="12" :sm="12" :md="4" :lg="4" :xl="4">
                                        <v-row cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                            <v-col cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                                <b class="font-weight-bold black--text"><v-icon large
                                                        color="">
                                                        mdi-road
                                                    </v-icon>
                                                    ถนน : </b>
                                            </v-col>
                                            <v-col cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                                <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name"
                                                    required></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                    <v-col cols="12" :xs="12" :sm="12" :md="4" :lg="4" :xl="4">
                                        <v-row cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                            <v-col cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                                <b class="font-weight-bold black--text"><v-icon large
                                                        color="">
                                                        mdi-rhombus-outline
                                                    </v-icon>
                                                    หมู่ : </b>
                                            </v-col>
                                            <v-col cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                                <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name"
                                                    required></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                    <v-col cols="12" :xs="12" :sm="12" :md="4" :lg="4" :xl="4">
                                        <v-row cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                            <v-col cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                                <b class="font-weight-bold black--text"><v-icon large
                                                        color="">
                                                        mdi-rhombus-split-outline
                                                    </v-icon>
                                                    ตำบล : </b>
                                            </v-col>
                                            <v-col cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                                <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name"
                                                    required></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                    <v-col cols="12" :xs="12" :sm="12" :md="4" :lg="4" :xl="4">
                                        <v-row cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                            <v-col cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                                <b class="font-weight-bold black--text"><v-icon large
                                                        color="">
                                                        mdi-home-outline
                                                    </v-icon>
                                                    อำเภอ : </b>
                                            </v-col>
                                            <v-col cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                                <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name"
                                                    required></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                    <v-col cols="12" :xs="12" :sm="12" :md="4" :lg="4" :xl="4">
                                        <v-row cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                            <v-col cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                                <b class="font-weight-bold black--text"><v-icon large
                                                        color="">
                                                        mdi-animation-outline
                                                    </v-icon>
                                                    จังหวัด : </b>
                                            </v-col>
                                            <v-col cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                                <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name"
                                                    required></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                    <v-col cols="12" :xs="12" :sm="12" :md="4" :lg="4" :xl="4">
                                        <v-row cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                            <v-col cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                                <b class="font-weight-bold black--text"><v-icon large
                                                        color="">
                                                        mdi-barcode
                                                    </v-icon>
                                                    รหัสไปรษณีย์ : </b>
                                            </v-col>
                                            <v-col cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                                <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name"
                                                    required></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                    <v-col cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                        <v-row cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                            <v-col cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                                <b class="font-weight-bold black--text"><v-icon large
                                                        color="">
                                                        mdi-book
                                                    </v-icon>
                                                    ประวัติ : </b>
                                            </v-col>
                                            <v-col cols="12" :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                                                <v-textarea name="input-7-1" label="Default style"
                                                    value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                                                    hint="Hint text"></v-textarea>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                </v-row>

                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </div>
</template>
<script></script>