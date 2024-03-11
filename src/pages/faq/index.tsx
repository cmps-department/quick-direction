import FaqView from "../../features/FaqView";
import PageLayout from "../../layouts/PageLayout";

export default function FaqPage() {
    return (
        <PageLayout title={"FAQ"}>
            <FaqView />
        </PageLayout>
    );
}
