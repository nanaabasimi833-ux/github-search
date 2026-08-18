import { useState } from 'react'
  import type { GitHubUser, GitHubSearchResponse } from './types'
import SearchBar from './components/SearchBar'


function App() {
  const [users, setUsers] = useState<GitHubUser[]>([])
  const [selectedUser, setSelectedUser] = useState<GitHubUser | null>(null)
  const [isLoading,setIsLoading] = useState(false)
  const [ error,setError] = useState<string|null>(null)

  const handleSearch  = async(search:string) =>{
    try{
      const response = await fetch(`https://api.github.com/search/users?q=${search}`)
    
      if(!response.ok){
        console.log('Error has occured likely Network Error')
        return null
      }
      const data:GitHubSearchResponse = await response.json()
      console.log(data)
    }catch(error){
      console.error(`Error fetching data: ${error}`);
      
      }
      
  }

  return (
    <div>
      <SearchBar onSearch={handleSearch}/> 
    </div>
  )
}

export default App
