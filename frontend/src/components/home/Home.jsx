import { useEffect } from "react";

import NavBar from "./NavBar";
import Banner from "./Banner";
import { Box, styled } from "@mui/material";

import { getProducts } from "../../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";

// Styling---------->
const Componant = styled(Box)`
  padding: 10px;
  background-color: #f2f2f2;
`;

const Home = () => {
  const { products } =  useSelector(state => state.getProducts);
  console.log(products)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <>
      <NavBar />
      <Componant>
        <Banner />
      </Componant>
    </>
  );
};

export default Home;
