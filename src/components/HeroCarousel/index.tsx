import { useRef } from "react";

import Autoplay from "embla-carousel-autoplay";

import { Carousel } from "@mantine/carousel";
import Image from "next/image";

const HeroCarousel = () => {
    const autoplay = useRef(Autoplay({ delay: 10000 }));
    return (
        <Carousel loop draggable={false} plugins={[autoplay.current as any]} withControls={false} height="100%" style={{ flex: 1 }}>
            <Carousel.Slide>
                <Image src="/bg/header-bg1.webp" alt="NTU «KhPI»" fill={true} priority={true} quality={100} style={{ marginRight: "30px" }} />
            </Carousel.Slide>
            <Carousel.Slide>
                <Image src="/bg/header-bg2.png" alt="NTU «KhPI»" fill={true} quality={100} style={{ marginRight: "30px" }} />
            </Carousel.Slide>
            <Carousel.Slide>
                <Image src="/bg/header-bg3.png" alt="NTU «KhPI»" fill={true} quality={100} style={{ marginRight: "30px" }} />
            </Carousel.Slide>
            <Carousel.Slide>
                <Image src="/bg/header-bg4.png" alt="NTU «KhPI»" fill={true} quality={100} style={{ marginRight: "30px" }} />
            </Carousel.Slide>
        </Carousel>
    );
};

export default HeroCarousel;
