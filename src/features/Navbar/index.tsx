import { Stack, Box, Flex, Text, CloseButton, Divider, UnstyledButton } from '@mantine/core';
import Image from 'next/image';
import { Icon } from '@iconify/react';

import { useAppSelector } from '../../store';
import { useDispatch } from 'react-redux';
import { close } from '../../store/navbarReducer';

import classes from './styles.module.css';
import { useEffect } from 'react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

const data = [
    { id: 1, link: '/', label: 'Головна', icon: "mdi:university-outline" },
    { id: 2, link: '/faq', label: 'Часті питання', icon: "wpf:faq" },
    { id: 3, link: '/about-us', label: 'Про нас', icon: "mdi:about-circle-outline" },
    { id: 4, link: '/request-directions', label: 'Подати заявку', icon: "carbon:request-quote" },
    { id: 5, link: '/admin/categories', label: 'Керування напрямками', icon: "eos-icons:content-lifecycle-management" },
    { id: 6, link: '/request-processing', label: 'Опрацювання запитів', icon: "mdi:chat-processing-outline" },
];

export function Navbar() {
    const { isOpened } = useAppSelector(state => state.navbar);
    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        if (isOpened) document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpened]);

    const handleNavigate = (path: string) => {
        router.push(path);
        dispatch(close());
    }


    if (!isOpened) return null;

    const links = data.map(link => (
        <UnstyledButton key={link.id} className={classes.link} onClick={() => handleNavigate(link.link)}>
            <Flex gap={15}>
                <Icon width={22} height={22} icon={link.icon} />
                <Text>{link.label}</Text>
            </Flex>
        </UnstyledButton>
    ));

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
                    {links}
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