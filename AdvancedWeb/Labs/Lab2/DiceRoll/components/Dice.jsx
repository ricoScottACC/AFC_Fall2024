import { die } from "../helper";

const Dice = (props) => {
    const {roll} = props;
    
    return (
        <div className="diceContainer" >
            
            <i className={`fas fa-dice-${die[roll]}`}></i>

        </div>
    );
};

export default Dice;