$(document).ready(function (){
    console.log("Run jQuery");
})

$('#button1').click(function(){
    console.log("Click Btutton");
})

$('.button2').click(function(){
    $('#view').hide();
})

$('.button3').click(function(){
    $('#view').show();
})