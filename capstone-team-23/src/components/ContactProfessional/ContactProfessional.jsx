import React from 'react'
import Button from '../Reusable Components/Buttons/Button'
import Header from '../Reusable Components/Header/Header'

const ContactProfessional = ({name,profMail}) => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <div className="container">
        <br />
        <br />
        <br />
      <h2 className="mb-3"><Header text={"Contact " + name} style={{fontSize:"2.5rem", marginTop:"3rem"}} /></h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            From:
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            To:
          </label>
          <input className="form-control" type="email" id="email" required value={profMail} disabled/>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <Button buttonText="Send Message" style={{padding:".5rem", marginLeft:"0rem"}}/>
      </form>
    </div>
  )
}
export default ContactProfessional