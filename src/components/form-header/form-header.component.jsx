import React from "react";

import {
  ImageDiv,
  CreatingSiteSvg,
  FormHeaderText,
} from "./form-header.styles";

const FormHeader = () => {
  return (
    <ImageDiv>
      <CreatingSiteSvg src="documents/20121/0/Website+Creator-bro.svg"/>
      <FormHeaderText>Enter your post details</FormHeaderText>
    </ImageDiv>
  );
};

export default FormHeader;
