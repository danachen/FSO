import React, { useState, useEffect } from 'react'
import Form from './Form'
import Search from './Search'
import Persons from './Persons'
import personsService from './services/personsService'
import './index.css'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [ newSearch, setNewSearch ] = useState('')
  const [notificationMessage, setNotificationMessage] = useState('')
  const [error, setError] = useState('')

  const handleNewName = (e) => {
    setNewName(e.target.value)
  }

  const handleNewPhone = (e) => {
    setNewPhone(e.target.value)
  }

  useEffect(() => {
    personsService
    .getAll()
    .then(initialList => {
        setPersons(initialList)
      })
  }, [])

  const Notification = ({ message, error }) => {
    if (error) {
      return (
        <div className="error">
          {error}
        </div>
      )
    }

    if (message) {
      return (
        <div className="message">
          {message}
        </div>
      )
    }
    return null
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
    const nameObject = {
      name: newName,
      phone: newPhone,
    }

    if (!isDuplicate()) {
      personsService
        .create(nameObject)
        .then(response => {
          setPersons(persons.concat(response));
          setNewName('');
          setNewPhone('');
          setNotificationMessage(`${response.name} was successfully added!`)
        })

    } else {
      const person = persons.find(person => person.name === newName)
      const id = person.id
      const changedPerson = {...person, phone: newPhone}
      personsService
        .update(id, changedPerson)
        .then(returnedPerson => {
          setPersons(persons.map(person => person.id !== id ? person : returnedPerson))
          setNotificationMessage(`${returnedPerson.name} phone number was successfully changed!`)
        })
        .catch(error => {
          setError(`${person.name} was already removed`);
          setTimeout(() => {
            setError(null)
          }, 5000)
          setPersons(persons.filter(person => person.id !== id))
          })
    }
  }

  const handleDelete = (e) => {
    const id = e.target.value
    personsService.deleteEntry(id)
                  .then (response => {
                    setPersons(persons.filter(person => person !== id))
                  }
                )
  }

  return (
    <div>
      <Notification message={notificationMessage} error={error} />
      <h2>Phonebook</h2>
      <Search newSearch={newSearch} setNewSearch={setNewSearch} />
      <h2>add a new</h2>
      <Form addPerson={addPerson} handleName={handleNewName} handlePhone={handleNewPhone} newName={newName} newPhone={newPhone}/>
      <h2>Numbers</h2>
      <Persons persons={filteredPersons()} handleDelete={handleDelete} />
    </div>
  )
}

export default App