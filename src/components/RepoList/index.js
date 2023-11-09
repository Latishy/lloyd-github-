import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const RepoList = () => {
  const [repos, setRepos] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${page}`,
      )
      const data = await response.json()
      setRepos(prevRepos => [...prevRepos, ...data.items])
    }

    fetchData()
  }, [page])

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setPage(prevPage => prevPage + 1)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div>
      <h1>Most Starred GitHub Repos</h1>
      <ul>
        {repos.map(repo => (
          <li key={repo.id}>
            <Link to={`/repo/${repo.owner.login}/${repo.name}`}>
              {repo.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RepoList
