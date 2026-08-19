import { useState } from 'react'
import type { GitHubUser, GitHubSearchResponse } from './types'
import SearchBar from './components/SearchBar'
import UserList from './components/UserList'


function App() {
  const [users, setUsers] = useState<GitHubUser[]>([])
  const [selectedUser, setSelectedUser] = useState<GitHubUser | null>(null)
  const [isLoading,setIsLoading] = useState(false)
  const [ error,setError] = useState<string|null>(null)

  const handleSearch  = async(search:string) =>{
    try{
      const response = await fetch(`https://api.github.com/search/users?q=${search}`)
      
      if(!response.ok){
       throw new Error(`Github returned ${response.status}`)
  
      }
      const data:GitHubSearchResponse = await response.json()
      setUsers(data.items)    

      console.log(data)
    }catch(err){
      setError(`${err}`);
      
      }
      
  }
    
  return (
    <div>
      <SearchBar onSearch={handleSearch}/> 
      <UserList users = {users}/>
    </div>
  )


  
}

export default App
