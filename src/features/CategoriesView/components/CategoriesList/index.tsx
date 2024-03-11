import { Stack, Text } from "@mantine/core";
import Category from "../Category";
import { FC } from "react";

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

    return (
        <Stack gap={24}>
            {categories.map((category) => (
                <Category key={category.id} category={category} />
            ))}
        </Stack>
    );
};

export default CategoriesList;
