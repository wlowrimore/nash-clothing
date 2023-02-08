import { FC } from "react";

import ProductCard from "../product-card/product-card.component";

import {
  CategoryPreviewContainer,
  TitleLink,
  CategoriesPreview,
} from "./category-preview.styles";

import { CategoryItem } from "../../store/categories/category.types";

type CategoryPreviewProps = {
  title: string;
  products: CategoryItem[];
};

const CategoryPreview: FC<CategoryPreviewProps> = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <TitleLink to={title}>{title.toUpperCase()}</TitleLink>
      </h2>
      <CategoriesPreview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoriesPreview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
