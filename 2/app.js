new Vue({
  el: '#vue-app',
  data: {
    age: 20,
    a: 0,
    b: 0
  },
  computed: {
    addToA: function() {
      console.log('A');
      return this.a + this.age;
    },
    addToB: function() {
      console.log('B');
      return this.b + this.age;
    }
  },
  methods: {

  }
});
