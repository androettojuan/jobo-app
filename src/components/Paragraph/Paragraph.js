import React from "react";
import FakeComponent from "../FakeComponent/FakeComponent";
import { StyledParagraph } from "./Paragraph.stlyes";

const Paragraph = ({ children, loading, size }) => {
  if (loading) {
    return (
      <FakeComponent style={{ width: 160, height: 20, marginBottom: 3 }} />
    );
  }
  return <StyledParagraph size={size}>{children}</StyledParagraph>;
};

export default Paragraph;
