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

// Write your code here
class Capitals extends Component {
  state = {
    capitalId: countryAndCapitalsList[0].id,
  }

  onGetCapital = event => {
    this.setState({capitalId: event.target.value})
  }

  getCountryName = () => {
    const {capitalId} = this.state

    const CountryCapital = countryAndCapitalsList.find(
      each => each.id === capitalId,
    )

    return CountryCapital.country
  }

  render() {
    const {capitalId} = this.state
    const country = this.getCountryName(capitalId)

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="h1">Countries And Capitals</h1>
          <div className="selection">
            <select
              onChange={this.onGetCapital}
              value={capitalId}
              className="sel"
            >
              {countryAndCapitalsList.map(each => (
                <option key={each.id} value={each.id} className="opt">
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="que">is capital of which country?</p>
          </div>
          <p className="country-name">{country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
