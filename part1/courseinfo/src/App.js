import React from 'react'

const Header = ({title}) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
};

const Content = ({parts}) => {
  console.log(parts[0]);
  return (
    <div>
      <Part part = {parts[0]}/>
      <Part part = {parts[1]}/>
      <Part part = {parts[2]}/>
    </div>
  )
};

const Total = ({total}) => {
  return (
    <div>
      <p>Number of exercises {total[0].exercises + total[1].exercises + total[2].exercises}</p>
    </div>
  )
};

const Part = ({part}) => {
  console.log(part.name);
  return (
    <div>
      <p>{part.name} {part.exercises}</p>
    </div>
  )
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }
  return (
    <div>
      <Header title={course.name}/>
      <Content parts = {course.parts}/>
      <Total total = {course.parts}/>
    </div>
  )
}

export default App