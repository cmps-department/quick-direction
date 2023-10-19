import { FC } from "react"
import PageLayout from "../../layouts/PageLayout"
import AdvantagesSection from "./containers/advantages"
import GuideSection from "./containers/guide"
import HelpSection from "./containers/help"

const Home: FC = () => {
    return (
        <PageLayout title={"Home"} isLogin={true}>
            <AdvantagesSection/>
            <GuideSection/>
            <HelpSection/>
        </PageLayout>
    )
}

export default Home
