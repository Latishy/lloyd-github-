import {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'

const RepoDetail = () => {
  const {owner, repo} = useParams()
  const [repoDetails, setRepoDetails] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.github.com/repos/${owner}/${repo}`,
      )
      const data = await response.json()
      setRepoDetails(data)
    }

    fetchData()
  }, [owner, repo])

  return (
    <div>
      <h1>Repo Details</h1>
      {repoDetails ? (
        <div>
          <h2>{repoDetails.full_name}</h2>
          <p>{repoDetails.description}</p>
          <p>Owner: {repoDetails.owner.login}</p>
          <p>Stars: {repoDetails.stargazers_count}</p>
          <p>Forks: {repoDetails.forks_count}</p>
          <p>Issues: {repoDetails.open_issues_count}</p>
          <p>Updated: {repoDetails.updated_at}</p>
          <Link to="/">Back to List</Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default RepoDetail
