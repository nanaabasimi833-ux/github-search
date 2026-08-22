import { useState } from 'react'
import type { GitHubUser, GitHubSearchResponse, GitHubUserDetail} from './types'
import SearchBar from './components/SearchBar'
import UserList from './components/UserList'
import UserProfile from './components/UserProfile'
import { Routes, Route } from 'react-router-dom'
import ProfilePage from './pages/ProfilePage'

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
  const messageFor = (status:number):string =>{
    if (status === 422){
      return 'Enter a username'
    }else if (status === 403) {
      return 'Too many searches. Wait a minute, then try again.'
    }else if (status === 404){ 
      return 'No user found'
  }else{
    return 'Something went wrong. Try again.'
  }
  }

  
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
    
 const handleSelect = async(user:GitHubUser) =>{
  try{
    setError(null)
    setSelectedUser(user)
    setUserDetail(null)
    const response = await fetch(`https://api.github.com/users/${encodeURIComponent(user.login)}`)
        
    if(!response.ok){
      throw new Error(messageFor(response.status))

    }
    const data:GitHubUserDetail = await response.json()

    setUserDetail(data)
    }catch(err){
      setError(err instanceof Error ? err.message : String(err))
    
    }

  }
return (
    <div>
      <SearchBar onSearch={handleSearch}/>
      <Routes>
        <Route path='/' element = {
        <>
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
        </>
        }/>
        <Route path='/user/:login' element={<ProfilePage />} />

      </Routes>
    </div>
  )



  
}

export default App
