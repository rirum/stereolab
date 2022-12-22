import styled from "styled-components";


export default function Footer(){
    return (
        <WrapperFooter>
        <p>© 2023 | Stereolab | All Rights Reserved.</p>
        </WrapperFooter>
    )
}

const WrapperFooter = styled.div`
width: 100%;
height: 80px;
position: fixed;
z-index: 1;
bottom: 0;
left:0;
background-color: #C4C4C4;
display: flex;
align-items: center;
justify-content: center;

p{
    font-family: 'Rubik', sans-serif;
    color: #fff;
    font-size: 16px;
    font-weight: 300;
   

}
`