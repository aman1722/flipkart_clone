import {AppBar,Toolbar,Typography,Box,styled} from "@mui/material";


// Component Import ------>
import Search from "./Search";
import CoustomButton from "./CoustomButtons";
import { Link } from "react-router-dom";



// Styles ------>
const StyledHeader = styled(AppBar)`
    background: #2874f0;
    height : 55px
`

const Component = styled(Link)`
    margin-left:12%;
    line-height:0;
    text-decoration: none;
    color: inherit
`

const Subheading = styled(Typography)`
    font-size:10px;
    font-style: italic;
`

const CoustomButtonWrapper = styled(Box)`
    margin: 0 5% 0 auto;
`

const PlusImage = styled("img")({
    width:10,
    height:10,
    marginLeft:4

})

const Header = ()=>{
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    return (
        <StyledHeader>
            <Toolbar style={{minHeight:55}}>
               <Component to={`/`}>
                 <img src={logoURL} alt="logo" style={{width:75}}/>
                 <Box style={{display:"flex"}}>
                  <Subheading>Explore&nbsp;
                   <Box component="span" style={{color : "#FFE500"}}>Plus</Box> 
                  </Subheading>
                  <PlusImage src={subURL} alt="sub-logo" />
                 </Box>
               </Component>
               <Search/>
               <CoustomButtonWrapper>
                <CoustomButton />
               </CoustomButtonWrapper>
            </Toolbar>
        </StyledHeader>
    );
}

export default Header;