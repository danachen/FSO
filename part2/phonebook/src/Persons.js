const Persons = ({persons, handleDelete}) => {
  return (
    <ul>
      {persons.map(person => {
        return <li className="person" key={person.id}><p key={person.name}>{person.name} {person.phone} <button onClick={handleDelete} value={person.id}>delete</button></p></li>
      })}
    </ul>
  )
}

export default Persons