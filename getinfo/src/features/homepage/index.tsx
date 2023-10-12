import { FC } from "react"
import Layout from "../../layouts/Layout"
import styles from './header.module.scss'

const Home: FC = () => {
    return (
        <Layout title={"Home"} isLogin={true}>
            <div className={styles.home}>
                <h1>Home</h1>
            </div>
        </Layout>
    )
}

export default Home
