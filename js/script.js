$(document).ready(function(){
    $("#login").focus(function(event){
        $("#bar-one").addClass("active");
        $("#bar-two").removeClass("active");
        $("#bar-three").removeClass("active");
        $("#bar-four").removeClass("active");
    });
    $("#email").focus(function(event){
        $("#bar-two").addClass("active");
        $("#bar-one").removeClass("active");
        $("#bar-three").removeClass("active");
        $("#bar-four").removeClass("active");
    });
    $("#password").focus(function(event){
        $("#bar-three").addClass("active");
        $("#bar-one").removeClass("active");
        $("#bar-two").removeClass("active");
        $("#bar-four").removeClass("active");
    });
    $("#confirm-password").focus(function(event){
        $("#bar-four").addClass("active");
        $("#bar-one").removeClass("active");
        $("#bar-two").removeClass("active");
        $("#bar-three").removeClass("active");
    });
    $("#submit").click(function(event){
        $("#bar-one").addClass("active");
        $("#bar-two").addClass("active");
        $("#bar-three").addClass("active");
        $("#bar-four").addClass("active");
    });
    $("#reset").click(function(event){
        $("#bar-one").removeClass("active");
        $("#bar-two").removeClass("active");
        $("#bar-three").removeClass("active");
        $("#bar-four").removeClass("active");
    });
});
