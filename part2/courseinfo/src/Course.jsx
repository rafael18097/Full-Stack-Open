const Course=(props)=>{
    const Header=(props)=><h2>{props.name}</h2>
    const Content=(props)=>{
        const Parts=(props)=>{
            const coursename=props.parts.map((parts)=><p key={parts.id}>{parts.name} {parts.exercises}</p>)
            const courseexercises=props.parts.map((parts)=>parts.exercises)           
            const totalexercises=courseexercises.reduce((x,y)=>x+y,0)
            return(
                <div>
                {coursename}
                
                <b>Total: {totalexercises}</b>
                </div>
            )

        }
        return(
            <Parts parts={props.parts}/>
        )
        }
        
return( 
    <div>
    <Header name={props.name}/>
    <Content parts={props.parts}/>
    </div>
    ) 
}


export {Course};
