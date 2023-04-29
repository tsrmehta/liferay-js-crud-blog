import React from "react";
import { CrossSVGIcon } from "../../assets/images/cross-svg-icon.conponent";

import { TagContainer, /*XSign,*/ XSignWrapper } from "./tags.styles";

const Tag = ({ index, keyword, removeTag }) => {
  return (
    <TagContainer contentEditable={false}>
      {keyword}
      <XSignWrapper onClick={() => removeTag(index)}>
        <CrossSVGIcon />
      </XSignWrapper>
    </TagContainer>
  );
};

export default Tag;
