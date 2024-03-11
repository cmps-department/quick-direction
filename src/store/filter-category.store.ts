import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface ICategoryFilterStore {
    filter: "asc" | "dec" | "date" | "";
    setFilter: (filter: ICategoryFilterStore["filter"]) => void;
}

const InitialState: Omit<ICategoryFilterStore, "setFilter"> = {
    filter: "",
};

export const useCategoryFilterStore = create<ICategoryFilterStore>()(
    devtools(
        (set) => ({
            ...InitialState,
            setFilter: (filter: ICategoryFilterStore["filter"]) => {
                set({ filter }, false, "setFilter");
            },
        }),
        { name: "CategoryFilter" },
    ),
);

export const getCategoryFilterStore = () => useCategoryFilterStore.getState();
