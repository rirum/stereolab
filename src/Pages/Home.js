import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import som from "../assets/som.jpg";


export default function Home(){
    return(
        <>
        <Header/>
        <WrapperHome>
        <ContainerLeft>
            <TextWrapper>
            <TextLeftH1> <h1>Stereolab</h1> <p>.</p> </TextLeftH1> 
            <h2>desde 2005.</h2>
            </TextWrapper>
            
        </ContainerLeft>
        <ContainerRight>
            <img src={som} alt="som"/>
        </ContainerRight>
        </WrapperHome>
        <Footer/>
        </>
    )
}

const WrapperHome = styled.div`
display: flex;


`
const ContainerLeft = styled.div `
width: 45vw;
height: 100vh;
background-color: #fff;
display: flex;
margin-top: -70px;

`

const TextWrapper = styled.div`
h2 {
    font-family: 'Rubik', sans-serif;
    font-size: 20px;
    margin-left: 50px;
}

`

const TextLeftH1 = styled.div`
display: flex;
h1{
    font-family: 'Bebas Neue', sans-serif;
    font-size: 150px;
    margin-top: 300px;
    margin-left: 50px;
}
p{
    font-family: 'Bebas Neue', sans-serif;
    font-size: 250px;
    margin-top: 220px;
    color: orange;
     margin-left: 20px;
}
`

const ContainerRight = styled.div `
width: 55vw;

background-color: pink;
margin-top: -70px;
img{
    width: 1300px;
    height: 1000px;
    background-size: contain;
    
}

`