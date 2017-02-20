$(function(){
  $("form#sentence").submit(function(event) {
    event.preventDefault();
    var userString = $("#oneSentence").val();
    //console.log(userString);
    var newString = userString.split(" ");
    var newArray = [];
  //  console.log(newString);
    newString.forEach(function(dick) {
      if (dick.length >= 3) {
        newArray.push(dick);
      };
    });
    console.log(newArray);
    var testArray = newArray.slice().reverse().join(" ");
    console.log(testArray);
  /*  function newString(dick) {
      return dick.length >= 3;

      console.log(dick);
    };
*/
  });
});
