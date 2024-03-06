import PageLayout from "../../layouts/PageLayout";
import RequestDirectionsView from "../../features/RequestDirectionsView";
import LayoutHF from "../../layouts/LayoutHF";

export default function RequestDirectionPage() {
    return (
        <PageLayout title="Request Directions">
            <LayoutHF>
                <RequestDirectionsView />
            </LayoutHF>
        </PageLayout>
    );
}
