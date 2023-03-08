import React from 'react'
import styled from 'styled-components'

const data =[
  "Web Design" ,
  "Developvent",
  "Illustrator",
  "Product Design",
  "Social Media"
]

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
`

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`

const ListItem = styled.li`
  font-size: 90px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  ::after{
    content: "${(props)=>props.text}";
    position: absolute;
    top: 0;
    left: 0;

    color: pink;
    width: 0;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover{
    ::after{
      animation: movetext 0.5s linear both;
      @keyframes movetext {
        to{
          width: 100%;
        }
      }
    }
  }
`

const Right = styled.div`
  flex: 1;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  
`


const Works = () => {
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map(i=>(<ListItem key={i} text={i}>{i}</ListItem>))}
          </List>
        </Left>
        <Right>

        </Right>
      </Container>
    </Section>
  )
}

export default Works
