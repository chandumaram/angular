using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [RoutePrefix("Api/PersonalDetails")]
    public class PersonalDetailsController : ApiController
    {
        detailsEntities objEntity = new detailsEntities();

        [HttpGet]
        [Route("AllDetails")]
        public IQueryable<PersonalDetail> GetDetails()
        {
               return objEntity.PersonalDetails;
            
        }
        [HttpPut]
        [Route("UpdateDetails")]
        public IHttpActionResult PutDetails(PersonalDetail personal)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                PersonalDetail obj = new PersonalDetail();
                obj = objEntity.PersonalDetails.Find(personal.UserId);
                if (obj != null)
                {
                    obj.FirstName = personal.FirstName;
                    obj.LastName = personal.LastName;
                    obj.DOB = personal.DOB;
                    obj.Email = personal.Email;
                    obj.Village = personal.Village;
                    obj.State = personal.State;
                    obj.Country = personal.Country;
                    obj.FbId = personal.FbId;
                    obj.TwitterId = personal.TwitterId;

                }
                int i = this.objEntity.SaveChanges();

            }
            catch (Exception)
            {
                throw;
            }
            return Ok(personal);
        }
    }
}
