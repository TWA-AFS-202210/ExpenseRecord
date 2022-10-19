namespace ExpenseRecord.ConsumeRecordDto
{
    public class ConsumeRecord
    {
        public string? Id { get; set; }

        public string? description { get; set; }

        public string? type { get; set; }

        public float? amount { get; set; }

        public DateTime? date { get; set; }
    }
}