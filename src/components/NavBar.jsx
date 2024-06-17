import {Link} from 'react-router-dom'

export default function NavBar () {
  
  return (
    <nav className="navbar">
      <div>
        <Link to ='/'>Home</Link>
        <Link to ='/mailboxes'>Mailboxes</Link>
        <Link to ='/new-mailbox'>New Mailbox</Link>
      </div>
    </nav>
  )
}

