(function ($) {

    $(function () {

        $(".wp-block-gallery figure img").each(function () {
            const thisImage = $(this);
            const image_id = thisImage.data("id");

            $.getJSON(php_vars["mediaurl"] + image_id, function(data) {
                thisImage.wrap("<a href='" + data.source_url + "' data-lightbox='single-gallery'></a>");
            });
        });

        // Optional Lightbox options
        lightbox.option({
            'resizeDuration': 0,
            'fadeDuration': 0,
            'albumLabel': "%1 / %2",
            'imageFadeDuration': 0,
        })

    });

})(jQuery);
