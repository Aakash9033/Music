$(document).ready(function(){
    $("#h1").hide()
    $("#p1").hide()

    $("#h1").slideDown(1000)
    $("#p1").fadeIn(3000)

    $("#return").click(function(){
        window.location.href="spotify.html"
    })
  })