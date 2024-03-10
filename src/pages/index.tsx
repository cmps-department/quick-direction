import HomePageView from "../features/HomePageView";
import PageLayout from "../layouts/PageLayout";

export default function HomePage() {
    return (
        <PageLayout title={"Home"}>
            <HomePageView />
        </PageLayout>
    );
}
