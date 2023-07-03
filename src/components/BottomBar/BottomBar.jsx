import React from "react";
import { FiHome, FiUser } from "react-icons/fi";
import { useNavigate } from "react-router";
import {
  StyledBottomBarIcon,
  StyledContainer,
  StyledLabel,
} from "./BottomBar.styles";
import { AiOutlineComment } from "react-icons/ai";

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
    icon: FiUser,
    page: "/account",
    name: "cuenta",
    show: "not-admin",
    label: "Mi cuenta",
  },
];

const BottomBar = () => {
  const navigate = useNavigate();
  const currentPath = window.location.pathname.split("/")?.[1] || "";
  const currentPage = pagesList.find((page) => page.page === `/${currentPath}`);

  return (
    <StyledContainer>
      {pagesList
        .filter((page) => {
          if (page.show === "admin") {
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
