import React, { Fragment } from "react";
import { useNavigate } from "react-router";
import { StyledBreakcrumb, StyledIcon, StyledTextBreakcrumb } from "./Breadcrumb.styles";

const Breadcrumb = ({ pages }) => {
  const navigate = useNavigate();
  return (
    <StyledBreakcrumb>
      {pages.map(({ label, url, name }, index) => {
        const ultimo = index === pages.length - 1;
        return (
          <Fragment key={name}>
            <StyledTextBreakcrumb
              onClick={() => {
                if (url) {
                  navigate(url);
                }
              }}
              ultimo={ultimo}
            >
              {label}
            </StyledTextBreakcrumb>
            {!ultimo ? <StyledIcon /> : ""}
          </Fragment>
        );
      })}
    </StyledBreakcrumb>
  );
};

export default Breadcrumb;
