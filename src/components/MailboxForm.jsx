import { useNavigate } from "react-router-dom"

export default function MailboxForm (props) {

  let navigate = useNavigate()
  
  const handleSubmit = (e) => {
    // console.log(newMailbox)
    props.addMailbox(e)
    navigate('/mailboxes')
}

const newMailbox = props.newMailbox
console.log(props)

  return (
    <div>
      <h1>Add A New Mailbox</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="boxholder"
          placeholder="boxholder"
          type="text"
          value={newMailbox.boxholder}
          onChange={props.handleChange}
          required
        />
  
        <label htmlFor="boxSize">Select Box Size:</label>
        <select
          id="boxSize"
          name="boxSize"
          onChange={props.handleChange}
          required
        >
          <option disabled selected required>
            Select a size
          </option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
  
        <button>Submit</button>
      </form>
    </div>
  );
  
}


