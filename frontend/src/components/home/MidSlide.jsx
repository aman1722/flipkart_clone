import { Box,styled } from "@mui/material";

import Slide from "./Slide";



const Componant = styled(Box)`
    display: flex;
`

const LeftComponant = styled(Box)`
    width: 83%;
`

const RightComponant = styled(Box)`
    background: #FFFFFF;
    padding: 5px;
    margin-top: 10px;
    margin-left: 10px;
    width: 17%;
    text-align: center;
`

const MidSlide = ({ products, title, timer }) => {
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
  return (
    <Componant>
      <LeftComponant>
        <Slide products={products} title={title} timer={timer} />
      </LeftComponant>
      <RightComponant>
        <img src={adURL} alt="ad" style={{ width: 217 }} />
      </RightComponant>
    </Componant>
  );
};

export default MidSlide;
