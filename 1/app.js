new Vue({
  el: '#vue-app',
  data: {
    name: '',
    age: '',
    x: 0,
    y: 0
  },
  methods: {
    add: function(age = 1){
      this.age+=age;
    },
    subtract: function(age = 1){
      this.age-=age;
    },
    updateXY: function(event){
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    click: function(){
      console.log('clicked');
    },
    logName: function(){
      console.log('entered name');
    },
    logAge: function(){
      console.log('logged age');
    }
  }
});
