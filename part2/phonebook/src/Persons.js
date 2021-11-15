const Persons = (props) => {
  return (
    <ul>
      {props.filtered().map(person => {
        return <p key={person.name}>{person.name} {person.phone}</p>
      })}
    </ul>
  )
}

export default Persons