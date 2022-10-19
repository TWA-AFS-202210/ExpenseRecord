﻿using Microsoft.AspNetCore.Mvc;

using ExpenseRecord.ConsumeRecordDto;
using Service.ConsumeRecordService;
using Nancy.Json;

namespace ExpenseRecord.Controllers
{
    public class ConsumeRecordController : Controller
    {
        private ConsumeRecordService consumeRecordService;

        public async Task<IActionResult> GetAll()
        {
            try
            {
                var resultList = await consumeRecordService.GetAll();
                return new OkObjectResult(resultList);
            }
            catch
            {
                return BadRequest();
            }
            
        }

        public async Task<IActionResult> AddOne(ConsumeRecord OneRecord)
        {
            try
            {
                var id = await consumeRecordService.AddOne(OneRecord);
                return new ObjectResult(new JavaScriptSerializer().Serialize(id));
            }
            catch
            {
                return BadRequest();
            }
        }

        public async Task<IActionResult> DeleteOne([FromRoute] string id)
        {
            try
            {
                await consumeRecordService.DeleteOne(id);
                return NoContent();
            }
            catch
            {
                return BadRequest();
            }
        }
    }
}