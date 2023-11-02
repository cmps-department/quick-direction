import { FC, ReactNode } from 'react';
import Header from '../features/header';
import Footer from '../features/footer';
import SimpleHeader from '../components/SimpleHeader';

const Headers = {
    extended: Header,
    simple: SimpleHeader
}

interface LayoutHFProps {
    children: ReactNode;
    headerType: keyof typeof Headers;
}

const LayoutHF: FC<LayoutHFProps> = ({ children, headerType }) => {
    const PageHeader = Headers[headerType];

    return (
        <>
            <PageHeader />
                <main>
                    {children}
                </main>
            <Footer />
        </>
    )
}

export default LayoutHF;
