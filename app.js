const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },

  methods: {
    boxSelected(box) {
      if (box === "A") {
        console.log("A selected");
        this.boxASelected = !this.boxASelected;
      } else if (box === "B") {
        console.log("B selected");
        this.boxBSelected = !this.boxBSelected;
      } else if (box === "C") {
        console.log("C selected");
        this.boxCSelected = !this.boxCSelected;
      }
    },
  },
});

app.mount("#styling");
