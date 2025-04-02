$(window).load(function(){
	$('.preloader').fadeOut('slow');
});


/* =Main INIT Function
-------------------------------------------------------------- */
function initializeSite() {

   "use strict";

   //OUTLINE DIMENSION AND CENTER
   (function() {
	   function centerInit(){

		   var sphereContent = $('.sphere'),
			   sphereHeight = sphereContent.height(),
			   parentHeight = $(window).height(),
			   topMargin = (parentHeight - sphereHeight) / 2;

		   sphereContent.css({
			   "margin-top" : topMargin+"px"
		   });

		   var heroContent = $('.hero'),
			   heroHeight = heroContent.height(),
			   heroTopMargin = (parentHeight - heroHeight) / 2;

		   heroContent.css({
			   "margin-top" : heroTopMargin+"px"
		   });

	   }

	   $(document).ready(centerInit);
	   $(window).resize(centerInit);
   })();

   // Init effect 
   $('#scene').parallax();

};
/* END ------------------------------------------------------- */

/* =Document Ready Trigger
-------------------------------------------------------------- */
$(window).load(function(){

   initializeSite();
   (function() {
	   setTimeout(function(){window.scrollTo(0,0);},0);
   })();

});
/* END ------------------------------------------------------- */


$('#countdown').countdown({
   date: getUpdatedDate(),
   render: function(data) {
	   var el = $(this.el);
	   el.empty()
		 //.append("<div>" + this.leadingZeros(data.years, 4) + "<span>years</span></div>")
		 .append("<div>" + this.leadingZeros(data.days, 2) + " <span>天</span></div>")
		 .append("<div>" + this.leadingZeros(data.hours, 2) + " <span>时</span></div>")
		 .append("<div>" + this.leadingZeros(data.min, 2) + " <span>分</span></div>")
		 .append("<div>" + this.leadingZeros(data.sec, 2) + " <span>秒</span></div>");
   }
});

function getUpdatedDate() {
   var now = new Date();
   // 检查是否超过了10月1日，如果是，则将日期加1年
   if (now.getMonth() >= 9 && now.getDate() >= 1) {
	   now.setFullYear(now.getFullYear() + 1);
	 }
   // 设置倒计时的日期为10月1日，加上当前年份或者下一年份
   var countdownDate = "October 1, " + now.getFullYear() + " 00:00:00";  
   return countdownDate;
}
