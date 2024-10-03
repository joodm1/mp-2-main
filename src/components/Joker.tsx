import styled from "styled-components";
import { Joke } from "../interfaces/Joke.ts";


const JokeBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 80%;
    max-height: 40%;
    align-items: center;
    padding: 2%;
    margin: auto;
    margin-top: 5%;
    background-color: black; 
    color: white;
    border: 3px darkred solid;
    font:  small-caps bold calc(5px + 1.5vw) 'Times New Roman';
    text-align: center;
    justify-content: center; /*horizontally*/
    align-items: center; /* apparently vertically?? */
`;

const StatusPara = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 80%;
    height: 20%;
    align-items: center;
    padding: 2%;
    margin: auto;
    margin-top: 0;
    background-color: black; 
    color: greenyellow;
 
    font:  small-caps bold calc(1vw) 'Times New Roman';
    text-align: center;
    justify-content: center; /*horizontally*/
    align-items: center; /* apparently vertically?? */
`;

export default function Joker(props: { data: Joke[] }) {
    return (
        <> {
                props.data.map((char: Joke) =>
                    <JokeBox key={char.id}>

                        <p>{char.joke}</p>
                        <StatusPara>{char.status}</StatusPara>
                    </JokeBox>
                )
            }
     </>
    );
}
