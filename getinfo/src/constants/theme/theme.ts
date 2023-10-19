import { createTheme } from "@mantine/core";
import { Container } from '@mantine/core';
import { Montserrat } from "next/font/google";
import cx from 'clsx';
import containerClasses from "../../components/container/container.module.scss";

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '600', '700']
}) 


const CONTAINER_SIZES: Record<string, string> = {
  // xxs: rem(300),
  // xs: rem(400),
  // sm: rem(500),
  // md: rem(600),
  lg: '85%',
  xl: '98%',
  // xxl: rem(900),
};


export const theme = createTheme({
    fontFamily: montserrat.style.fontFamily,
    components: {
        Container: Container.extend({
            classNames: (_, { size }) => ({
                root: cx({ [containerClasses.responsiveContainer]: size === 'responsive' }),
            }),
        }),
    },
});