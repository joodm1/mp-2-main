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
    font-size: calc(5px + 18vw);
    text-align: center;  // To center the emoji horizontally
    
`;



//i got the button styled details from online just cause it's pretty :) <3
const Button = styled.button`
    background-image: linear-gradient(144deg, #AF40FF, #5B42F3 50%, #00DDEB);
 
    border-radius: 8%;
    box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
    box-sizing: border-box;
    color: #FFFFFF;
    display: flex;
    font-family: Phantomsans, sans-serif;
    font-size: calc(2px + 2vw);
    justify-content: center;
  
    padding: 2%;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    cursor: pointer;

    position: fixed;
    bottom: 2%;

  
    max-width: 25%; 
    margin-left: 27%;

    &:hover {
        box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
        transition-duration: .1s;
        outline: 0;
    }

    @media screen and (max-width: 765px) {
        color: white;
        font-size: calc(2px + 4vw);
        max-width: 40%; // Adjust button width for smaller screens
        margin-left: 21%;//looked a little wonky had to adjust it
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

            <Joker data={data}/>
            <Button onClick={fetchJoke}>Another one</Button>

        </ParentDiv>
    );
}
