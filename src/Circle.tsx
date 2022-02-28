import styled from "styled-components";

interface ContainerProps {
    bgColor: string;
}

const Container = styled.div<ContainerProps>`
    width:200px;
    height: 200px;
    background-color: ${props => props.bgColor};
    border-radius:100px
`;

interface CircleProps {
    bgColor:string;

}

const x = (a:number, b:number) => a+b;

function Circle({ bgColor }:CircleProps) {
    return (
        <Container bgColor={bgColor}/>
    )
}

export default Circle;

interface PlayerShape {
    name:string,
    age:number
}

const sayHello = (playerObj) => `Hello ${playerObj.name} you are ${playerObj.age} years old`

sayHello({name:"nico", age:12})
sayHello({ name: "n", age: 1, hello:1 });