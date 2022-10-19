using ExpenseRecord.ConsumeRecordDto;

namespace Service.ConsumeRecordService
{
    public class ConsumeRecordService: IConsumeRecordService
    {
        private List<ConsumeRecord> consumeRecordList;

        public async Task<string> AddOne(ConsumeRecord oneRecord)
        {
            oneRecord.Id = Guid.NewGuid().ToString();   
            oneRecord.date = DateTime.Now;
            consumeRecordList.Add(oneRecord);
            return oneRecord.Id;
        }

        public async Task<List<ConsumeRecord>> GetAll()
        {
            return consumeRecordList;
        }

        public async Task DeleteOne(string id)
        {
            int length = consumeRecordList.ToArray().Length;
            for(int i=0;i<length;i++)
            {
                if (String.Equals(consumeRecordList[i].Id,id))
                {
                    consumeRecordList.RemoveAt(i);
                    break;
                }
            }
        }

    }
}