import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {registrationStatus} = props

  const value = registrationStatus

  if (value === 'sss') {
    console.log('yes')
  } else {
    console.log('no')
  }

  return <h1>hello</h1>
}

export default ActiveEventRegistrationDetails
