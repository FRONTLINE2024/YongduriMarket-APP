import styled from "styled-components";
import {FaSearch} from "react-icons/fa";

function TopBar() {
    return(
        <TopBarContainer>
            <LogoImage src = '/images/yongduMarketLogo.png'/>
            <FaSearch size = {20}/>
        </TopBarContainer>
    )
}

const TopBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0 20px 15px;
 
  
    width: 90%;
;`
const LogoImage = styled.img`
    width: 200px;
    height: 70px;


`;

export default TopBar;