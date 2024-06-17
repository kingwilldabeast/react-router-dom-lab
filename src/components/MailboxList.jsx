import { useNavigate } from "react-router-dom"
import {Link} from 'react-router-dom'


export default function MailboxList (props) {

  let navigate = useNavigate()
  const showMailbox = (mailbox) => {
    navigate(`${mailbox.id}`)
  }

  return (
    <div className="mailbox-grid">
        <Link to ='/'>Back</Link>
      {
      props.mailboxes.map((mailbox) => (
        <div className="mailbox-card" onClick={() => showMailbox(mailbox)} key={mailbox.id}>
          <h3>{mailbox.id}</h3>
          <h3>{mailbox.boxSize}</h3>
          <h3>{mailbox.boxholder}</h3>
        </div>
      ))}
    </div>
    
  )
}

