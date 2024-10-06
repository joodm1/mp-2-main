import styled from "styled-components";
import { Joke } from "../interfaces/Joke.ts";


const JokeBox = styled.div` /*for the black box around the joke*/
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 80%;
    max-height: 40%;
    align-items: center;
    padding: 2% 2% 0 2%;/*had to have 0 bottom padding as it just didn't make sense aesthetically*/
    margin: auto;
    margin-top: 5%;
    margin-bottom: 3%;
    background-color: black;
    border: 3px white solid;
    text-align: center;
    justify-content: center; /*horizontally*/
    align-items: center; /* apparently vertically?? */

    h1 {// for the actual joke
        font-size: calc( 2vw);
        color: white; 
        margin: 0; 
    
    }

    p{ //for the status number

        color: grey; // chose grey with the black bacground so it could be hidden a bit 
        font:  small-caps bold calc(1vw) 'Times New Roman';
        text-align: center;
        justify-content: center; /*horizontally*/
        align-items: center; /* apparently vertically?? */
        
    }
    @media screen and (max-width: 765px) {
        h1{
                 font-size: calc(2px + 4vw); /*making the font bigger for smaller screen
            tried to to use calc and vh in the normal default section it just didn't work out
            since the change was big, so i resorted to the trusty media screen :) SLAY
         */

    }  }
`;






//
// const TheJoke = styled.p`
//
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     max-width: 80%;
//     height: 20%;
//     align-items: center;
//     padding: 2%;
//     margin:3%;
//
//     text-align: center;
//     justify-content: center; /*horizontally*/
//     align-items: center; /* apparently vertically?? */
//
//     @media screen and (max-width: 765px) {
//         font-size: calc(2px + 4vw);
//         color:darkred;
//     }
// `;

export default function Joker(props: { data: Joke[] }) {
    return (
        <> {
                props.data.map((char: Joke) =>
                    <JokeBox key={char.id}>

                        <h1>{char.joke}</h1>
                        <p>{char.status}</p> {/* professor said I should print just so I'm using three things like the assigment asked*/}
                    </JokeBox>
                )
            }
     </>
    );
}
