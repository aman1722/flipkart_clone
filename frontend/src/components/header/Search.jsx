
import { Box, InputBase ,styled } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

// Styles ------>
const Searchcontainer = styled(Box)`
    background: #fff;
    width: 38%;
    border-radius: 2px;
    margin-left: 10px;
    display: flex;
`

const Inputsearchbase = styled(InputBase)`
    padding-left: 20px;
    width:100%
`

const Searchiconwrapper = styled(Box)`
    color: blue;
    padding: 5px;
    display: flex;
`

const Search = ()=>{
    return (
        <Searchcontainer>
       <Inputsearchbase
        placeholder="Search for Products Brand and More"
       />
       <Searchiconwrapper>
        <SearchIcon/>
       </Searchiconwrapper>
       </Searchcontainer>
    );
}

export default Search;