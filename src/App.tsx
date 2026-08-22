import { useState } from 'react'
import type { GitHubUser, GitHubSearchResponse } from './types'
import SearchBar from './components/SearchBar'
import UserList from './components/UserList'
import { Routes, Route } from 'react-router-dom'
import ProfilePage from './pages/ProfilePage'
import { messageFor } from './components/error'

function App() {
  const [users, setUsers] = useState<GitHubUser[]>([])
  const [isLoading,setIsLoading] = useState(false)
  const [ error,setError] = useState<string|null>(null)

  const handleSearch  = async(search:string) =>{
    try{
      setError(null)
      setIsLoading(true)

      const response = await fetch(`https://api.github.com/search/users?q=${encodeURIComponent(search)}`)

      if(!response.ok){
        throw new Error(messageFor(response.status))

      }
      const data:GitHubSearchResponse = await response.json()
      setUsers(data.items)

      console.log(data)
    }catch(err){
      setError(err instanceof Error ? err.message : String(err))

    }
      setIsLoading(false)
  }

  return (
    <div>
      <SearchBar onSearch={handleSearch}/>
      <Routes>
        <Route path='/' element={
          <>
            {error && <p>{error}</p>}
            {isLoading ? <p>Loading...</p> : <UserList users={users} />}
          </>
        }/>
        <Route path='/user/:login' element={<ProfilePage />} />
      </Routes>
    </div>
  )
}

export default App
