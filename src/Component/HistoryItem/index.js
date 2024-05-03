import './index.css'

const History = props => {
  const {details, deleteItem} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = details
  const deleteItemHandler = id => {
    deleteItem(id)
  }
  return (
    <li className='bg-container'>
      <p className='para'>{timeAccessed}</p>
      <img className='edit' src={logoUrl} alt='domain logo' />
      <h1 className='heading'>{title}</h1>
      <p className='para-1'>{domainUrl}</p>
      <button
        data-testid='delete'
        onClick={deleteItemHandler}
        className='button'
      >
        <img
          src='https://assets.ccbp.in/frontend/react-js/delete-img.png'
          alt='delete'
        />
      </button>
    </li>
  )
}

export default HistoryItem
