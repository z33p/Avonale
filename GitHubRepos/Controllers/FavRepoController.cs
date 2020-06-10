using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GitHubRepos.Models;
using Microsoft.AspNetCore.Mvc;

namespace GitHubRepos.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class FavRepoController : ControllerBase
  {
    private readonly DataContext _context;

    public FavRepoController(DataContext context)
    {
      _context = context;
    }

    [HttpGet]
    public List<FavRepo> Index()
    {
      return _context.FavRepo.Where(f => f.isToggled).ToList();
    }

    [HttpPost("[action]/{repoId}")]
    public async Task<OkObjectResult> ToggleAsync(int repoId)
    {
      var fav = _context.FavRepo.Where(f => f.RepoId == repoId).FirstOrDefault<FavRepo>();

      if (fav == null)
        await _context.FavRepo.AddAsync(new FavRepo
        {
          RepoId = repoId,
          isToggled = false
        });

      else
      {
        fav.isToggled = !fav.isToggled;
        _context.Update(fav);
      }

      await _context.SaveChangesAsync();

      return Ok(fav);
    }
  }
}
