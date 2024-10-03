import Joker from "./components/Joker.tsx";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {Joke} from "./interfaces/Joke.ts"; // Fixed typo in import path


const ParentDiv = styled.div`
    width: 70vw;
    margin: auto;
    height: 100vh; //why not height100 with display flex? 
    background-color: rebeccapurple;

`;






const ForEmoji = styled.p`
    font-size: calc(5px + 20vw);
    text-align: center;  // To center the emoji horizontally
    
`;



//i got the button styled details from online just cause it's pretty
const Button = styled.button`
    align-items: center;
    background-image: linear-gradient(144deg, #AF40FF, #5B42F3 50%, #00DDEB);
    border: 0;
    border-radius: 8%;
    box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
    box-sizing: border-box;
    color: #FFFFFF;
    display: flex;
    font-family: Phantomsans, sans-serif;
    font-size: calc(2px + 3vw);
    justify-content: center;
    line-height: 1em;
    max-width: 50%;
   

    padding: 1%;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    cursor: pointer;

    margin-left: 36%;
    margin-top: 5%;

    &:hover {
        box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
        transition-duration: .1s;
        outline: 0;
    }
`;



export default function App() {
    const [data, setData] = useState<Joke[]>([]);


    async function fetchJoke(): Promise<void> {
        const rawData = await fetch("https://icanhazdadjoke.com/", {
            headers: {
                Accept: "application/json", //this is the format they had on the api website
            },
        });
        const jokeData: Joke = await rawData.json();
        setData([jokeData]);//added to to a
    }

    useEffect(() => {
        fetchJoke();
    }, []);


    return (
        <ParentDiv>
            <ForEmoji>🤠</ForEmoji>
            <Button onClick={fetchJoke}>Another one</Button>
            <Joker data={data}/>

        </ParentDiv>
    );
}
