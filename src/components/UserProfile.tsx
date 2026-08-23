import type { GitHubUserDetail } from "../types";

type UserProfileProps = {
  user : GitHubUserDetail
}



const UserProfile = ({user} :UserProfileProps) =>{
  return(
    <div className="profile">
      <div className="profile-header">
        <img src={`${user.avatar_url}&s=160`} alt='' width={80} height={80}/>
        <h2>{user.name ?? user.login}</h2>
        <span className="profile-login">{user.login}</span>
      </div>

      <div className="profile-stats">
        <span><strong>{user.followers.toLocaleString()}</strong> followers</span>
        <span><strong>{user.following.toLocaleString()}</strong> following</span>
        <span><strong>{user.public_repos.toLocaleString()}</strong> repositories</span>
      </div>

      <div className="profile-meta">
        {user.bio && <p>{user.bio}</p>}
        {user.company && <p>{user.company}</p>}
        {user.location && <p>{user.location}</p>}
      </div>

      <a className="github-link" href={user.html_url} target="_blank" rel="noopener noreferrer"
      >
        View on GitHub
      </a>
    </div>
  )

}

export default UserProfile
