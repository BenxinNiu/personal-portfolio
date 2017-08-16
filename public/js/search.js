function key_word(key_word){
  var result=[];
  var key=key_word.toLowerCase();
switch(key){
  case "project":
      result.unshift("<a class='url_result' href='/project'>My projects gallery</a>");
      break;
  case "home":
  result.unshift("<a class='url_result' href='/'>Home page</a>");
    result.unshift("<a class='url_result' href='/project'>My projects gallery</a>");
    result.unshift("<a class='url_result' href='/request'>Get my resume</a>");
  break;
  case "api":
  result.unshift("<a class='url_result' href='/project'>API projects</a>");
  result.unshift("<a class='url_result' href='/request'>Get my resume</a>");
  break;
  case "fullstack":
  result.unshift("<a class='url_result' href='/project'>Full stack projects</a>");
  result.unshift("<a class='url_result' href='/request'>Get my resume</a>");
  break;
  case "full":
  result.unshift("<a class='url_result' href='/project'>Full stack projects</a>");
  result.unshift("<a class='url_result' href='/request'>Get my resume</a>");
  break;
  case "stack":
  result.unshift("<a class='url_result' href='/project'>Full stack projects</a>");
  result.unshift("<a class='url_result' href='/request'>Get my resume</a>");
  break;
  case "full stack":
  result.unshift("<a class='url_result' href='/project'>Full stack projects</a>");
  result.unshift("<a class='url_result' href='/request'>Get my resume</a>");
  break;
  case "fcc":
  result.unshift("<a class='url_result' href='www.freecodecamp.com'>freecodecamp</a>");
  result.unshift("<a class='url_result' href='/project'>My projects gallery</a>");
  break;
  case "freecodecamp":
  result.unshift("<a class='url_result' href='www.freecodecamp.com'>freecodecamp</a>");
    result.unshift("<a class='url_result' href='/project'>My projects gallery</a>");
  break;
  case "code":
  result.unshift("<a class='url_result' href='www.freecodecamp.com'>freecodecamp</a>");
  result.unshift("<a class='url_result' href='/project'>My projects gallery</a>");
  break;
  case "contact":
  result.unshift("<a class='url_result' href='/'>Home page</a>");
  result.unshift("<a class='url_result' href='/project'>My projects gallery</a>");
}
return result;
}
$(document).ready(function(){

  $('.result-area').slideUp(0);
$(".submit").click(function(){
  $('.key').focus();
  $('.link-results').empty();
  var val=$('.key').val();
  var key=key_word(val);
  console.log(key);
  $('.result-area').slideDown(500);
  if(key.length==0)
    $('.link-results').append("<h3> Nothing found related to "+val+" </h3>");
    else
    for (var i=0;i<key.length;i++){
      $('.link-results').append(key[i]);
      $('.link-results').append("<br>")
    }
})
})
