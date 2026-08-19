import type { GitHubUser } from "../types";

type UserListProps = {
     users : GitHubUser[];
}


const UserList = ({users} : UserListProps) =>{
  return(
  <div>
    <ul>
      {users.map((user) =>(
        <li key={user.id}>{user.login}</li>
         ))}
           
     </ul>
        
  </div>
      )
        

  }





export default UserList
