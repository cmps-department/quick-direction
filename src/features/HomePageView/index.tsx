import { FC } from "react";
import AdvantagesSection from "./containers/Advantages";
import GuideSection from "./containers/Guide";
import HelpSection from "./containers/Help";

const HomePageView: FC = () => {
    return (
        <>
            <AdvantagesSection />
            <GuideSection />
            <HelpSection />
        </>
    );
};

export default HomePageView;
