import { Stack, Box, Flex, Text, CloseButton, Divider, UnstyledButton } from '@mantine/core';
import Image from 'next/image';
import { Icon } from '@iconify/react';

import { useAppSelector } from '../../store';
import { useDispatch } from 'react-redux';
import { close } from '../../store/navbarReducer';

import classes from './styles.module.css';
import { useEffect } from 'react';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

import { publicRoutes, studentsRoutes, adminRoutes } from './constants/routes';

export function Navbar() {
    const { isOpened } = useAppSelector(state => state.navbar);
    const { data: session } = useSession();
    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        if (isOpened) document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpened]);

    const privateRoutes = session?.roles.includes("ROLE_ADMIN")
        || session?.roles.includes("ROLE_TEACHER") ? adminRoutes : studentsRoutes;

    const handleNavigate = (path: string) => {
        router.push(path);
        dispatch(close());
    }

    if (!isOpened) return null;

    return (
        <>
            <nav className={classes.navbar}>
                <Flex justify="space-between" align="center">
                    <Image
                        width={75}
                        height={34}
                        src="/logo-black.png"
                        alt="Logo"
                    />
                    <CloseButton onClick={() => dispatch(close())} ml={85} />
                </Flex>
                <Divider my="md" />
                <Stack gap="md" className={classes.navbarMain}>
                    {
                        publicRoutes.map(route => (
                            <UnstyledButton key={route.id} className={classes.link} onClick={() => handleNavigate(route.link)}>
                                <Flex gap={15}>
                                    <Icon width={22} height={22} icon={route.icon} />
                                    <Text>{route.label}</Text>
                                </Flex>
                            </UnstyledButton>
                        ))
                    }
                    <Divider />
                    {
                        privateRoutes.map(route => (
                            <UnstyledButton key={route.id} className={classes.link} onClick={() => handleNavigate(route.link)}>
                                <Flex gap={15}>
                                    <Icon width={22} height={22} icon={route.icon} />
                                    <Text>{route.label}</Text>
                                </Flex>
                            </UnstyledButton>))
                    }
                </Stack>
                <Divider my="md" />
                <Box className={classes.footer}>
                    <Stack>
                        <UnstyledButton
                            className={classes.link}
                            onClick={() => signOut({ callbackUrl: "/" })}
                        >
                            <Flex gap={15}>
                                <Icon width={22} height={22} icon="material-symbols:logout" />
                                <Text>Вийти</Text>
                            </Flex>
                        </UnstyledButton>
                    </Stack>
                </Box>
            </nav>
            <div className={classes.overlay} onClick={() => dispatch(close())}>
            </div>
        </>
    );
}