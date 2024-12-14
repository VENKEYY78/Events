import './index.css'

const EventItem = props => {
  const {eachEventDetails, onClickEvent} = props
  const {imageUrl, location, name, registrationStatus} = eachEventDetails

  const clickEvent = () => {
    onClickEvent(registrationStatus)
  }

  return (
    <li className="button" onClick={clickEvent}>
      <img src={imageUrl} alt="event" className="event-image" />
      <p className="festivel-name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
