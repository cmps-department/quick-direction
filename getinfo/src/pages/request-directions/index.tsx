import PageLayout from "../../layouts/PageLayout";
import LayoutHF from "../../layouts/LayoutHF";
import RequestDirectionsView from "../../features/RequestDirectionsView";


export default function RequestDirectionPage() {
    return (
        <PageLayout title={"Request"}>
            <LayoutHF headerType="simple"> 
                <RequestDirectionsView />
            </LayoutHF>
        </PageLayout>
    )
}
