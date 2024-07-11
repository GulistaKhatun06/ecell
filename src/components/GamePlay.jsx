import styled from "styled-components"
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import Rolldice from "./Rolldice";
import{useState} from "react";
import { Button } from "../styled/Button";
import Rules from "./Rules";


const GamePlay = () => {

  const[score, setScore] = useState(0)
  const[selectedNumber, setSelectedNumber] = useState();
  const[CurrentDice, setCurrentDice] = useState(1);
  const[error, setError] = useState();
  const [showRules , setShowRules] = useState(false);

  const  genrateRandomNumber =( min , max) => {

    return Math.floor(Math.random() *  ( max- min ) + min);
  };

  
  
  const roleDice  =() => {
    const randomNumber = genrateRandomNumber (1,7);
    setCurrentDice ((prev ) => randomNumber);

    if(!selectedNumber) {
    setError("You have not selected any number");
    return;
    }
    setError (" ");


    if(selectedNumber === randomNumber){
      setScore (prev => prev+randomNumber);

    }else{
      setScore(prev => prev-2);
    }
  setSelectedNumber(undefined);
  };

  const resetScore =() =>{
    setScore(0);
  };

  

    return (
       
   <MainConatiner>
 <div className ="Topsection"> 
    <TotalScore score ={score}/>
    <NumberSelector  error ={error}  selectedNumber ={selectedNumber} setSelectedNumber ={setSelectedNumber} />
    
  </div >
  <Rolldice CurrentDice ={CurrentDice} roleDice={roleDice}/>
  <div className="btns">
   
   <Button onClick={resetScore} >Reset</Button>
   <Button onClick = {()=> setShowRules((prev )=> !prev)}> {showRules ? "Hide" : "Show"} Rules</Button>

  </div>
{showRules&&  <Rules/>}
  </MainConatiner>

    );      
};


export default GamePlay;




 const MainConatiner= styled.main`
 padding-top:70px;
 .Topsection {
    display:flex;
  justify-content:space-around;
     align-items:end;
 }
 .btns{
  display:flex;
  flex-direction:column;
  justify-content:center;
 gap:10px;
  align-items:center;


 }
 `;
