
$('.with-caption').magnificPopup({
    type: 'image',
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    
    image: {
        verticalFit: true,
        titleSrc: function(item) {
            var caption = item.el.attr('title');
            return caption;
        }
    },
    
    gallery: {
        enabled: true 
    }, 
    
    callbacks: {
        open: function() {
            this.wrap.on('click.pinhandler', '.pin-it', function(e) {
                
                // This part of code doesn't work on CodePen, as it blocks window.open
                // Uncomment it on your production site, it opens a window via JavaScript, instead of new page
                /*window.open(e.currentTarget.href, "intent", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 50) + ",top=" + 100);
                
                
                return false;*/
            });
        },
        beforeClose: function() {
            //this.wrap.off('click.pinhandler');
        }
    }
    
});


