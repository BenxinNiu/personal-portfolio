function request(url){
  $.ajax({
    url:"/requests/"+url,
    method:'GET',
    success:function(data){
display(data);
    },
    error:function(err){
      $('#project_area').empty().append("<h2> Oooooooops lost connection to server</h2>");
    }
  })
}
function display(data){
  $('#project_area').empty()
  if(data.length==0){
$('#project_area').append("<h2>Oops, this is embarrassing.. no project found in this category..Come back later</h2>")
  }
  else{
  $('#project_area').empty().append("<div class='row board'></div>");
for(var i=0;i<data.length;i++){
  if(data[i].img!="false"){
    $(".board").append("<div class='col-sm-4 col-lg-4 col-md-4'>"+
        "<div class='thumbnail'>"+
            "<div class='imgs'>"+
            "<img class='img-responsive' src=" + data[i].img+ ">"+
          "</div>" +
            "<div class='caption'>"+
                "<h4><a href="+data[i].url+">" + data[i].name+ "</a>"+
                "</h4>"+
"<p>"+ data[i].description+ "</p>"+
            "</div></div> </div>")
  }
  else{
$('.board').append("<div class='col-sm-8 col-lg-8 col-md-8 api'>"+
  "<div class='thumbnail'>"+
  "<h3><a href="+ data[i].url+ ">" +data[i].name +"</a></h3>"+
"<p>"+data[i].description+"</p>"+
"<a href=" + data[i].url+ "> View on Github </a>"+
"</div></div>");
  }
}
}
}

$(document).ready(function(){
  $('.projects').click(function(){
    $('#project_area').empty().append("<h2>loading data from server</h2>")
    var id=$(this).attr('id');
    request(id);
  })

  $(".search-area").slideUp(0);

  $('.expand-search').click(function(){
    $(".search-area").slideToggle()
  })

})
