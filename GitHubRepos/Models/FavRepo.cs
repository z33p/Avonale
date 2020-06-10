namespace GitHubRepos.Models
{
  public class FavRepo
  {
    public int Id { get; set; }
    public int RepoId { get; set; }
    public bool isToggled { get; set; }
  }
}