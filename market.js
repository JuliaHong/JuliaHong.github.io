
var app = new Vue({
  el : '#root',
  data : {

  },
  methods : {

  }
})

$('.pagination-inner a').on('click', function() {
		$(this).siblings().removeClass('pagination-active');
		$(this).addClass('pagination-active');
})
