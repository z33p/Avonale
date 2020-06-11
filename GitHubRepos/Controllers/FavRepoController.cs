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
      return _context.FavRepo.ToList();
    }

    [HttpGet("{repoId}")]
    public async Task<ActionResult> ShowAsync(int repoId)
    {
      var favRepo = await _context.FavRepo.FindAsync(repoId);

      if (favRepo != null) return Ok(favRepo);

      return NotFound();
    }

    [HttpPost("[action]")]
    public async Task<ActionResult> ToggleAsync([FromBody] FavRepo favRepo)
    {
      var fav = await _context.FavRepo.FindAsync(favRepo.RepoId);

      if (fav != null)
      {
        _context.FavRepo.Remove(fav);

        await _context.SaveChangesAsync();
        return NoContent();
      }

      await _context.FavRepo.AddAsync(favRepo);

      await _context.SaveChangesAsync();
      return Ok(favRepo);
    }
  }
}
