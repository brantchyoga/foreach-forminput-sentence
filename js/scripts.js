$(function(){
  $("form#sentence").submit(function(event) {
    event.preventDefault();
    var userString = ($("#oneSentence").val()).split(" ");
    var newArray = [];
    userString.forEach(function(dick) {
      if (dick.length >= 3) {
        newArray.push(dick);
      };
    });
    $("#output").text(newArray);
    console.log(newArray);
    newArray = newArray.reverse().join(" ");
    console.log(newArray);
    $("#output2").text(newArray);
  });
});
$(function(){
  $("form#sentence").submit(function(event) {
    event.preventDefault();
    var userString = ($("#oneSentence").val()).split(" ");
    var newArray = userString.map(function(dick){
      if (dick.length >= 3) {
        return dick;
      };
    });
    $("#output3").text(newArray);
    console.log(newArray);
    newArray = newArray.reverse().join(" ");
    // newArray = newArray.filter(Boolean).reverse().join(" ");
    console.log(newArray);
    $("#output4").text(newArray);
    $("#output4").append("<em>|.filter(Boolean)| gets rid of falseys like undefines!</em>")

  });
});
