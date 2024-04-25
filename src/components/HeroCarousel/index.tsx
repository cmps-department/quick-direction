import { useRef } from "react";

import Autoplay from "embla-carousel-autoplay";

import { Carousel } from "@mantine/carousel";

const HeroCarousel = () => {
    const autoplay = useRef(Autoplay({ delay: 10000 }));
    return (
        <Carousel loop draggable={false} plugins={[autoplay.current as any]} withControls={false} height="100%" style={{ flex: 1}}>
            <Carousel.Slide style={{ backgroundImage: "url(/bg/header-bg1.webp)", marginRight: "30px", backgroundSize: 'cover', borderRadius: '48px' }} />
            <Carousel.Slide style={{ backgroundImage: "url(/bg/header-bg2.png)", marginRight: "30px", backgroundSize: 'cover', borderRadius: '48px' }} />
            <Carousel.Slide style={{ backgroundImage: "url(/bg/header-bg3.png)", marginRight: "30px", backgroundSize: 'cover', borderRadius: '48px' }} />
            <Carousel.Slide style={{ backgroundImage: "url(/bg/header-bg4.png)", marginRight: "30px", backgroundSize: 'cover', borderRadius: '48px' }} />
        </Carousel>
    );
};

export default HeroCarousel;
