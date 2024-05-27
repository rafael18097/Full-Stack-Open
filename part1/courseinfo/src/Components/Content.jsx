import { Part } from "./Part"
const Coursecontent = [
    {name: 'Fundamentals of React', excercises: 10},
    {name: 'Using props to pass data', excercises: 7},
    {name: 'State of a component', excercises: 14}
  ]
const Content = () =>{
  
    return(
      <div>
        <Part Coursecontent={Coursecontent[0]}/>
        <Part Coursecontent={Coursecontent[1]}/>
        <Part Coursecontent={Coursecontent[2]}/>
      </div>
    )
  }

  export {Content}
  export {Coursecontent}