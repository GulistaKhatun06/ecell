import styled from "styled-components";

const Rolldice = ({roleDice,CurrentDice}) => {


  return (
    <DiceContainer>
      <div  className="dice"  onClick  = {roleDice}> 
      <img src ={`/images/dices/dice_${CurrentDice}.png`} alt ="dice1"/>
      </div>
    </DiceContainer>
  )
}

export default Rolldice;

const DiceContainer = styled.div`
margin-top:48px;
display:flex;
flex-direction:column;
align-items:center;
.dice{

}
`;