import { Box } from "@mui/material";

import { imageURL } from "../../constants/data";

const MidSection = () => {
  return (
    <Box>
      {imageURL.map((image) => (
        <img src={image} alt="image" />
      ))}
    </Box>
  );
};

export default MidSection;
