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
    public class EmergencyController : ControllerBase
    {
        IEmergencyRepository repo;
        public EmergencyController(IEmergencyRepository repo)
        {
            this.repo = repo;
        }

        [HttpGet]
        public ActionResult<List<Emergency>> Get()
        {
            return repo.GetAll();
        }
    }
}
