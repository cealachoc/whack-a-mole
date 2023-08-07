import './Styles/Moles.css'

const Moles = () => {
  const moleCount = 6;

  return (
    <div className='moles-container'>
      {Array.from({ length: moleCount }).map((_, index) => (
        <div key={index} className='mole'></div>
      ))}
    </div>
  )
}

export default Moles;