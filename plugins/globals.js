import Vue from "vue";
import moment from "moment";
Vue.mixin({
  methods: {
    capitalizeFirstLetter: (str) => str.charAt(0).toUpperCase() + str.slice(1),
    sampleFunction() {
      alert("Global Functions");
    },
    DateFormat(date, formatDate = "YYYY-MM-DD HH:mm") {
      if (!date || date == "") return "";
      // return moment(date).format(formatDate);
      // return format(date, formatDate)
      var date2 = moment(date);
      // console.log(date2.format(formatDate))
      return date2.utc().format(formatDate);
    },
    DateFormatShow(date) {
      if (!date || date == "") return "";
      var date2 = moment(date).format("DD-MM-YYYY");
      return date2;
    },
    checkDate(date) {
      return moment(date, true).isValid();
    },
    chec_P_GO(str) {
      if (!str) return "";
      else {
        if (typeof str === "number") return this.numberFormat(str.toFixed(2));
        else if (moment(str, "YYYY-MM-DDT00:00:00.000Z", true).isValid()) return moment(str).utc().format("DD/MM/YYYY")
        else if (moment(str, "YYYY-MM-DDTHH:mm:ss.sssZ", true).isValid()) return moment(str).utc().format("DD/MM/YYYY HH:mm")
        else return str;
      }
    },
    numberFormat(x, n) {
      if (!x) return 0;
      let number = Number(x).toFixed(n);
      return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    },
    CountFormat(x) {
      if (!x) return 0;
      return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    },
    onlyNumber($event) {
      //console.log($event.keyCode); //keyCodes value
      let keyCode = $event.keyCode ? $event.keyCode : $event.which;
      if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
        // 46 is dot
        $event.preventDefault();
      }
    },
    fn_array_join(arr) {
      return arr.join(",");
    },
    erorr_main(status) {
      if (status == 403) {
        window.location.reload();
      } else {
        alert(status);
      }
    },


    // NAM
    isValidDate(str) {
      let utc = moment(str, "YYYY-MM-DDTHH:mm:ss.sssZ", true)
      let isUTC = utc.isValid();

      return isUTC;
    },
    isDate(d, formatDate = "YYYY-MM-DD HH:mm") {
      if (!d || d == "") return "";
      var date2 = moment(d, true);

      if (date2.isValid()) {
        return date2.utc().format(formatDate)
      } else {
        return d;
      }

    },
    // END NAM

    // formatter: (phoneNumber, options) => {
    //     let result = !options.countryCode ?
    //         new AsYouType().input(phoneNumber) :
    //         new AsYouType(options.countryCode).input(phoneNumber)

    //     return result
    // },
    is_null(x) {
      if (!x) return '';
      return x == null ? '' : x;
    },
    onlyNumberWithCom($event) {
      //console.log($event.keyCode); //keyCodes value
      let keyCode = $event.keyCode ? $event.keyCode : $event.which;
      if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
        // 46 is dot
        $event.preventDefault();
      }
    },
  },
});
