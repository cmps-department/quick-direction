import { FC } from "react";
import { Carousel, CarouselSlide } from "@mantine/carousel";
import GuideBlock from "../GuideBlock";
import { IconArrow } from "../Arrow";
import { guideSlides } from "../../constants/guideSlides";

const CarouselC: FC = () => {
    return (
        <Carousel controlsOffset="xl" controlSize={40} nextControlIcon={<IconArrow isRight={true} />} previousControlIcon={<IconArrow />}>
            {guideSlides?.map((slide, index) => (
                <CarouselSlide key={index}>
                    <GuideBlock index={index} title={slide.title} list={slide.list} />
                </CarouselSlide>
            ))}
        </Carousel>
    );
};

export default CarouselC;
