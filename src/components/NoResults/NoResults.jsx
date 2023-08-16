import React from "react";
import { StyledNoResults, StyledNoResultsMsg } from "./NoResults.styles";
import SadIcon from "../../utils/sad";

const NoResults = ({ msg }) => {
  return (
    <StyledNoResults>
      <SadIcon />
      <StyledNoResultsMsg>{msg}</StyledNoResultsMsg>
    </StyledNoResults>
  );
};

export default NoResults;
