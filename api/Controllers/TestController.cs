using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

[RouteAttribute("api/[controller]")]
public class TestController : Controller
{
    [HttpGet]
    public IActionResult Get()
    {
        return Json(new {Test = "GET", Success="true"});
    }

    [HttpGetAttribute("{id}")]
    public IActionResult Get(int id)
    {
        return Json(new {Test="GET_BY_ID", Success="true"});
    }


}