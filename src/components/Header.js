import styled from "styled-components"
import { IoMdMail } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import IntersectionObserverWrap from "./observer";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
      display: "flex",
      flex: "0 0 auto",
    }
  }));

export default function Header() {

    const classes = useStyles();
  
    
 return(
    <>
    <StyledHeader>
        <HeaderLeft>
            <p>Stereolab</p>
        </HeaderLeft>
        <IntersectionObserverWrap>
        <HeaderCenter >
        <button classname={classes.button} data-targetid="baffles">Baffles</button>
        <button classname={classes.button} data-targetid="box">Box</button>
        <button classname={classes.button} data-targetid="cabos">Cabos</button>
        <button classname={classes.button} data-targetid="falantes">Falantes</button>
        <button classname={classes.button} data-targetid="retro">Retrô</button>
        <button classname={classes.button} data-targetid="tweeter">Tweeter</button>
        <button classname={classes.button} data-targetid="descontinuados">Descontinuados</button>
        </HeaderCenter>
        </IntersectionObserverWrap>

        <HeaderRight>
             <p>Compre Online</p>
            <IoMdMail color="#FFF" font-size="32" />
            <IoLogoInstagram color="#FFF" font-size="32"/>
           

        </HeaderRight>
    </StyledHeader>
    </>
 )

}


const StyledHeader = styled.div`
display: flex;
justify-content: space-between;
position: sticky;




`

const HeaderLeft = styled.div`
width: 150px;
height:70px;
background-color: #4F5D75;
display: flex;
align-items: center;
justify-content: center;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
/* position: fixed;
left: 0px; */
p{
    font-family: 'Rubik', sans-serif;
    font-size: 20px;
    font-weight: 700;
    color: #fff;
}
`
const HeaderCenter = styled.div`
width: 800px;
height: 70px;
background-color: #4F5D75;
display: flex;
justify-content: space-around;
align-items: center;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
/* position: fixed;
left: 300px; */

button{ 
    font-family: 'Rubik', sans-serif;
    color: #fff;
    font-size: 16px;
    font-weight: 300;
}
`

const HeaderRight = styled.div`
width: 300px;
height: 70px;
display: flex;
justify-content: space-evenly;
align-items: center;
background-color: #4F5D75;
margin-right: 15px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
/* position: fixed;
left: 1600px; */
p{ 
    font-family: 'Rubik', sans-serif;
    color: #fff;
    font-size: 16px;
    font-weight: 300;
}

`