import { FC } from "react"
import Layout from "../../layouts/Layout"
import AdvantagesSection from "./sections/advantages"
import GuideSection from "./sections/guide"
import HelpSection from "./sections/help"

const Home: FC = () => {
    return (
        <Layout title={"Home"} isLogin={true}>
            <AdvantagesSection/>
            <GuideSection/>
            <HelpSection/>
        </Layout>
    )
}

export default Home
