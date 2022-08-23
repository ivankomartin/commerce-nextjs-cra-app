import React, { Fragment, useEffect, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import {
    mainSliderOptions,
    smallSliderOptions,
} from "../../utils/sliderOptions";

export default function ProductViewGallery({ product }) {
    const mainSlider = useRef();
    const smallSlider = useRef();

    const { images } = product;

    useEffect(() => {
        mainSlider.current.sync(smallSlider.current.splide);
    }, [mainSlider, smallSlider]);

    function createSplideList(images) {
        return (
            images &&
            images.map((image) => (
                <SplideSlide key={image.id}>
                    <img
                        src={`../images/products/${image.name}`}
                        alt={image.alt}
                    />
                </SplideSlide>
            ))
        );
    }

    return (
        <Fragment>
            <Splide
                ref={(slider) => (mainSlider.current = slider)}
                options={mainSliderOptions}
            >
                {createSplideList(images)}
            </Splide>
            <div className="hidden mt-4 sm:block">
                <Splide
                    ref={(slider) => (smallSlider.current = slider)}
                    options={smallSliderOptions}
                >
                    {createSplideList(images)}
                </Splide>
            </div>
        </Fragment>
    );
}
