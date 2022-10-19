using Microsoft.AspNetCore.Mvc;

namespace ExpenseRecord.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ExpenseRecordController : ControllerBase
    {
        [HttpGet]
        public string greet()
        {
            return "Hello World";
        }
    }
}