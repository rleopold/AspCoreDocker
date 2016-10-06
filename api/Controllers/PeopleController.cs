using System.Threading.Tasks;
using Api.Core.Repositories;
using Api.Core.Graph;
using Microsoft.AspNetCore.Mvc;

public class PeopleController : Controller
{
    private IPeople _people;
    public PeopleController(IPeople people)
    {
        _people = people;
    }
    [HttpGet("api/people")]
    public IActionResult GetAll()
    {
        return Json(_people.All());
    }

    [HttpGet("api/person/{id}", Name = "GetPerson")]
    public IActionResult Get(int id)
    {
        var p = _people.GetById(id);
        if (p == null)
            return NoContent();
        else return Json(p);
    }

    [HttpGet("api/person/getrandom")]
    public async Task<IActionResult> GetRandom()
    {
        var p = await Api.Core.Util.RandomPerson.Get();
        return Json(p);
    }

    [HttpPostAttribute("api/person")]
    public IActionResult AddPerson([FromBody]Result p)
    {
        if (p == null)
            return BadRequest();
        _people.Add(p);
        return Created("GetPerson", p);
    }

}