import './index.css'

const EventItem = props => {
  const {eachEventDetails} = props
  const {
    imageUrl,
    location,
    name,
    onClickEvents,
    registrationStatus,
  } = eachEventDetails

  const onClickEvent = () => {
    onClickEvents(registrationStatus)
  }

  return (
    <li>
      <button className="button" type="button" onClick={onClickEvent}>
        <img src={imageUrl} alt={name} className="event-image" />
        <h1 className="festivel-name">{name}</h1>
        <p className="location">{location}</p>
      </button>
    </li>
  )
}

export default EventItem
