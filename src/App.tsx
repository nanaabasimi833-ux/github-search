import { useState } from 'react'
import type { GitHubUser, GitHubSearchResponse, GitHubUserDetail} from './types'
import SearchBar from './components/SearchBar'
import UserList from './components/UserList'
import UserProfile from './components/UserProfile'

function App() {
  const [users, setUsers] = useState<GitHubUser[]>([])
  const [selectedUser, setSelectedUser] = useState<GitHubUser | null>(null)
  const [userDetail, setUserDetail] = useState<GitHubUserDetail | null>(null)
  const [isLoading,setIsLoading] = useState(false)
  const [ error,setError] = useState<string|null>(null)
  const handleBack = ()=>{
    setSelectedUser(null)
    setUserDetail(null)
    setError(null)
  }

  const handleSearch  = async(search:string) =>{
    try{
      setError(null)
      setIsLoading(true)
      
      const response = await fetch(`https://api.github.com/search/users?q=${encodeURIComponent(search)}`)
      
      if(!response.ok){
        throw new Error(`Github returned ${response.status}`)
  
      }
      const data:GitHubSearchResponse = await response.json()
      setUsers(data.items)    

      console.log(data)
    }catch(err){
      setError(`${err}`);
      
    }
      setIsLoading(false)
  }
    
 const handleSelect = async(user:GitHubUser) =>{
  try{
    setError(null)
    setSelectedUser(user)
    setUserDetail(null)
    const response = await fetch(`https://api.github.com/users/${encodeURIComponent(user.login)}`)
        
    if(!response.ok){
      throw new Error(`Github returned ${response.status}`)

    }
    const data:GitHubUserDetail = await response.json()

    setUserDetail(data)
    }catch(err){
      setError(`${err}`);
    
    }

  }
return (
    <div>
      <SearchBar onSearch={handleSearch}/>
      {error && <p>{error}</p>}

      {selectedUser ? (
        <div>
          <button onClick={handleBack}>Back</button>
          {userDetail ? <UserProfile user={userDetail} />
            : <p>Loading {selectedUser.login}…</p>}
        </div>
      ) : isLoading ? (
        <p>Loading...</p>
      ) : (
        <UserList users={users} onSelect={handleSelect} />
      )}
    </div>
  )



  
}

export default App
