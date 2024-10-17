import { searchString, movies } from "./NavBar";

const Results = (props) => {
    const {show} = props;

    return (
        <div>
            { !show &&
                <h1>{`Results for "${searchString}"`}</h1>
            }
            { show &&
                <h1>Now Playing</h1>
            }
            <div className="cardContainer">
                {movies}
            </div>
        </div>
    )
}

export default Results;