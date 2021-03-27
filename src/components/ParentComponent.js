import {useState} from 'react'
import Title from './Title'
import Button from './Button'
import Count from './Count'
import './ParentComponent.css'

const ParentComponent = () => {
  
  const [age, setAge] = useState(25)
  const [salary, setSalary] = useState(35000)

  const incrementAge = () => {
    setAge(age + 1)
  }

  const incrementSalary = () => {
    setSalary(salary + 1000)
  }
    return (
        <div className='container'>
        <Title></Title> 
        <Count text='age' count={age}></Count> 
        <Button handleClick={incrementAge} text='Increment Age'></Button> 
        <Count text='salary' count={salary}></Count>
        <Button handleClick={incrementSalary} text='Increment Salary'></Button>
        </div>
    )
}

export default ParentComponent
