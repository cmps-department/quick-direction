import { FC } from "react";
import { Button } from "@mantine/core";
import { Icon } from "@iconify/react";
import Link from "next/link";

interface MessageDocumentProps {
    label: string;
    documentLink: string;
}

const MessageDocument: FC<MessageDocumentProps> = ({ label, documentLink }) => {
    return (
        <Link href={documentLink}>
            <Button w={217} radius="xl" variant="outline" color="#02808F" leftSection={<Icon width={24} height={24} icon="basil:document-outline" />}>
                {label}
            </Button>
        </Link>
    );
};

export default MessageDocument;
