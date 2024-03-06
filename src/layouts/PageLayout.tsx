import { FC, PropsWithChildren } from "react";

import Head from "next/head";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

import MainPageHeader from "@/components/Headers/MainPageHeader";
import DefautHeader from "@/components/Headers/DefautHeader";
import AdminHeader from "@/components/Headers/AdminHeader";
import TeacherHeader from "@/components/Headers/TeacherHeader";
import StudentHeader from "@/components/Headers/StudentHeader";
import Footer from "@/components/Footer";

import roles from "@/constants/roles";

interface ILayout {
    title?: string;
}

const headers = {
    ROLE_STUDENT: StudentHeader,
    ROLE_TEACHER: TeacherHeader,
    ROLE_ADMIN: AdminHeader,
};

const getTitle = (title: string | undefined) => (title ? `${title} | QuickDirection` : "QuickDirection");

const PageLayout: FC<PropsWithChildren<ILayout>> = ({ children, title }) => {
    const { data: session } = useSession();
    const path = usePathname();

    const role = session?.roles.find((role) => Object.keys(roles).includes(role));
    const Header = role ? headers[role as keyof typeof headers] : DefautHeader;

    return (
        <>
            <Head>
                <title>{getTitle(title)}</title>
                <link rel="icon" href="/logo.svg" type="image.svg" />
            </Head>
            {path === "/" ? (
                <MainPageHeader>
                    <Header />
                </MainPageHeader>
            ) : (
                <Header />
            )}
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default PageLayout;
