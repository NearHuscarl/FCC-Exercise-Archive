$(document).ready(function(){
   $("#getMessage").on("click", function(){
      $(".message").html("Here is the message");
   });

   $("#getJSON").on("click", function(){
      $.getJSON("https://raw.githubusercontent.com/NearHuscarl/FCC-Exercise-Archive/master/8.%20JSON%20APIs%20and%20Ajax/data.json", function(data){
         $(".message").html(JSON.stringify(data));
      });
   });

   $("#makeList").on("click", function(){
      var html = "";
      $.getJSON("https://raw.githubusercontent.com/NearHuscarl/FCC-Exercise-Archive/master/8.%20JSON%20APIs%20and%20Ajax/data.json", function(catList){

         catList.forEach(function(cat){
            var catPropList = Object.keys(cat);

            html += "<div class='cat'>";
            catPropList.forEach(function(prop){
               html += "<strong>" + prop + ": </strong>" + cat[prop] + "<br>";
            });
            html += "<div/><br>";
         });
         $(".message").html(html);

      });
   });

   $("#renderImg").on("click", function(){
      var html = "";

      $.getJSON("https://raw.githubusercontent.com/NearHuscarl/FCC-Exercise-Archive/master/8.%20JSON%20APIs%20and%20Ajax/data.json", function(catList){
         catList.forEach(function(cat){
            html += "<div class='center-block'>";
            html += "<img src='" + cat.imageLink + "' alt='" + cat.altText + "'>";
            html += "</div><br>";
         });

         $(".message").html(html);
      });
   });

   $("#prefilter").on("click", function(){
      $.getJSON("https://raw.githubusercontent.com/NearHuscarl/FCC-Exercise-Archive/master/8.%20JSON%20APIs%20and%20Ajax/data.json", function(catList){
         var html = "";

         catList = catList.filter(function(cat){
            return (cat.id !== 1);
         });

         html += "<div class='center-block cat'>";

         catList.forEach(function(cat){
            html += "<img src='" + cat.imageLink + "' alt='" + cat.altText + "'>";
         });

         html += "</div>";

         $(".message").html(html);
      });
   });

   $("#getPosition").on("click", function(){
      if(navigator.geolocation)
      {
         navigator.geolocation.getCurrentPosition(function(position){
            $(".message").html("Latitude: " + position.coords.latitude.toFixed(4) + "<br>Longitude:" + position.coords.longitude.toFixed(4));
         });
      }
   });
});
