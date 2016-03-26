


$(window).ready(function(){
  $('#create_gif').on('click', function(){
          console.log("was clicked");
          gifshot.createGIF(function(obj) {
              if(!obj.error) {
                  var image = obj.image,
                  animatedImage = document.createElement('img');
                  animatedImage.src = image;
                  document.body.appendChild(animatedImage);
              }
          });
  });
});
