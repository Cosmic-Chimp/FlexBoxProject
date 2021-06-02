// create references to the modal...
var modal = document.getElementById('myModal');
// to all images -- note I'm using a class!
var images = document.getElementsByClassName('myImages');
// the image in the modal
var modalImg = document.getElementById("img01");
// and the caption in the modal
var captionText = document.getElementById("caption");

// Go through all of the images with our custom class
for (var i = 0; i < images.length; i++) {
  var img = images[i];
  // and attach our click listener for this image.
  img.onclick = function(evt) {
    console.log(evt);
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}


//uhm github?
//     OLD zoom in feature    //
/*
$(".img-popup").on('click', function() {
  $src = $(this).attr('src');
  $(".overlay-dark").css('display', 'block');
  $('.img-overlay').css('opacity', 1);
  $('.img-overlay').attr('src', $src);
  $('.img-overlay').css('transform', 'translate(-50%, 0) scale(1, 1)');
});

$(".overlay-dark").on('click', function() {
  $(".overlay-dark").css('display', 'none');
  $('.img-overlay').css('opacity', 0);
  setTimeout(function() {
      $('.img-overlay').css('transform', 'translate(-50%, 0) scale(0, 0)');
  }, 600);
});
*/