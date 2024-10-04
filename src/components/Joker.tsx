import styled from "styled-components";
import { Joke } from "../interfaces/Joke.ts";


const JokeBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 80%;
    max-height: 40%;
    align-items: center;
    padding: 2% 2% 0 2%;
    margin: auto;
    margin-top: 5%;
    margin-bottom: 3%;
    background-color: black;
    border: 3px white solid;
    text-align: center;
    justify-content: center; /*horizontally*/
    align-items: center; /* apparently vertically?? */

    h1 {// for p within jokebox
        font-size: calc( 2vw);
        color: white; 
        margin: 0; 
    
    }

    p{

        color: grey;
        font:  small-caps bold calc(1vw) 'Times New Roman';
        text-align: center;
        justify-content: center; /*horizontally*/
        align-items: center; /* apparently vertically?? */
        
    }
    @media screen and (max-width: 765px) {
        h1{
                 font-size: calc(2px + 4vw); //making the font bigger for smaller screen
            //tried to to use calc and vh it just didn't work ut since the change was big

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
                        <p>{char.status}</p> //professor said i should print so i'm using three things
                    </JokeBox>
                )
            }
     </>
    );
}
