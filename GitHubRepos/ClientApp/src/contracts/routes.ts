export const appRoutes = {
  home: "/",
  favRepos: "/fav-repos",
  searchRepos: "/search-repos",
  myRepos: {
    index: "/my-repos",
    show: {
      template: "/my-repos/:user/:repo",
      get: (user: string, repo: string) => `/my-repos/${user}/${repo}`,
    },
  },
};

export const apiRoutes = {
  index: "/api/favrepo",
  toggle: "/api/favrepo/toggle", // Post Request
  show: (repoId: number) => `/api/favrepo/${repoId}`,
};

export const apiGitHub = {
  searchByName: (repoName: string) => {
    return `https://api.github.com/search/repositories?q=${repoName}`;
  },
  userRepos: (user: string) => {
    return `https://api.github.com/users/${user}/repos`;
  },
  repoByUser: (user: string, repo: string) => {
    return `https://api.github.com/repos/${user}/${repo}`;
  },
};
