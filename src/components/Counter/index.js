import {Component} from 'react'
import RepositoryItem from '../RepositoryItem'

class Counter extends Component {
  state = {
    repositoriesData: [],
  }

  componentDidMount() {
    this.getRepositories()
  }

  getRepositories = async () => {
    const apiUrl = `https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc`
    const response = await fetch(apiUrl)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.items.map(eachRepository => ({
        id: eachRepository.id,
        description: eachRepository.description,
        updated: eachRepository.updated_at,
        imageUrl: eachRepository.owner.avatar_url,
        owner: eachRepository.name,
        name: eachRepository.full_name,
        starsCount: eachRepository.stargazers_count,
        forksCount: eachRepository.forks_count,
        issuesCount: eachRepository.issues_count,
      }))
      this.setState({
        repositoriesData: updatedData,
      })
    }
  }

  renderRepositoriesListView = () => {
    const {repositoriesData} = this.state

    return (
      <ul className="repositories-list">
        {repositoriesData.map(eachRepository => (
          <RepositoryItem
            key={eachRepository.id}
            repositoryDetails={eachRepository}
          />
        ))}
      </ul>
    )
  }

  render() {
    return (
      <div>
        <h1>Most Starred Repositories</h1>
        {this.renderRepositoriesListView()}
      </div>
    )
  }
}

export default Counter
