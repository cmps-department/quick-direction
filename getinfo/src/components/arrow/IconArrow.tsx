import { useState } from 'react';
import Image from "next/image";
import arrowImg from '../../assets/images/arrow.webp'
import accentArrowImg from '../../assets/images/accent-arrow.webp'


export const IconArrow = ({ isRight = false }: { isRight?: boolean }) => {
    const [isHovered, setIsHovered] = useState(false);
    const imageSrc = isHovered ? accentArrowImg : arrowImg;
    const imageStyle = isRight ? { transform: 'rotate(180deg)' } : {};
    
    return (
        <Image
            src={imageSrc}
            alt="Arrow"
            style={imageStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        />
    )
}