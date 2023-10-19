import Head from "next/head"
import { FC, PropsWithChildren } from "react"
import LayoutHF from "./LayoutHF";

interface ILayout {
    title?: string,
    isLogin?: boolean,
}


const getTitle = (title: string | undefined) => title ? `${title} | QuickDirection` : 'QuickDirection';

const PageLayout: FC<PropsWithChildren<ILayout>> = ({ children, title, isLogin = true }) => {
    return (
        <>
            <Head>
                <title>{getTitle(title)}</title>
                <link rel="icon" href="/logo.svg" type="image.svg"/>
            </Head>
            {isLogin ?
                <LayoutHF>
                    {children}
                </LayoutHF> :
                <main>
                    {children}
                </main>
            }
        </>
    )
}

export default PageLayout;
