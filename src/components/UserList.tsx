import { Link } from "react-router-dom";
import type { GitHubUser } from "../types";

type UserListProps = {
     users : GitHubUser[];
}


const UserList = ({users} : UserListProps) =>{
  return(
  <div>
    <ul>
      {users.map((user) =>(
        <li key={user.id}>
          <Link to={`/user/${user.login}`} >
            <img src={`${user.avatar_url}&s=60`} alt="" width={30} height={30}/>
            {user.login}
          </Link>
        </li>
         ))}
           
     </ul>
        
  </div>
      )
        

  }





export default UserList
