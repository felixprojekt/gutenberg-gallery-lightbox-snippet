//jQuery wrapper
(function ($, root, undefined) {
	$(function () {
		
		'use strict';
    
	    	//This adds Lightbox data tag to each wp-block-gallery element
	    	$(".wp-block-gallery").each(function(i, element) {
	      		$(this).find("a").attr("data-lightbox", "gallery-" + i);
	    	});

	    	//This makes each gallery link to point to a full sized photo
	    	//Important: For this to work you need to set Link to: Media File in Gallery block settings
		$(".wp-block-gallery a").each(function(i, element) {

	      		var url = $(this).attr("href");

	      		var extension = url.substr(url.lastIndexOf("."));

	      		var fullsize = url.substr(0, url.lastIndexOf("-"));

	      		var size = url.substr(url.lastIndexOf("-"));

	      		if(size.indexOf("0x") != -1) {

				$(this).attr("href", fullsize + extension);
			}

		});

	    	//Lightbox styling. Optional.
	    	lightbox.option({
	      		'resizeDuration': 0,
	      		'fadeDuration': 0,
	      		'albumLabel': "%1 / %2"
	    	})
        
  });
	
})(jQuery, this);
