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

    public class MedicationController : ControllerBase
    {
        IMedicationRepository repo;

        public MedicationController(IMedicationRepository repo)
        {
            this.repo = repo;
        }

        [HttpGet]
        public ActionResult<List<Medication>> Get()
        {
            return repo.GetAll();
        }

        [HttpPost]
        public bool Post([FromBody] Medication medication)
        {
            repo.Create(medication);

            return true;
        }




    }
}