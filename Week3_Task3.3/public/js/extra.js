$(document).ready(function(){
    $('.modal').modal();
    $(".change-color").on("click", function() {
      // Change the button's background color
      $(this).css("background-color", "#ff5722"); // Example: a reddish color
    });
  });