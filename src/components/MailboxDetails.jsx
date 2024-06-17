import { useEffect, useState } from 'react'
import {useParams, Link} from 'react-router-dom'

export default function MailboxDetails (props) {

  const [mailbox, setMailbox] = useState('')

  let {mailboxId} = useParams() 
  console.log(`ID is ${mailboxId}`)

  useEffect(() => {
    let selectedMailbox = props.mailboxes.find((mailbox) => mailbox.id === parseInt(mailboxId))
    setMailbox(selectedMailbox)
    console.log(`mailbox is ${selectedMailbox}`)
  }, [props.mailboxes, mailboxId])

  return mailbox ? (
    <div className="mail-box">
      <Link to ='/mailboxes'>Back to Listings</Link>
      
      <div className="detail-header">
          <h1>Mailbox {mailbox.id}</h1>
          <h3>Size: {mailbox.boxSize}</h3>
          <h3>Owner: {mailbox.boxholder}</h3>
      </div>

    </div>
  ) : <h1>Mailbox not found</h1>;
}

