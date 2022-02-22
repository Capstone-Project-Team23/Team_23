import React from 'react'
import InputField from './Reusable Components/InputFields/InputField'
import Label from './Reusable Components/Label/Label'
import CompanyLogo from './Reusable Components/CompanyLogo/CompanyLogo'
import Button from './Reusable Components/Buttons/Button'
function App() {
  return (
    <div>
      <CompanyLogo />
      <Label name="First Name" />
      <InputField width="400px" height="40px" placeholder="Enter your Name" />
      <Button buttonText="Send a message" width="150px"  height="40px"/>
    </div>
  )
}

export default App