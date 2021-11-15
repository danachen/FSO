const Course = ({courses}) => {
  return (
    <div>
      <ul>
      {courses.map ((course) => {
        return <li key = {course.id}><h1>{course.name}</h1>
          {course.parts.map((item) => {
              return <p key = {item.id}>{item.name} {item.exercises}</p>
            })}
          <h2>total of {course.parts.reduce(function(prev, curr) {
              return prev + curr.exercises;
            }, 0)} exercises</h2>
        </li>
        })}
      </ul>
    </div>
  )
}

export default Course