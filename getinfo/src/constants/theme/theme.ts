import { createTheme } from "@mantine/core";
import { Container, rem } from '@mantine/core';

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
  components: {
    Container: Container.extend({
      vars: (_, { size, fluid }) => ({
        root: {
          '--container-size': fluid
            ? '100%'
            : size !== undefined && size in CONTAINER_SIZES
            ? CONTAINER_SIZES[size]
            : rem(size),
        },
      }),
    }),
  },
});