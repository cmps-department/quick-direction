import { createTheme } from "@mantine/core";
import { Container } from "@mantine/core";
import { Montserrat } from "next/font/google";
import cx from "clsx";

import classes from "@/components/Container/styles.module.scss";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

export const theme = createTheme({
    fontFamily: montserrat.style.fontFamily,
    components: {
        Container: Container.extend({
            classNames: (_, { size }) => ({
                root: cx({ [classes.responsiveContainer]: size === "responsive" }),
            }),
        }),
    },
});
