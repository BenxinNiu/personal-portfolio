
function acquireInformation(){
  return{
    type:$('#category').val(),
    company:$('#company').val(),
    title:$('#gender').val(),
    first_name:$('#first').val(),
    last_name:$('#last').val(),
    email:$('#email').val()
  }
}

//return true when email is valid
function validateEmail(email) {
var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
if (regex.test(email)&&email.length!=0)
return true;
else
return false;
}


function validate(form){
  var pass=true
  if(form.email==""||!validateEmail(form.email)){
    pass=false;
  $('.email').css('color','red');
  }
if(form.company==""){
  pass=false;
$('.company').css('color','red');
}
if(form.first_name==""){
  pass=false;
$('.first').css('color','red');
}
if(form.last_name==""){
  pass=false;
$('.last').css('color','red');
}
return pass;
}

function send_infor(){
  var form=acquireInformation();
  if(!validate(form)){
    $('.notification').addClass('alert-danger').html("Please Check your form")
  }
  else{
    $.ajax({
      url:'/lucky',
      type:'POST',
      data:form,
      success:function(result){
  $('.notification').addClass('alert-success').html("Thank you, You will receive the email once the verification is complete")
      },
      error:function(error){
$('.notification').addClass('alert-danger').html("Ooops.. Server connection lost")
      }
    });
  }
}

$(document).ready(function(){
  $('input').focus(function(){
    document.getElementById('fire').disabled=false;
  $('label').css('color','#383838')
  var cla='.'+  $(this).attr('id');
  $(cla).animate({bottom:"0px"},500)
});
$('#fire').click(function(){
document.getElementById('fire').disabled=true;
send_infor();
})
})
