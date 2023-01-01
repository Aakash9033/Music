
 $(document).ready(function(){
         // alert("working")
          $("#h1").hide()
          $("#p1").hide()
          $("#icon").hide()

          $("#h1").slideDown(1000)
          $("#p1").show(2000)
          $("#icon").fadeIn(4000)

          $("#play").click(function(){
             $("#p1").slideUp(1000) 
             $("#icon").fadeOut(1000)
             $("#h1").slideUp(1000)
             
             setTimeout(destination,1500)

             

          })
          
        
      })
      function destination()
          {
            window.location.href="spotify.html"
          }
