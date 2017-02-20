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
    console.log(newArray);
    var testArray = newArray.slice().reverse().join(" ");
    console.log(testArray);

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
    console.log(newArray);
    var final = newArray.slice().reverse().join(" ");
    console.log(final);

  });
});
