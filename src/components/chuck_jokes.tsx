// An alternative way of declaring a component is to write it as a function which
// returns a JSX.Element 
const ChuckJokes : React.FC<{id: number, joke: string}> = ({id, joke}) => {

    return (
        <>
            <p>id: {id} - joke: {joke}</p>
        </>
    )
}

export default ChuckJokes;