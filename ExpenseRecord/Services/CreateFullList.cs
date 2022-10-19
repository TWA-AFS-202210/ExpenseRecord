using ExpenseRecord.Models;

namespace ExpenseRecord.Services
{
    public class CreateFullList : ICreateFullList
    {
        public List<ExpenseItem> FullList = new List<ExpenseItem>();
    }
}
