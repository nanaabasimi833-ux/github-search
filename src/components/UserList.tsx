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
        <li key={user.id}>
          <button type="button" onClick={()=>onSelect(user)}>
            <img src={`${user.avatar_url}&s=60`} alt="" width={30} height={30}/>
            {user.login}
          </button>
        </li>
         ))}
           
     </ul>
        
  </div>
      )
        

  }





export default UserList
