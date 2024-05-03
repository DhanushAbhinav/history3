import './index.css'
import HistoryItem from '../HistoryItem'
import {Component} from 'react'

class App extends Component {
  state = {
    searchInput: '',
    details: initialHistoryList,
  }
  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }
  deleteItem = id => {
    const {details} = this.state
    const filteresData = details.filter(each => each.id !== id)
    this.setState({
      details: filteresData,
    })
  }
  render() {
    const {searchInput, details} = this.state
    const searchResults = details.filter(each =>
      each.title.includes(searchInput),
    )
    return (
      <div>
        <div className="title-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="edit"
          />
          <button className="logo" type="button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
            />
          </button>
          <input type="search" placeholder="search history" className="input" />
        </div>
        <ul className="list">
          {searchResults.map(each => (
            <History
              details={each}
              key={each.id}
              deleteItem={this.deleteItem}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default History
