import { Flex, Text } from "@mantine/core";
import styles from "./simpleHeader.module.scss";


const SimpleHeader = () => {
    return (
        <Flex align="center" justify="center" className={styles.simpleHeader}>
            <Text className={styles.logo}>QD</Text>
        </Flex>
    )
}

export default SimpleHeader;