import { FC } from "react";
import Information from "./containers/Information";
import FaqLayout from "./components/FaqLayout";
import SupportInfo from "./containers/SupportInfo";
import Container from "@/components/Container";

const FaqView: FC = () => {
    return (
        <Container mt={64}>
            <Information />
            <FaqLayout />
            <SupportInfo />
        </Container>
    );
};

export default FaqView;
