const Form = (props) => {
  return (
    <form onSubmit={props.addPerson}>
        <div>
          name:  <input 
            value = {props.newName}
            onChange = {props.handleName}
          />
        </div>
        <div>
          phone:  <input 
            value = {props.newPhone}
            onChange = {props.handlePhone}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

export default Form