function request(url){
  $.ajax({
    url:"/"+url,
    method:'GET',
    success:function(data){
      $('.num').text('14 projects available')
$('#project_area').empty().append(data);
    },
    error:function(err){
      $('#project_area').empty().append("<h2> Ooops,, lost connection to server</h2>");
    }
  })
}

$(document).ready(function(){
  $('.projects').click(function(){
    var id=$(this).attr('id');
    request(id);
  })
})
