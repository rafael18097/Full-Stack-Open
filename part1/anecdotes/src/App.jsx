import { useState } from 'react'
const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  'The only way to go fast, is to go well.'
]
let inivotes = new Array(anecdotes.length).fill(0);


const Button=({handleClick,text})=>{
  return(
  <button onClick={handleClick}>{text}</button>

  )
}

const Displayanecdotes = ({anecdote,vote})=>{
  
  return(
    <>
    <h1>Anecdote of the day</h1>
    <p>{anecdote}</p>
    <p>amount of votes:{vote}</p>
    </>
  )
  
  
}

const Displayfavanecdote = ({anecdote,vote})=>{
  let favmessage;
  
  if (vote==inivotes){
    favmessage=<><h1>Favorite Anecdote</h1><p>No favorite anecdotes today, vote now!</p></>
    
    
  }
  else{
    let maxvote=Math.max(...vote)
    let max=0;
    let maxindex=0;
    for (let i=0;i<vote.length;i++){
      
      if(maxvote>max){
        maxindex=i;
        max=vote[i];

      }
      favmessage=<><h1>Favorite Anecdote</h1><p>{anecdote[maxindex]}</p><p>amount of votes:{vote[maxindex]}</p></> 
      
    }
  }
  return(
    favmessage
  )
  
}


function App() {

  
  
  

  const[votes,setVotes]=useState(inivotes)
  
  const [selected, setSelected] = useState(0)
  

  const Handleanecdotes=()=>{
    
    const selectedanecdote=Math.floor(Math.random()*(8))
    setSelected(selectedanecdote)
    
    console.log('random number is',selectedanecdote)
    
  }

  const Handlevotes=()=>{
    const copy = [...votes]
    copy[selected]= copy[selected]+1
    setVotes(copy);
    
  }

  return(
  <div>
  <Displayanecdotes anecdote={anecdotes[selected]} vote={votes[selected]}/>
  <Button handleClick={Handlevotes} text='vote'/>
  <Button handleClick={Handleanecdotes} text='Next anecdote'/>
  <Displayfavanecdote anecdote={anecdotes} vote={votes}/>
  </div>
  
  )
}

export default App
