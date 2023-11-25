import { createTheme } from "@mantine/core";
import { Container } from '@mantine/core';
import { Montserrat } from "next/font/google";
import cx from 'clsx';

import containerClasses from "../components/container/container.module.scss";

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '600', '700']
}) 

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