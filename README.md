# GitHub User Search

A GitHub user search application that loads a selected user's profile.

**[Live demo](https://github-search-alpha-self.vercel.app)**

## Features

- Search users by username
- Click any result to view their profile — name, bio, location, followers, repo count
- Sort by best match, most followers, most repositories, or newest
- Shareable links — the URL holds the state, so any search, sort, or profile can be shared and survives a refresh
- Keyboard accessible — Enter submits, Tab reaches every control
- Errors handled separately: rate limiting, user not found, and network failures each get their own message
- Link out to the real GitHub profile

## Built with

React · TypeScript · Vite · React Router

## Running locally

```bash
git clone https://github.com/nanaabasimi833-ux/github-search.git
cd github-search
npm install
npm run dev
```

## Notes

Built to learn API calling and using TypeScript with React.

## Next

- Caching — GitHub allows 60 unauthenticated requests per hour, so viewing a profile twice shouldn't refetch it
- Pagination — currently shows the first 30 of up to 1,000 results
- Repository list on the profile page
