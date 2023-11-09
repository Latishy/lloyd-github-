// import React from 'react'
import './index.css'

const RepositoryItem = props => {
  const {repositoryDetails} = props
  const {
    id,
    name,
    imageUrl,
    starsCount,
    forksCount,
    issuesCount,
    description,
    updated,
    owner,
  } = repositoryDetails

  return (
    <li className="repository-item">
      <h1 className="repository-id">{id}</h1>
      <img className="repository-image" src={imageUrl} alt={name} />
      <h1 className="repository-name">{name}</h1>
      <div className="info">
        <div className="stats-container">
          <img
            className="stats-icon"
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            alt="stars"
          />
          <p className="stats-text">
            {starsCount} {description}stars
          </p>
        </div>
        <div>
          <div className="stats-container">
            <img
              className="stats-icon"
              src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
              alt="forks"
            />
            <p className="stats-text">
              {forksCount}
              {owner} forks
            </p>
          </div>
          <div className="stats-container">
            <img
              className="stats-icon"
              src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
              alt="open issues"
            />
            <p className="stats-text">{issuesCount} open issues</p>
            <p className="stats-text">{updated} open issues</p>
          </div>
        </div>
      </div>
    </li>
  )
}

export default RepositoryItem
