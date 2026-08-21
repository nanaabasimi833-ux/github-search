import type { GitHubUserDetail } from "../types";

type UserProfileProps = {
  user : GitHubUserDetail
}



const UserProfile = ({user} :UserProfileProps) =>{
  return(
    <div>
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      <p>{user.followers}</p>
      <p>{user.public_repos}</p>
    </div>
  )

}

export default UserProfile
