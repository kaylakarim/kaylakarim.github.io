$(document).ready(function() {
  const scrollers = $(".scroller");

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
  }

  function addAnimation() {
    scrollers.each(function() {
      $(this).attr("data-animated", true);

      const scrollerInner = $(this).find(".scroller__inner");
      const scrollerContent = scrollerInner.children().toArray();

      $.each(scrollerContent, function() {
        const duplicatedItem = $(this).clone(true);
        duplicatedItem.attr("aria-hidden", true);
        scrollerInner.append(duplicatedItem);
      });
    });
  }

	
	
	$('#dropbtn').click(function() {
    $('#myDropdown').toggleClass('show');
  });

  $(document).click(function(event) {
    if (!$(event.target).closest('#dropbtn').length) {
      var dropdowns = $('.dropdown-content');
      dropdowns.each(function() {
        if ($(this).hasClass('show')) {
          $(this).removeClass('show');
        }
      });
    }
  });

$(".imageGrid .gridImage").click(function(){
  $("#full-image").attr("src", $(this).attr("src"));
  $('#image-viewer').show();
});

$("#image-viewer .close").click(function(){
  $('#image-viewer').hide();
});	

$(".imageGridDrag .gridImage").click(function(){
  $("#full-image").attr("src", $(this).attr("src"));
  $('#image-viewer').show();
});

$("#image-viewer .close").click(function(){
  $('#image-viewer').hide();
});	
	
$(".imageGridPlacecards .gridImage").click(function(){
  $("#full-image").attr("src", $(this).attr("src"));
  $('#image-viewer').show();
});

$("#image-viewer .close").click(function(){
  $('#image-viewer').hide();
});		

$(".zoomImages .zoomImage").click(function(){
  $("#full-image").attr("src", $(this).attr("src"));
  $('#image-viewer').show();
});

$("#image-viewer .close").click(function(){
  $('#image-viewer').hide();
});
 
	
 $(".hoverPlay").hover(
         function() {
        $(this).find('.vid').get(0).play();
    },
    function() {
        $(this).find('.vid').get(0).pause(); 
    }
    );
	
$(window).on('unload', function() {
   $(window).scrollLeft(0);
});	

/*$(".imageGrid2025 .gridImage").each(function(){

  var width = $(this).outerWidth(),
      height = $(this).outerHeight();

  if(height > width){
      $(this).css({gridRow:"span 2"})
  }
})*/

// Get the modal
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

// Get all images and insert the clicked image inside the modal
// Get the content of the image description and insert it inside the modal image caption
var images = document.getElementsByTagName('img');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var i;
for (i = 0; i < images.length; i++) {
  images[i].onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.nextElementSibling.innerHTML;
  }
}
	
	
		

});



