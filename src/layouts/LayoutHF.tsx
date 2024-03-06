import { FC, ReactNode } from "react";

import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

import MainPageHeader from "../components/Headers/MainPageHeader";
import DefautHeader from "../components/Headers/DefautHeader";
import StudentHeader from "../components/Headers/StudentHeader";
import TeacherHeader from "../components/Headers/TeacherHeader";
import AdminHeader from "../components/Headers/AdminHeader";
import Footer from "../components/Footer";

import roles from "../constants/roles";

interface LayoutHFProps {
    children: ReactNode;
}

const headers = {
    ROLE_STUDENT: StudentHeader,
    ROLE_TEACHER: TeacherHeader,
    ROLE_ADMIN: AdminHeader,
};

const LayoutHF: FC<LayoutHFProps> = ({ children }) => {
    const { data: session } = useSession();
    const path = usePathname();

    const role = session?.roles.find((role) => Object.keys(roles).includes(role));
    const Header = role ? headers[role as keyof typeof headers] : DefautHeader;

    return (
        <>
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

export default LayoutHF;
