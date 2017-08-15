function news(){
  console.log("news");
//  $(".alert").animate({top: '0px'},1000);
}

function get_user(){
$.ajax({
type:"GET",
url:"https://api.github.com/users/BenxinNiu/repos",
success: function(data){
  console.log(data)
  display_infor(data);
},
error: function(err){
  console.log(err)
}
})
}
function display_infor(data){
var length=data.length;
$(".numOfRepos").html("Toal "+length+" repositories found (excluding private repos)");
for(var i=1;i<length;i++){
  if (data[i].name.length>20)
$('.board').append(" <div class='sm-box col-md-4'><a href=" +data[i].url+ ">"+data[i].name+"</a></div>");
else
$('.board').append(" <div class='sm-box col-md-2'><a href=" +data[i].url+ ">"+data[i].name+"</a></div>");
}
}




$(document).ready(function(){
  get_user();
  $('.courses').click(function(){
    window.location.href='https://www.mun.ca/regoff/calendar/sectionNo=ENGI-0422';
  })
$(".search-area").slideUp(0);

$('.expand-search').click(function(){
  $(".search-area").slideToggle()
})


setTimeout(news,1000);
if(window.innerWidth<=990)
$('.search-bar').addClass('hidden')
})
