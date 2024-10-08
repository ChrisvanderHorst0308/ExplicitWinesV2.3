(function ($) {
    "use strict";
    $(window).on('elementor/frontend/init', () => {
        elementorFrontend.hooks.addAction('frontend/element_ready/bodoni-products.default', ($scope) => {
            let $carousel = $('.woocommerce-carousel', $scope);
            if ($carousel.length > 0) {
                let data = $carousel.data('settings'),
                    rtl = $('body').hasClass('rtl') ? true : false;
                $('ul.products', $carousel).slick(
                    {
                        rtl: rtl,
                        dots: data.navigation == 'both' || data.navigation == 'dots' ? true : false,
                        arrows: data.navigation == 'both' || data.navigation == 'arrows' ? true : false,
                        infinite: data.loop,
                        speed: 300,
                        slidesToShow: parseInt(data.items),
                        autoplay: data.autoplay,
                        autoplaySpeed: parseInt(data.autoplayTimeout),
                        slidesToScroll: parseInt(data.scrolls),
                        lazyLoad: 'ondemand',
                        responsive: [
                            {
                                breakpoint: 1366,
                                settings: {
                                    slidesToShow: parseInt(data.items_laptop),
                                    slidesToScroll: parseInt(data.scrolls),
                                }
                            },
                            {
                                breakpoint: 1024,
                                settings: {
                                    slidesToShow: parseInt(data.items_tablet),
                                    slidesToScroll: parseInt(data.scrolls_tablet),
                                }
                            },
                            {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: parseInt(data.items_mobile),
                                    slidesToScroll: parseInt(data.scrolls_mobile),
                                }
                            }
                        ]
                    }
                );

            }

            $('.gallery_item').on('click', function (e) {
                let $this = $(this),
                    $parent = $this.closest('.product-block'),
                    $image = $parent.find('.product-image > img'),
                    image = $this.data('image'),
                    scrset = $this.data('scrset');
                $this.addClass('active');
                $this.siblings('.active').removeClass('active');

                $image.attr('src', image);
                $image.attr('srcset', scrset);

            });

        });
    });

})(jQuery);
