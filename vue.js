new Vue({
  el: '#app',
  data: {
    hour: '',
    min: '',
    sec: '',
    secDeg: 0,
    minDeg: 0,
    hourDeg: 0,
  },
  created () {
    this.updateClock();
  },
  methods: {
    clock() {
      let now = new Date();
      this.hour = zeroPadded(now.getHours());
      this.min = zeroPadded(now.getMinutes());
      this.sec = zeroPadded(now.getSeconds());
      this.secDeg = ((this.sec / 60) * 360) + 90;
      this.minDeg = ((this.min / 60) * 360) + ((this.sec / 60) * 6) + 90;
      this.hourDeg = ((this.hour / 12) * 360) + ((this.min / 60) * 30) + 90;
    },
    updateClock() {
      setInterval(() => this.clock(), 1000);
    }
  },
})

function zeroPadded(num) {
  if (num < 10) {
    return `0${num}`;
  }
  return num;
}
