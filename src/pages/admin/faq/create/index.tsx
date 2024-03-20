import CreateFaqView from "@/features/CreateFaqView";
import PageLayout from "@/layouts/PageLayout";

export default function CreateFaqPage() {
    return (
        <PageLayout title={"Create FAQ"}>
            <CreateFaqView />
        </PageLayout>
    );
}
