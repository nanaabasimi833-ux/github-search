import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { GitHubUserDetail } from "../types";

 const ProfilePage = () => {
  const {login} = useParams()
  const [user, setUser] = useState<GitHubUserDetail | null>(null)

  useEffect(()=>{
    if(!login){return}
    
    const loadUser = async()=>{
      try{

        const response = await fetch(`https://api.github.com/users/${encodeURIComponent(login)}`)

        const data = await response.json()
        setUser(data)
    }catch{
      console.error();
      /*  
      Add error handling  
      
      */
      
    }
    }
    
    loadUser()


  },[login])

  return ( 
    <div>
       <p> {user?.login} </p>
    </div>
  )
  }

  export default ProfilePage