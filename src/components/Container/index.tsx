import { Container as MantineContainer, ContainerProps } from '@mantine/core';
import React, { FC, PropsWithChildren } from 'react';

const Container: FC<PropsWithChildren<ContainerProps>> = ({ children, ...rest }) => {
    return (
        <MantineContainer size="responsive" {...rest}>
            {children}
        </MantineContainer>
    )
}

export default Container;
