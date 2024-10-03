import axios from 'axios';
import { useState } from 'react';

const Table = (props) => {
    const [people, setPeople] = useState([{}]);
    const [showTable, setShowTable] = useState(false);
    const urls = [
        "https://swapi.dev/api/people/1", "https://swapi.dev/api/people/2", 
        "https://swapi.dev/api/people/3", "https://swapi.dev/api/people/4",
        "https://swapi.dev/api/people/5", "https://swapi.dev/api/people/6", 
        "https://swapi.dev/api/people/7", "https://swapi.dev/api/people/8", 
        "https://swapi.dev/api/people/9", "https://swapi.dev/api/people/10"];

    const handleSubmit = () => {
        let getPeople = [];
    
        const requests = urls.map((url) => axios.get(url));
        

        axios.all(requests)
        .then((responses) => {
            responses.forEach((resp, i) => {
                getPeople[i] = resp.data;
            });
            setPeople(getPeople);
        })
        .catch((error) => {
            console.log('it broke');
        });

        setShowTable(true);
    };

    const handleReset = () => {
        setShowTable(false);
    };

    const tableData = people.map((person, i) => {
        return (
            <tr key={i}>
                <td>{person.name}</td>
                <td >{person.height}</td>
                <td>{person.hair_color}</td>
                <td>{person.gender}</td>
            </tr>
        )
    })
    
    return (
        <div>
            <div className="buttons">
                <button onClick={handleSubmit}>Submit</button>
                <button onClick={handleReset}>Reset</button>
            </div>
            {showTable && 
                <table>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Height</td>
                            <td>Hair Color</td>
                            <td>Gender</td>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData}
                    </tbody>
                </table>}
        </div>
    )
}

export default Table;