function news(){
  console.log("news");
//  $(".alert").animate({top: '0px'},1000);
}

$(document).ready(function(){
  $('.courses').click(function(){
    window.location.href='https://www.mun.ca/regoff/calendar/sectionNo=ENGI-0422';
  })
setTimeout(news,1000);
if(window.innerWidth<=990)
$('.search-bar').addClass('hidden')
})
