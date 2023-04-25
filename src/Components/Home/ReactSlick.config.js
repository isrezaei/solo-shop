export const settings = {
    className: "center",
    infinite: false,
    focusOnSelect: false,
    swipeToSlide: true,
    slidesToShow: 4,
    speed: 1000,
    rows: 2,
    slidesPerRow: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },

        {
            breakpoint: 320,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }
    ]
};