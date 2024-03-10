import { Stack, Text } from "@mantine/core";

const IntroSection = () => {
    return (
        <Stack px={16} py={64} bg={"var(--green-color)"} justify="center" align="center">
            <Stack>
                <Text fz={20} fw={700} mb={15}>
                    Ця сторінка допоможе вам висловити ваші запити, отримати додаткову інформацію та зв'язатися з нами.
                </Text>
                <Text fz={20} fw={700}>
                    Будь ласка, заповніть наступні поля для подачі вашого запиту:
                </Text>
            </Stack>
        </Stack>
    );
};

export default IntroSection;
