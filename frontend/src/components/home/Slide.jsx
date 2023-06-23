import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Box, Typography , styled } from "@mui/material";
import Countdown from 'react-countdown';


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};


const Componant = styled(Typography)`
  margin-top: 10px;
  background-color: #FFFFFF;
`
const Deal = styled(Typography)`
  padding: 15px 20px;
  
`
const Slide = ({ products }) => {
  const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
  return (
    <Componant>
      <Deal>
        <Typography>Deal of The Day</Typography>
        <Box>
          <img src={timerURL} alt="timer" />
          <Countdown date={Date.now() + 5.04e+7} />
        </Box>
      </Deal>
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        centerMode={true}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {products.map((product) => (
          <img src={product.url} alt="product" />
        ))}
      </Carousel>
    </Componant>
  );
};

export default Slide;
