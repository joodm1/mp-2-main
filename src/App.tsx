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


const SlayageNote = styled.p`

    margin-left: 28%; //i know it's an odd number but it's the only one that centered

    background-color: rebeccapurple;

`;



const ForEmoji = styled.p`
    font-size: 100px;
    text-align: center;  // To center the emoji horizontally
`;



//i got the button styled details from online just cause it's pretty
const Button = styled.button`
    align-items: center;
    background-image: linear-gradient(144deg, #AF40FF, #5B42F3 50%, #00DDEB);
    border: 0;
    border-radius: 8px;
    box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
    box-sizing: border-box;
    color: #FFFFFF;
    display: flex;
    font-family: Phantomsans, sans-serif;
    font-size: 20px;
    justify-content: center;
    line-height: 1em;
    max-width: 100%;
    min-width: 140px;

    padding: 19px 24px;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    cursor: pointer;

    margin-left: 42%;
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
                Accept: "application/json",
            },
        });
        const jokeData: Joke = await rawData.json();
        setData([jokeData]);
    }

    useEffect(() => {
        fetchJoke();
    }, []);


    return (
        <ParentDiv>
            <ForEmoji>😜</ForEmoji>
            <SlayageNote> added in the emoji to be cutesy, also the api's joke are disappointing</SlayageNote>
            <Button onClick={fetchJoke}>Another one</Button>
            <Joker data={data}/>

        </ParentDiv>
    );
}
