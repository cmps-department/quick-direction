import PageLayout from "../../layouts/PageLayout";
import RequestProcessingView from "../../features/RequestProcessingView";

export default function RequestProcessingPage() {
    return (
        <PageLayout title={"Request Processing"}>
            <RequestProcessingView />
        </PageLayout>
    );
}
