using ExpenseRecord.Models;

namespace ExpenseRecord.Services
{
    public class ExpenseRecordService : IExpenseRecordService
    {
        public async Task<string> CreateAsync(ExpenseItem expenseItem)
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
            return id;
        }
    }
}
