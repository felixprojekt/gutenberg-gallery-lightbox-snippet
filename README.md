# Lightbox for default Guttenberg gallery block
Simple jQuery script that adds Lightbox's popup to default Gutenberg Gallery block. Meant for custom-coded themes.

# How-to
* Download and include <a href="https://lokeshdhakar.com/projects/lightbox2/" target="_blank">Lightbox</a> in your theme/child-theme
* Add gallery-lightbox.js to your theme/child-theme
* Localize your script to contain URL to media JSON: 
```php
wp_enqueue_script('gallery-lightbox', get_template_directory_uri() . '/js/gallery-lightbox.js', array('jquery'), 1, true);
wp_localize_script("gallery-lightbox", "php_vars", ["mediaurl" => get_home_url() . "/wp-json/wp/v2/media/"]);
```

