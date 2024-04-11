import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {activeID: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({activeID: event.target.value})
  }

  findCountry = () => {
    const {activeID} = this.state
    const counrty = countryAndCapitalsList.find(each => each.id === activeID)
    return counrty.country
  }

  render() {
    const {activeID} = this.state
    const activedCountry = this.findCountry()
    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="input-container">
            <select
              name="capitals"
              value={activeID}
              onChange={this.onChangeCapital}
              className="select"
            >
              {countryAndCapitalsList.map(each => (
                <option value={each.id} key={each.id} className="option">
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="discription">is capital of which country?</p>
          </div>
          <h1 className="counrty-name">{activedCountry}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
