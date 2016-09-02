using Microsoft.AspNetCore.Mvc;

[RouteAttribute("api/test")]
public class TestController : Controller
{
    public IActionResult Get()
    {
        return Json(new {Test = "GET", Success="true"});
    }
}