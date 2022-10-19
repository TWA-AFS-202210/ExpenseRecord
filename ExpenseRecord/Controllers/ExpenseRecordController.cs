using Microsoft.AspNetCore.Mvc;
using ExpenseRecord.Models;
using System;
using ExpenseRecord.Services;

namespace ExpenseRecord.Controllers
{
    public class ExpenseRecordController : Controller
    {
        private readonly CreateFullList _createFullList;
        public ExpenseRecordController(CreateFullList createFullList)
        {
            _createFullList = createFullList;
        }
        [Route("api/ExpenseRecord")]
        [HttpPost]
        public List<ExpenseItem> CreateItemAsync(ExpenseItem expenseItem)
        {
            var id = Guid.NewGuid().ToString();

            var expenseGetItem = new ExpenseItem
            {
                Id = id,
                Description = expenseItem.Description,
                Type = expenseItem.Type,
                Amount = expenseItem.Amount,
                Data = expenseItem.Data,
            };
            _createFullList.FullList.Add(expenseGetItem);
            return _createFullList.FullList;
        }

        [Route("api/expenseRecord")]
        [HttpGet]
        public List<ExpenseItem> DeleteItemAsync(string id)
        {
            var index = _createFullList.FullList.FirstOrDefault(x => x.Id == id);
            _createFullList.FullList.Remove(index);
            return _createFullList.FullList;
        }

        [Route("api/expenseRecord")]
        [HttpGet]
        public List<ExpenseItem> GetAllItems()
        {
            return _createFullList.FullList;
        }
    }
}