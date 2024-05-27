import { Header } from './Components/Header'
import { Content } from './Components/Content'
import { Coursecontent } from './Components/Content'
import { Total } from './Components/Total'
import { coursetitle } from './Components/Header'


function App()  {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  return (
    <div>
      <Header course = {coursetitle} />
      <Content/>
      <Total Coursecontent={Coursecontent}/>
    </div>
  )
}

export default App