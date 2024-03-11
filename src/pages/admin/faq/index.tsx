import FaqListView from "@/features/FaqListView";
import PageLayout from "@/layouts/PageLayout";

export default function FaqListPage() {
    return (
        <PageLayout title={"FAQ List"}>
            <FaqListView />
        </PageLayout>
    );
}
