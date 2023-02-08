import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { DirectoryCategory } from "../directory/directory.component";

import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles";

type DirectoryItemProps = {
  category: DirectoryCategory;
};

const DirectoryItem: FC<DirectoryItemProps> = ({
  category: { imageUrl, title, route },
}) => {
  const navigate = useNavigate();

  const onNavigatHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigatHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
