//FIXME #15 
jQuery(document).ready(function() {
    jQuery('.toggleBtn').on('click', function() {
        var menuDiv = jQuery("#MenuDiv");
        var Header = jQuery(".header");
        var toggleIconSpan = jQuery(".toggleIcon");
        if (menuDiv.width() === 0) {
            menuDiv.width('100%');
            Header.css('background-color', 'white');
            toggleIconSpan.text('close');
        } else {
            menuDiv.width(0);
            Header.css('background-color', 'var(--md-sys-color-surface-container)');
            toggleIconSpan.text('menu');
        }
    });

        jQuery('.navButton').each(function() {
            if (jQuery(this).attr('href') === window.location.pathname) {
                var html = jQuery(this).prop('outerHTML').replace('md-outlined-button', 'md-filled-button');
                jQuery(this).replaceWith(html);
            }
        });
});

