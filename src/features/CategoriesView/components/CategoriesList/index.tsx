import { Box, Text } from "@mantine/core";
import Category from "../Category";
import { FC } from "react";
import { FixedSizeList as List } from "react-window";

interface ICategoryList {
    categories: IGetCategory[];
}

const CategoriesList: FC<ICategoryList> = ({ categories }) => {
    if (!categories.length) {
        return (
            <Text style={{ textAlign: "center" }} mt={40} p={"50px 0"} fz={22} fw={500}>
                Категорій поки що немає!
            </Text>
        );
    }

    const Row: FC<{ index: number; style: any }> = ({ index, style }) => (
        <Box style={{ ...style, top: `${parseFloat(style.top) + 24*index}px` }}>
            <Category key={categories[index].id} category={categories[index]} />
        </Box>
    );

    return (
        <Box>
            <List height={400} itemCount={categories.length} itemSize={79} width="100%">
                {Row}
            </List>
        </Box>
    );
};

export default CategoriesList;
