


var app = new Vue({
  el : '#root',
  data : {
    hamberger : false,
    hi : "hi mother fucker"
  },
  methods : {
    openMenu(){
      if(this.hamberger == true){
        this.hamberger=false;
      }else{
        this.hamberger=true;
      }
    }
  }
})
