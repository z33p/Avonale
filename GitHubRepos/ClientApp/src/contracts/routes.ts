export const appRoutes = {
  home: "/",
  favRepos: "/fav-repos",
  searchRepos: "/search-repos",
  myRepos: {
    index: "/my-repos",
    showTemplate: "/my-repos/:user/:repo",
    show: (user: string, repo: string) => `/my-repos/${user}/${repo}`,
  },
};
