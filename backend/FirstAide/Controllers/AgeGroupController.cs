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

    public class AgeGroupController : ControllerBase
   
    {
        IAgeGroupRepository repo;
        public AgeGroupController(IAgeGroupRepository repo)
        {
            this.repo = repo;
        }

        [HttpGet]
        public ActionResult<List<AgeGroup>> Get()
        {
            return repo.GetAll();
        }
    }
}