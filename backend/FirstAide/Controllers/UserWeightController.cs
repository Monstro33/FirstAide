using FirstAide.Models;
using FirstAide.Repositories;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FirstAide.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class UserWeightController : ControllerBase
    {
        IUserWeightRepository repo;

        public UserWeightController(IUserWeightRepository repo)
        {
            this.repo = repo;
        }

        [HttpGet]
        public ActionResult<List<UserWeight>> Get()
        {
            return repo.GetAll();
        }

        [HttpPost]
        public ActionResult<UserWeight> Post([FromBody] UserWeight userWeight)
        {
            repo.Add(userWeight);
            return userWeight;
        }
    }
}
