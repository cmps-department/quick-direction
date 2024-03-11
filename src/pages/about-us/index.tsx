import AboutUsView from "../../features/AboutUsView";
import PageLayout from "../../layouts/PageLayout";

export default function AboutUsPage() {
    return (
        <PageLayout title={"About"}>
            <AboutUsView />
        </PageLayout>
    );
}
