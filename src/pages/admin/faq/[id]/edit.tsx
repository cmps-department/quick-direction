import EditFaqView from "@/features/EditFaqView";
import PageLayout from "@/layouts/PageLayout";

export default function CreateFaqPage() {
    return (
        <PageLayout title={"Edit FAQ"}>
            <EditFaqView />
        </PageLayout>
    );
}
