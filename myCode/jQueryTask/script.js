$(document).ready(function(){
    $('#h-section').show()
    $('#a-section').hide()
    $('#d-section').hide()
    $('#p-section').hide()
   
})


$('#h-nav').click(function(){
    $('#h-section').show()
    $('#a-section').hide()
    $('#d-section').hide()
    $('#p-section').hide()
   
})

$('#a-nav').click(function(){
    $('#h-section').hide()
    $('#a-section').show()
    $('#d-section').hide()
    $('#p-section').hide()
})

$('#d-nav').click(function(){
    $('#h-section').hide()
    $('#a-section').hide()
    $('#d-section').show()
    $('#p-section').hide()
})

$('#p-nav').click(function(){
    $('#h-section').hide()
    $('#a-section').hide()
    $('#d-section').hide()
    $('#p-section').show()
})


