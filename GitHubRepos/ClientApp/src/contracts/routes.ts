export const appRoutes = {
  home: "/",
  myRepos: {
    index: "/my-repos",
    showTemplate: "/my-repos/:user/:repo",
    show: (user: string, repo: string) => `/my-repos/${user}/${repo}`,
  },
  favRepos: "/fav-repos",
};
