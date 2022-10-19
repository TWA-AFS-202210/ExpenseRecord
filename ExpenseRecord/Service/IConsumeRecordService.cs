using ExpenseRecord.ConsumeRecordDto;

namespace Service.ConsumeRecordService
{
    public interface IConsumeRecordService
    {
        Task<string> AddOne(ConsumeRecord toDoItemDto);
        Task DeleteOne(string id);
        Task<ConsumeRecord[]> GetAll();
    }
}
