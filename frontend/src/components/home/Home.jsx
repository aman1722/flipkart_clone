import NavBar from "./NavBar";
import Banner from "./Banner";
import { Box , styled } from "@mui/material"


// Styling----------> 
const Componant = styled(Box)`
     padding: 10px;
     background-color: #F2F2F2;
`



const Home = ()=>{
    return (
        <>
        <NavBar />
        <Componant>
           <Banner />
        </Componant>   
        </>
    );
}

export default Home;