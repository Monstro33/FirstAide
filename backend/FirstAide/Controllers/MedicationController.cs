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
            public ActionResult<IEnumerable<Medication>> Get()
            {
                return repo.GetAll().ToArray();
            }

            [HttpPost]
            public void Post([FromBody] Medication medication)
            {
                repo.Create(medication);
            }

        


    }
    }