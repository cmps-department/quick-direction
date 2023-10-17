import { Container } from '@mantine/core';
import React, { FC, PropsWithChildren, useEffect, useState } from 'react';

interface IContainer {
    className?: string
}

const ContainerL:FC<PropsWithChildren<IContainer>> = ({ children, className = '' }) => {

    const [containerSize, setContainerSize] = useState('lg');

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 500) {
                setContainerSize('xl');
            } else {
                setContainerSize('lg');
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Container className={className} size={containerSize}>
            {children}
        </Container>
    )
}

export default ContainerL
