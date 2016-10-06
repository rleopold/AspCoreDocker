using System.Threading.Tasks;
using Api.Core.Graph;
using Microsoft.AspNetCore.Mvc;


public class TestController : Controller
{
    [HttpGet("api/people")]
    public IActionResult GetAll()
    {
        return Json(new {Test = "GET", Success="true"});
    }

    [HttpGet("api/person/{id}")]
    public IActionResult Get(int id)
    {
        return Json(new {Test="GET_BY_ID", Success="true"});
    }

    [HttpGet("api/person/getrandom")]
    public async Task<IActionResult> GetRandom()
    {
        var p = await Api.Core.Util.RandomPerson.Get();
        return Json(p);
    }

}