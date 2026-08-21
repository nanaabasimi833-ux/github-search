export interface  GitHubUser {
    login: string
    id: number
    avatar_url:string
    html_url: string
    repos_url: string
    type:string
}

export interface GitHubSearchResponse {
    total_count:number
    incomplete_results: boolean
    items: GitHubUser[]
}

export interface GitHubUserDetail extends GitHubUser {
  name: string | null
  bio: string | null
  followers: number
  public_repos: number
}
