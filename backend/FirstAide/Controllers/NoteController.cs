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

        public class NoteController : ControllerBase
        {
            INoteRepository repo;

            public NoteController(INoteRepository repo)
            {
                this.repo = repo;
            }

            [HttpGet]
            public ActionResult<List<Note>> Get()
            {
                return repo.GetAll();
            }

            [HttpPost]
            public bool Post([FromBody] Note note)
            {
                repo.Create(note);

                return true;
            }

        }
    }

