import { Image } from '@mantine/core';
import { useHover } from '@mantine/hooks';

export const IconArrow = ({ isRight = false }: { isRight?: boolean }) => {
  const { hovered, ref } = useHover<HTMLImageElement>();
  const imageSrc = hovered ? '/images/accent-arrow.webp' : '/images/arrow.webp';
  const imageStyle = isRight ? { transform: 'rotate(180deg)' } : {};

  return <Image ref={ref} src={imageSrc} alt="Arrow" style={imageStyle} />;
};
