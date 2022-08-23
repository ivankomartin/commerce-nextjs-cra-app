export const mainSliderOptions = {
    type: "fade",
    heightRatio: 0.5,
    pagination: false,
    arrows: false,
    cover: true,
    classes: {
        prev: "splide__arrow--prev your-class-prev bg-slate-400/30 rounded-none",
        next: "splide__arrow--next your-class-next bg-slate-400/30 rounded-none",
    },
    breakpoints: {
        640: {
            arrows: true,
        },
    },
};

export const smallSliderOptions = {
    rewind: true,
    fixedWidth: 104,
    fixedHeight: 58,
    isNavigation: true,
    gap: 2,
    pagination: false,
    cover: true,
    classes: {
        prev: "splide__arrow--prev your-class-prev bg-slate-400 rounded-none -left-3",
        next: "splide__arrow--next your-class-next bg-slate-400 rounded-none -right-3",
    },
    dragMinThreshold: {
        mouse: 4,
        touch: 10,
    },
};
