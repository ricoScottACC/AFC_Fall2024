const RollValue = (props) => {
    let {num1} = props;
    let {num2} = props;
    let total = (num1 + 1) + (num2 + 1);

    return <h1 style={{textAlign: "center", fontSize: "7em"}}>You rolled {total}!</h1>
};

export default RollValue;