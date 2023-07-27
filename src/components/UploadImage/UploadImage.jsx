import React from "react";
import {
  StyledUploadImage,
  StyledUploadImageButton,
  StyledUploadImageContainerButton,
  StyledUploadImageInput,
  StyledUploadImageLabel,
  StyledUploadImageText,
} from "./UploadImage.styles";
import { BsUpload } from "react-icons/bs";

const UploadImage = ({ accept, image, onChange }) => {
  return (
    <StyledUploadImage>
      <StyledUploadImageLabel>Foto</StyledUploadImageLabel>
      <StyledUploadImageContainerButton>
        <StyledUploadImageInput
          type="file"
          onChange={onChange}
          accept={accept}
        />
        <StyledUploadImageButton>
          <StyledUploadImageText>
            {image ? image.name : "Subir foto"}
          </StyledUploadImageText>
          <BsUpload />
        </StyledUploadImageButton>
      </StyledUploadImageContainerButton>
    </StyledUploadImage>
  );
};

export default UploadImage;
