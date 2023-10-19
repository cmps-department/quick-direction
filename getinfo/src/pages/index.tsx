import HomePageView from "../features/HomePageView";
import LayoutHF from "../layouts/LayoutHF";
import PageLayout from "../layouts/PageLayout";


export default function HomePage() {
    return (
        <PageLayout title={"Home"}>
            <LayoutHF headerType="extended"> 
                <HomePageView />
            </LayoutHF>
        </PageLayout>
    )
}
