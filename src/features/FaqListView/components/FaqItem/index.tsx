import routes from "@/constants/routes";
import { Button, Group, Text } from "@mantine/core";
import Link from "next/link";
import { FC, useState } from "react";

import classes from "./styles.module.scss";
import { QuestionTypes } from "@/features/FaqView/components/FaqList";
import { useModalStore } from "@/store/modal.store";
import { Modals } from "@/components/Modals/data/modals";
import Image from "next/image";

interface FaqItemProps {
    faqItem: IFaqResponse;
}

const FaqItem: FC<FaqItemProps> = ({ faqItem }) => {
    const [isSwipe, setSwipe] = useState(false);
    const setOpen = useModalStore((store) => store.setOpen);

    const handleRightClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setSwipe((prev) => !prev);
    };

    return (
        <Group align={"center"} pos={"relative"}>
            <Button
                onClick={() =>
                    setOpen({
                        trigger: Modals.DELETE,
                        payload: {
                            name: faqItem.answer,
                            id: faqItem.id,
                        },
                    })
                }
                radius={"xl"}
                className={classes.deleteBtn}
            >
                <Image width={40} height={40} src="/images/DeleteBtn.svg" alt="delete-category" />
            </Button>
            <Link
                style={{ transition: "all .2s linear", marginLeft: isSwipe ? "80px" : 0, width: "100%", zIndex: 20 }}
                onContextMenu={handleRightClick}
                href={routes.EDIT_FAQ(faqItem.id)}
            >
                <Group className={classes.listItem} align={"center"} p={24}>
                    <Group gap={12} align={"center"}>
                        <Text style={{ textAlign: "center" }} fz={20} fw={600} c={"var(--accent-color)"}>
                            {QuestionTypes[faqItem.questionType as unknown as keyof typeof QuestionTypes]}
                        </Text>
                        <Text fz={18} fw={600} c={"black"} truncate>
                            {faqItem.question}
                        </Text>
                        <Text fz={18} fw={600} c={"black"}>
                            {" - "}
                        </Text>
                        <Text fz={18} fw={600} c={"black"} truncate>
                            {faqItem.answer}
                        </Text>
                    </Group>
                </Group>
            </Link>
        </Group>
    );
};

export default FaqItem;
