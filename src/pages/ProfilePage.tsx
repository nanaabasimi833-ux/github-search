import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { GitHubUserDetail } from "../types";
import { messageFor } from "../func/error";
import UserProfile from "../components/UserProfile";

 const ProfilePage = () => {
  const {login} = useParams()
  const [user, setUser] = useState<GitHubUserDetail | null>(null)
  const [ error,setError] = useState<string|null>(null)


  useEffect(()=>{

    if(!login){return}
    const loadUser = async()=>{
      setError(null)

      try{

        const response = await fetch(`https://api.github.com/users/${encodeURIComponent(login)}`)
        
        if(!response.ok){
          throw new Error(messageFor(response.status))
          
          }
        const data :GitHubUserDetail = await response.json()
        setUser(data)

    }catch(err){
      setError(err instanceof Error ? err.message : String(err))

    }
    }
    
    loadUser()


  },[login])

  return ( 
    <div>
      <Link to={'/'}>Back</Link>
      {error && <p>{error}</p>}
      { user && <UserProfile user ={user} />}
    </div>
  )
  }

  export default ProfilePage