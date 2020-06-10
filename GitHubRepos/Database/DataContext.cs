using GitHubRepos.Models;
using Microsoft.EntityFrameworkCore;

namespace GitHubRepos
{
  public class DataContext : DbContext
  {
    public DbSet<FavRepo> FavRepo { get; set; }
    protected override void OnConfiguring(DbContextOptionsBuilder options)
    {
      options.UseSqlite("Data Source=Database/sqlite.db");
    }
  }
}
