import React from 'react'
import lerpColor from '../lib/lerpColor'

export default function ScoreBar(props) {
  var { score } = props

  const goodBarStyle = {
    flexBasis: `${score}%`,
  }
  const extremeClass = score === 0 || score === 100 ? 'extreme' : ''

  var scoreColor = lerpColor('#FF5734', '#00B142', score / 100)


  if(score === 'E'){
    scoreColor = '#cccccc'
    goodBarStyle.background = scoreColor;
    goodBarStyle.flexBasis = '100%';
  }
  

  return (
    <div className={`score-bar ${extremeClass}`} >
      <div className="bar">
        <div className="good"
          style={goodBarStyle}
          />
        <div className="bad" />
      </div>
      <div className="number" style={{
          color: scoreColor,
          borderColor: scoreColor,
        }}>
        {score}
      </div>
    </div>
  )
}
