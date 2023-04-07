var a=" ";

$("button.row1").click(function(){
 if($(this).attr("value") == "="){
    a=eval(a);// it evaluate all the arithmetic results
    $(".txt").val(a);
 }else if($(this).attr("value") == "C"){
      a=" "; // it clear the text field
    $(".txt").val(a);
 }
 else{
    a+=$(this).attr("value");
    $(".txt").val(a);
 }
});



