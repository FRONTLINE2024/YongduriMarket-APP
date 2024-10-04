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
    padding: 15px 15px;
;`
const LogoImage = styled.img`
    width: 185px;
    height: 70px;
`;

export default TopBar;