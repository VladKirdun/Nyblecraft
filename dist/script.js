$( document ).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
            items: 1,
            nav: true,
            pagination : true
    });

    $('.owl-prev').empty();
    $('.owl-next').empty();
});