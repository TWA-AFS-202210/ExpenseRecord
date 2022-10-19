namespace ExpenseRecord.Models
{
    public class ExpenseItem
    {
        public string Id { get; set; }
        public string Description { get; set; }
        public string Type { get; set; }
        public double Amount { get; set; }
        public string Data { get; set; } 
    }
}
