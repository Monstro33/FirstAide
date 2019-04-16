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
     
    public class UserController : ControllerBase
    {
        IUserRepository repo;

        public UserController(IUserRepository repo)
        {
            this.repo = repo;
        }

        [HttpGet]
        public ActionResult<List<User>> Get()
        {
            return repo.GetAll();
        }

        [HttpPost]
        public ActionResult<User> Post([FromBody] User user)
        {
            repo.Add(user);
            return user;
        }
    }
}