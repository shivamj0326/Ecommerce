import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import { sliderItems } from '../data'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position:relative;
    overflow:hidden;
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top:0px;
    bottom:0px;
    margin:auto;
    left:${props=>props.direction === "left" && "10px"};
    right:${props=>props.direction === "right" && "10px"};
    cursor: pointer;
    opacity: 0.5;
    z-index:2;
`

const Wrapper = styled.div`
    display: flex;
    height: 100%;
    transition: 1.5s ease all;
    transform: translateX(${props=> props.slideIndex * -100}vw);
`

const Slide = styled.div`
    display : flex;
    flex-direction:row;
    width: 100vw;
    height: 100vh;
    align-items: center;
    background-color: #${props => props.bg};
`
const ImgContainer = styled.div`
    flex : 1;
    height: 100%;

`

const Image = styled.img`
    height: 80%; 
    width:100%
`

const InfoContainer = styled.div`
    flex : 1;
    padding: 50px;
`

const Title = styled.h1`
    font-size: 70px;
`

const Description = styled.p`
    margin:50px 0px;
    font-weight: 500;
    font-size: 20px;
    letter-spacing: 3px;
`

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

const Slider = () => {

  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction)=>{
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2); 
        }
        else{
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
  };

  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlined/>
        </Arrow >

            <Wrapper slideIndex = {slideIndex}>
            {sliderItems.map((item) =>(
                <Slide bg={item.bg} >
                    <ImgContainer>
                        <Image src={item.img}/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Description>{item.desc}</Description>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                </Slide>
          ))}
            
            </Wrapper>
        
        
        <Arrow direction="right" onClick={()=>handleClick("right")}> 
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider