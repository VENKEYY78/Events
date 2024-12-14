import {Component} from 'react'

import './index.css'

const Status = {
  registerd: 'REGISTERED',
  yetToRegister: 'YET_TO_REGISTER',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

class ActiveEventRegistrationDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      //   regitationStatus: Status.initiall,
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.status !== prevState.value) {
      return {
        value: nextProps.status,
      }
    }
    return null
  }

  renderYetToRegisterView = () => (
    <div className="yet-rigister-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-img"
      />
      <p>
        A live performance brings so much to your relationship with dance The
        Events component is provided with eventsList. It consists of a list of
        event objects with the following properties in each event object When
        the image of an event item with registrationStatus as REGISTERED is
        clicked, then the Registered View should be displayed
      </p>
      <button className="button" type="button">
        Register Here
      </button>
    </div>
  )

  renderInitiallView = () => (
    <p>Click on an event, to view its registration details</p>
  )

  renderRdView = () => (
    <div className="registerd-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="register-img"
      />
      <h1>You have already registered for the event</h1>
    </div>
  )

  renderViewPoint = () => {
    const {value} = this.state
    switch (value) {
      case Status.registerd:
        return this.renderRdView()
      case Status.yetToRegister:
        return this.renderYetToRegisterView()
      case Status.registrationsClosed:
        return this.renderRegistationsClosedView()
      default:
        return this.renderInitiallView()
    }
  }

  renderRegistationsClosedView = () => (
    <div className="registerd-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="closed-img"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen</p>

      <p>the registrations soon!</p>
    </div>
  )

  render() {
    //   const {value} = this.state

    return (
      <div className="active-event-container">{this.renderViewPoint()}</div>
    )
  }
}

export default ActiveEventRegistrationDetails
