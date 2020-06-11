using System;
using System.ComponentModel.DataAnnotations;

namespace GitHubRepos.Models
{
  public class FavRepo
  {
    [Key]
    public int RepoId { get; set; }
    public String Name { get; set; }
    public String User { get; set; }
  }
}