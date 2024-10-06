import Joker from "./components/Joker.tsx";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {Joke} from "./interfaces/Joke.ts"; // Fixed typo in import path



/* for the cute purple middle box that contains the entire program, it looks cutesy to me idk */
const ParentDiv = styled.div`
    width: 70vw;
    margin: auto;
    height: 100vh; 
    background-color: rebeccapurple;

`;






const ForEmoji = styled.p`
    font-size: calc(5px + 18vw);
    text-align: center;  // To center the emoji horizontally
    
`;



/*i got the button styled details from online just cause it's pretty :) <3*/
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

    position: fixed; /* wanted the button to always be low on the screen */
    bottom: 2%;

  
    max-width: 25%; 
    margin-left: 27%; /* weird number i know but it did center it! */

    &:hover { /* tried to make the hovering thing better but it didn't work so i'm settling with this*/
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
    const [data, setData] = useState<Joke[]>([]); /*kept professor's format of arrays*/

    // Function to fetch a random dad joke from the API
    async function fetchJoke(): Promise<void> {/* wanted to keep the function annonymous and inside useEffect but this made more sense*/
        const rawData = await fetch("https://icanhazdadjoke.com/", {
            headers: {
                Accept: "application/json", /* The API requires this header to return JSON format, i got it from their website*/
            },
        });
        const jokeData: Joke = await rawData.json();
        setData([jokeData]); /*Store the fetched joke in state*/
    }

    useEffect(() => {
        fetchJoke(); /* Fetch a joke when the component is first rendered */
    }, []);

    return (
        <ParentDiv> {/*put em all in small cute purple rectangle in the middle of the screen */}
            <ForEmoji>🤠</ForEmoji> {/* favorite emoji of all time that's why  */}

            <Joker data={data} /> {/* Pass the joke data to the Joker component */}
            <Button onClick={fetchJoke}>Another one</Button> {/* Fetch a new joke on button click */}
        </ParentDiv>
    );
}
