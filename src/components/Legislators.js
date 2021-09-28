import React from 'react'
import FindMyLegislators from './FindMyLegislators'
import LegislatorCard from './LegislatorCard'
import withStore from '../services/legislators-store'
import twentyTwentyone from '../assets/pdfs/2021-Maine-AFLCIO-Scorecard.pdf'
import thumbnail from '../assets/images/2021-scorecard-cover.png'


export default withStore(function Legislators(props) {
  const { store } = props

  const yourLegislators = store.get('yourLegislators')
  // const otherLegislators = store.get('otherLegislators')

  // Array of legislator cards
  const yourLegislatorCards = yourLegislators.map((legislator) => {
    return <LegislatorCard legislator={legislator} your={true} key={legislator.ocdId} />
  })
  // const otherLegislatorCards = otherLegislators.map((legislator) => {
  //   return <LegislatorCard legislator={legislator} your={false} key={legislator.ocdId} />
  // })

  return (
    <div className="legislators">
      <div className="container">
        <FindMyLegislators />
        { yourLegislators.length === 0 &&
          <div>
            <h1 className="zero-state-message">
              Enter your address above to find your representatives. <em>Note: this tool only works with residential addresses.</em>
            </h1>
            <h1 className="zero-state-message">
              Click <a href="/all-scores">here</a> to see them all.
            </h1>
            <h1 className="zero-state-message">
              <a href={twentyTwentyone}>Download the 2021 Scorecard [PDF]</a>           
            </h1>
            <a href={twentyTwentyone}>
              <img src={thumbnail} alt="2021 Scorecard Thumbnail" class="homepage-thumb" />
            </a>  
          </div>
        }
      </div>
      <div className="legislator-cards container card-container">
        <div className="row">
          {yourLegislatorCards}
        </div>
      </div>
    </div>
  )
});
