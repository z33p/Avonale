export const appRoutes = {
  home: "/",
  favRepos: "/fav-repos",
  searchRepos: {
    index: "/search-repos",
    pagination: {
      template: "/search-repos/q=:name&page=:page&per_page=:per_page",
      set: (name: string, page: number, per_page: number) => {
        return `/search-repos/q=${name}&page=${page}&per_page=${per_page}`;
      },
    },
  },
  myRepos: {
    index: "/my-repos",
    pagination: {
      template: "/my-repos?page=:page&per_page=:per_page",
      set: (page: number, per_page: number) => {
        return `/my-repos?page=${page}&per_page=${per_page}`;
      },
    },
    show: {
      template: "/my-repos/:user/:repo",
      set: (user: string, repo: string) => `/my-repos/${user}/${repo}`,
    },
  },
};

export const apiRoutes = {
  index: "/api/favrepo",
  toggle: "/api/favrepo/toggle", // Post Request
  show: (repoId: number) => `/api/favrepo/${repoId}`,
};

export const apiGitHub = {
  searchByName: (repoName: string, page: number, per_page: number) => {
    return `https://api.github.com/search/repositories?q=${repoName}&page=${page}&per_page=${per_page}`;
  },
  userRepos: (user: string, page: number, per_page: number) => {
    return `https://api.github.com/search/repositories?q=user:${user}&page=${page}&per_page=${per_page}`;
  },
  repoByUser: (user: string, repo: string) => {
    return `https://api.github.com/repos/${user}/${repo}`;
  },
  repoContributors: (user: string, repo: string) => {
    return `https://api.github.com/repos/${user}/${repo}/contributors`;
  },
};
