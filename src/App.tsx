import { useEffect, useState } from 'react'
import type { GitHubUser, GitHubSearchResponse, } from './types'
import SearchBar from './components/SearchBar'
import UserList from './components/UserList'
import { Routes, Route, useSearchParams } from 'react-router-dom'
import ProfilePage from './pages/ProfilePage'
import { messageFor } from './func/error'
import Sort from './components/Sort'
import './App.css'

function App() {
  const [users, setUsers] = useState<GitHubUser[]>([])
  const [isLoading,setIsLoading] = useState(false)
  const [ error,setError] = useState<string|null>(null)
  const [searchParams,setSearchParams] = useSearchParams()

  const currentQuery = searchParams.get('q')

  const currentSort = searchParams.get('sort') ?? ''

  const handleSearch = (search:string) =>{
    // a new search keeps the sort preference, drops everything else
    setSearchParams(currentSort ? {q:search, sort:currentSort} : {q:search})
  }

  const handleSortChange = (sort:string) =>{
    // carry the query forward — setSearchParams replaces the whole query string
    setSearchParams(sort ? {q:currentQuery ?? '', sort} : {q:currentQuery ?? ''})
  }

  useEffect(()=>{
    if(!currentQuery){return}

    const loadUsers = async()=>{
      setError(null)
      setIsLoading(true)
      try{
        const response = await fetch(`https://api.github.com/search/users?q=${encodeURIComponent(currentQuery)}${currentSort?`&sort=${currentSort}` : ''}`)

        if(!response.ok){
          throw new Error(messageFor(response.status))
        }
        const data:GitHubSearchResponse = await response.json()
        setUsers(data.items)

      }catch(err){
        setError(err instanceof Error ? err.message : String(err))
      }
      setIsLoading(false)
    }

    loadUsers()
  },[currentQuery,currentSort])

  return (
    <div>
      <SearchBar onSearch={handleSearch}/>
      <Routes>
        <Route path='/' element={
          <>
            {error && <p className="error">{error}</p>}
            {users.length > 0 && (
              <div className="sort-row">
                <label htmlFor="sort">Sort by</label>
                <Sort value={currentSort} onChange={handleSortChange} />
              </div>
            )}
            {isLoading ? <p className="loading">Searching…</p> : <UserList users={users} />}
          </>
        }/>
        <Route path='/user/:login' element={<ProfilePage />} />
      </Routes>
    </div>
  )
}

export default App
