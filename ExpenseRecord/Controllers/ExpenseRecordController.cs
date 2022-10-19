using ExpenseRecord.Services;
using Microsoft.AspNetCore.Mvc;
using ExpenseRecord.Models;
using System;

namespace ExpenseRecord.Controllers
{
    public class ExpenseRecordController : Controller
    {
        private readonly IExpenseRecordService _expenseRecordService;

        public ExpenseRecordController(IExpenseRecordService expenseRecordService)
        {
            _expenseRecordService = expenseRecordService;
        }
        [Route("api/ExpenseRecord")]
        [HttpPost]
        public async Task<IActionResult> CreateItemAsync(ExpenseItem expenseItem)
        {
            try
            {
                var id = await _expenseRecordService.CreateAsync(expenseItem);
                var idString = new IdString();
                idString.Id = id;
                return Ok(idString);
            }
            catch (ExpenseRecordException ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}