import { FC } from "react"
import { Carousel, CarouselSlide } from '@mantine/carousel';
import GuideBlock from "../guide-block/GuideBlock";
import arrowImg from '../../assets/images/arrow.png'
import Image from "next/image";

export const IconArrow = ({isRight = false}: {isRight?: boolean}) => {
    const imageStyle = isRight ? { transform: 'rotate(180deg)' } : {};
    return (
        <Image
            src={arrowImg}
            alt="Arrow"
            style={imageStyle}
        />
    )
}

const CarouselC: FC = () => {
    return (
        <Carousel controlsOffset="xl" controlSize={40}
            nextControlIcon={<IconArrow isRight={true}/>}
            previousControlIcon={<IconArrow/>}
        >
            <CarouselSlide>
                <GuideBlock />
            </CarouselSlide>
            <CarouselSlide>
                <GuideBlock />
            </CarouselSlide>
            <CarouselSlide>
                <GuideBlock />
            </CarouselSlide>
        </Carousel>
    )
}

export default CarouselC
