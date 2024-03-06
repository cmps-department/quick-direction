import Head from "next/head";
import { FC, PropsWithChildren } from "react";

interface ILayout {
    title?: string;
}

const getTitle = (title: string | undefined) => (title ? `${title} | QuickDirection` : "QuickDirection");

const PageLayout: FC<PropsWithChildren<ILayout>> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{getTitle(title)}</title>
                <link rel="icon" href="/logo.svg" type="image.svg" />
            </Head>
            {children}
        </>
    );
};

export default PageLayout;
