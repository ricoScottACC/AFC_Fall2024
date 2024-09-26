const UserCard = (props) => {
    let {name, age} = props;

    return (
        <div style={{border: "3px solid", padding: "10px", marginBottom: "10px"}}>
            <h2>{name}</h2>
            <p>{age}</p>
        </div>
    )
};

export default UserCard;