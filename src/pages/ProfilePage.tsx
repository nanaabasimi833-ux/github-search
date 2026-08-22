import { useParams } from "react-router-dom";


 const ProfilePage = () => {
  const {login} = useParams()
  return ( 
    <div>{login}</div>
  )
  }

  export default ProfilePage