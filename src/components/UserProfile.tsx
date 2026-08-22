import type { GitHubUserDetail } from "../types";

type UserProfileProps = {
  user : GitHubUserDetail
}



const UserProfile = ({user} :UserProfileProps) =>{
  return(
    <div>
      <div>
        <img src={`${user.avatar_url}&s=160`} alt='' width={80} height={80}/>
        <h2>{user.name ?? user.login}</h2>
        <span>{user.login}</span>
        <span>{user.followers.toLocaleString()} followers</span>
        <span>{user.following.toLocaleString()} following</span>
        {user.bio && <p>{user.bio}</p>}
        {user.company && <p>{user.company}</p>}
        {user.location && <p>{user.location}</p>}
        <a href={user.html_url} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>
      <div>
        <ul>
          <li>Repositories {user.public_repos.toLocaleString()}</li>
        </ul>
      </div>
    </div>
  )

}

export default UserProfile
