import Joker from "./components/Joker.tsx";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Joke } from "./interfaces/Joke.ts"; // Fixed typo in import path



const ParentDiv = styled.div`
    width: 70vw;
    margin: auto;
  
    height:100vh;//why not height100 with display flex
    background-color: rebeccapurple;

`;


const Photos = styled.img`
    width: 10%; 
    height: auto;
    display:block;
    margin: 0 auto; 
   

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
    margin-left: 42%;
    margin-top: 5%;
    padding: 19px 24px;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    cursor: pointer;

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
            headers:{
                Accept: "application/json",
            },
        });
        const jokeData: Joke= await rawData.json();
         setData([jokeData]);
    }

    useEffect(()=>{fetchJoke();}, []);


    // how do i change it through this? just change
    // useEffect Hook for fetching the data and error handling.
    // useEffect(() => {
    //     async function fetchData(): Promise<void> {
    //         const rawData = await fetch("https://icanhazdadjoke.com/", {
    //             headers:{
    //                 Accept: "application/json",
    //             },
    //         });
    //         const jokeData: Joke= await rawData.json();
    //         setData([jokeData]);
    //     }
    //
    //
    //     fetchData()
    //         .then(() => console.log("yay"))
    //         .catch((e: Error) => console.log("nay" + e));
    // }, []);

    return (
        <ParentDiv>
            <Photos src={"../public/laughing-emoji.svg"} alt="Joke" />
            <Joker data={data}/>
            <Button onClick={fetchJoke}>Another one</Button>
        </ParentDiv>
    );
}
