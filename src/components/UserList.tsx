import type { GitHubUser } from "../types";

type UserListProps = {
     users : GitHubUser[];
     onSelect : (user: GitHubUser) => void
}


const UserList = ({users,onSelect} : UserListProps) =>{
  return(
  <div>
    <ul>
      {users.map((user) =>(
        <li key={user.id} onClick={()=>onSelect(user)}>{user.login}</li>
         ))}
           
     </ul>
        
  </div>
      )
        

  }





export default UserList
