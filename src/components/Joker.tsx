import styled from "styled-components";
import { Joke } from "../interfaces/Joke.ts";


const SingleCharDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 60%;
    height: 20%;
    align-items: center;
    padding: 2%;
    margin: auto;
    margin-top: 10%;
    background-color: black; /* You can change this logic as needed */
    color: white;
    border: 3px darkred solid;
    font:  small-caps bold calc(5px + 1.5vw) 'Times New Roman';
    text-align: center;
    justify-content: center; /* Centers horizontally */
    align-items: center; /* Centers vertically */
`;

export default function Joker(props: { data: Joke[] }) {
    return (
        <> {
                props.data.map((char: Joke) =>
                    <SingleCharDiv key={char.id}>

                        <p>{char.joke}</p>
                    </SingleCharDiv>
                )
            }
     </>
    );
}
