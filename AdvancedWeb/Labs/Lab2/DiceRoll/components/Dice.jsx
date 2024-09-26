import { die } from "../helper";

const Dice = (props) => {
    const {roll} = props;
    
    return (
        <span className="diceContainer" >
            <i className={`fas fa-dice-${die[roll]}`}></i>
        </span>
    );
};

export default Dice;