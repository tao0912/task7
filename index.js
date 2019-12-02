jQuery(document).ready(function($){
    $('.button').on('click',function(){
        var input = $('#InputText').val();
        if(!input){
            $('#text').append("Enter something in the textbox <br>");
            return;
        }
        $('#text').append("You input: "+input+'<br>');
    }); 
});