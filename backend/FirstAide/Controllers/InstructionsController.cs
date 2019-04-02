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

    public class InstructionsController : ControllerBase
    {
        IInstructionsRepository repo;
        public InstructionsController(IInstructionsRepository repo)
        {
            this.repo = repo;
        }

        [HttpGet]
        public ActionResult<List<Instructions>> Get()
        {
            return repo.GetAll();
        }
    }
}
