import { localImages } from "@assets/images";
import { Children, createContext, ReactNode, useContext } from "react";
import { ImageSourcePropType } from "react-native";

type ItemData = {
  id: number;
  imageSource: ImageSourcePropType;
  name: String;
};

const dataOfCategories: ItemData[] = [
  {
    id: 1,
    imageSource: localImages().ic_nike,
    name: "Nike",
  },
  {
    id: 2,
    imageSource: localImages().ic_adidas,
    name: "Adidas",
  },
  {
    id: 3,
    imageSource: localImages().ic_puma,
    name: "Puma",
  },
  {
    id: 5,
    imageSource: localImages().ic_newBalance,
    name: "New Balance",
  },
  {
    id: 6,
    imageSource: localImages().ic_converse,
    name: "Converse",
  },
];

type CategoryContextType = {
  categories: ItemData[];
};

const CategoryContext = createContext<CategoryContextType | undefined>(
  undefined
);

export const CategoryProvider = ({ children }: { children: ReactNode }) => {
  return (
    <CategoryContext.Provider value={{ categories: dataOfCategories }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategories = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error(
      "useCategoryContext must be used within a CategoryProvider"
    );
  }
  return context;
};
