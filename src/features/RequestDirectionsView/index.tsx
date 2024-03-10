import { Stack } from "@mantine/core";
import IntroSection from "./components/IntroSection";
import RequestForm from "./components/RequestForm";

const RequestDirectionsView = () => {
    return (
        <Stack align="stretch" gap={24} mt={64}>
            <IntroSection />
            <RequestForm />
        </Stack>
    );
};

export default RequestDirectionsView;
