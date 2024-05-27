const Total = (props) =>{
    const sum = props.Coursecontent.reduce(
        (previousvalue,currentValue)=> previousvalue+currentValue.excercises,0
    )
    return(
      <div>
        <p>Number of excersices {sum} </p>
      </div>
    )
  }

export {Total}