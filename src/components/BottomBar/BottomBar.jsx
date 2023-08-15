import React from "react";
import { FiHome, FiBookmark } from "react-icons/fi";
import { useNavigate } from "react-router";
import {
  StyledBottomBarIcon,
  StyledContainer,
  StyledLabel,
} from "./BottomBar.styles";
import { AiOutlineComment } from "react-icons/ai";
import { useUserData } from "../../utils/userData";

const pagesList = [
  {
    icon: FiHome,
    page: "/",
    name: "inicio",
    label: "Inicio",
    show: "not-admin",
  },
  {
    icon: AiOutlineComment,
    page: "/comments",
    name: "comments",
    show: "admin",
    label: "Comentarios",
  },
  {
    icon: FiBookmark,
    page: "/favorites",
    name: "favoritos",
    show: "not-admin",
    label: "Favoritos",
  },
];

const BottomBar = () => {
  const user = useUserData();
  const navigate = useNavigate();
  const currentPath = window.location.pathname.split("/")?.[1] || "";
  const currentPage = pagesList.find((page) => page.page === `/${currentPath}`);

  return (
    <StyledContainer>
      {pagesList
        .filter((page) => {
          if (page.show === "admin" && !user?.is_profesional) {
            return false;
          }
          return true;
        })
        .map(({ icon: IconComponent, page, name, label, onClick }) => (
          <StyledBottomBarIcon
            selected={page && page === currentPage?.page}
            key={name}
            onClick={async () => {
              if (onClick) {
                onClick();
              } else {
                navigate(page);
              }
            }}
          >
            <IconComponent />
            <StyledLabel>{label}</StyledLabel>
          </StyledBottomBarIcon>
        ))}
    </StyledContainer>
  );
};

export default BottomBar;
