import { useState } from 'react'


const Title =(props)=> <h1>{props.text}</h1>
const Statisticsline=({text,counter})=> <table><tbody><tr><><td>{text}</td><td>{counter}</td></></tr></tbody></table>

const Button=({handleClick,text})=>{ 
  return(
    <button onClick={handleClick}>
      {text}
    </button>
  )
}


const App = () => {
 // save clicks of each button to its own state
 const [good, setGood] = useState(0)
 const [neutral, setNeutral] = useState(0)
 const [bad, setBad] = useState(0)
 const [total, setTotal] = useState(0)
 
 const average=((good-bad)/total)
 const positive=((good)/total)*100+'%'




 const handleGood=()=>{
  const updatedGood= good+1
  setGood(updatedGood)
  setTotal(total+1)
 }

 const handleNeutral=()=>{
  const updatedNeutral= neutral+1
  setNeutral(updatedNeutral)
  setTotal(total+1)
 } 


  const handleBad=()=>{
  const updatedBad= bad+1
  setBad(updatedBad)
  setTotal(total+1)
 }



 const Statistics=()=>{
  
  if(total==0){

    return(<p>No feedback given</p>
  )
  }
  
    return(
      <><Statisticsline text='good' counter={good} />
      <Statisticsline text='neutral' counter={neutral} />
      <Statisticsline text='bad' counter={bad} />
      <Statisticsline text='all' counter={total} />
      <Statisticsline text='average' counter={average} />
      <Statisticsline text='positive' counter={positive} /></>

  )

 }

 
 







  return (
    <div>
      <Title text='give feedback'/>
      <Button handleClick={handleGood} text ='Good'/>
      <Button handleClick={handleNeutral} text ='Neutral'/>
      <Button handleClick={handleBad} text ='Bad'/>
      <Title text='statistics'/>
      <Statistics/>
    </div>
  )
}

export default App