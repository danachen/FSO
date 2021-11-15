import React, { useState } from 'react'
import Form from './Form'
import Search from './Search'
import Persons from './Persons'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', phone: '123-456' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [ newSearch, setNewSearch ] = useState('')

  const handleNewName = (e) => {
    setNewName(e.target.value)
  }

  const handleNewPhone = (e) => {
    setNewPhone(e.target.value)
  }

  const filteredPersons = () => {
    if (!newSearch.length) return persons;
    return persons.filter(person => person.name.toLowerCase().includes(newSearch.toLowerCase()));
  }

  const isDuplicate = () => {
    for (let person of persons) {
      if (person.name === newName) return true;
    }
    return false;
  }

  const addPerson = (e) => {
    e.preventDefault();
    if (!isDuplicate()) {
      const nameObject = {
        name: newName,
        phone: newPhone,
        id: persons.length + 1,
      }
      setPersons(persons.concat(nameObject));
      setNewName('');
      setNewPhone('');
    } else {
      alert(newName + ' is already added to the phonebook')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Search newSearch = {newSearch} setNewSearch = {setNewSearch}/>
      <h2>add a new</h2>
      <Form addPerson = {addPerson} handleName = {handleNewName} handlePhone = {handleNewPhone} newName = {newName} newPhone = {newPhone}/>
      <h2>Numbers</h2>
      <Persons filtered = {filteredPersons}/>
    </div>
  )
}

export default App