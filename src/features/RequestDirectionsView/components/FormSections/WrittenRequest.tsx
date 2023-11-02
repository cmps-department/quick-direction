import { Text } from "@mantine/core";
import Textarea from "../../../../components/Textarea/Textarea";

const WrittenRequest = () => {
    return (
        <>
            <Text fz={20} fw={700}>Напишіть звернення <Text fz={20} fw={700} span c="red">*</Text></Text>
            <Textarea
                styles={{
                    input: {
                        minHeight: "476px"
                    }
                }}
                placeholder="Введіть свій запит..."
            />
        </>
    )
}

export default WrittenRequest;