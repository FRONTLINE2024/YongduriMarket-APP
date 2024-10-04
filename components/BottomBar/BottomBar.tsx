import styled from "styled-components";
import { FaHome,FaComments } from "react-icons/fa";
import { FaRegPenToSquare, FaUser } from "react-icons/fa6";


function BottomBar(){
    return (
        <BottomBarContainer>
            <FaRegPenToSquare size ={30}/>
            <FaComments size ={30}/>
            <FaHome size ={30}/>
            <FaUser size ={30}/>
        </BottomBarContainer>
    )
}

const BottomBarContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    position: fixed; 
    bottom: 0; 
    left: 0; 
    right: 0;
    height: 50px;
    border-top: 1px solid black;
    padding-top: 10px;
    
`;

export default BottomBar;