import { FC } from "react"
import Layout from "../../layouts/Layout"
import Advantages from "./sections/advantages"

const Home: FC = () => {
    return (
        <Layout title={"Home"} isLogin={true}>
            <Advantages/>
        </Layout>
    )
}

export default Home
