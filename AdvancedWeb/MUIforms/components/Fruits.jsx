import {useState} from "react";

const Fruits = () => {
    const [str, setStr] = useState("");

    const handleChange = (e) => {
        setStr(e.target.value)
    }

    return (
        <>
            <input type={'text'} value={str} onChange={handleChange}/>
            <p>{str}</p>
        </>
    )
}

export default Fruits;