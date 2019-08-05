//Text showmore-showless
$(document).ready(function(){
    $("#showmore").click(function(){
      $(".collapse").collapse('show');
      $("#showmore").hide();
    });
    $("#showless").click(function(){
      $(".collapse").collapse('hide');
      $("#showmore").show();
    });
});