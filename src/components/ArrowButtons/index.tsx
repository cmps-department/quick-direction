import React, { Dispatch, FC, SetStateAction } from "react";
import { Button, Flex } from "@mantine/core";

interface ArrowButtonsProps {
    setAmountSub: Dispatch<SetStateAction<number>>;
}

const ArrowButtons: FC<ArrowButtonsProps> = ({ setAmountSub }) => {
    return (
        <Flex direction={"column"}>
            <Button onClick={() => setAmountSub((prev: number) => ++prev)} h={"fit-content"} bg={"transparent"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                    <path fill="#02808f" d="M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19z" />
                </svg>
            </Button>
            <Button onClick={() => setAmountSub((prev: number) => (--prev > 0 ? prev : 1))} h={"fit-content"} bg={"transparent"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                    <g transform="rotate(180 12 12)">
                        <path
                            fill="#02808f"
                            d="M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19z"
                        />
                    </g>
                </svg>
            </Button>
        </Flex>
    );
};

export default ArrowButtons;
