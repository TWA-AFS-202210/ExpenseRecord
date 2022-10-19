using ExpenseRecord.Models;

namespace ExpenseRecord.Services
{
    public interface IExpenseRecordService
    {
        Task<string> CreateAsync(ExpenseItem expenseItem);
    }
}
