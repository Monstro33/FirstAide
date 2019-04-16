using FirstAide.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FirstAide.Repositories
{
    public class UserRepository : IUserRepository
    {
        FirstAideContext db;

        public UserRepository(FirstAideContext db)
        {
            this.db = db;
        }

        public List<User> GetAll()
        {
            return db.Users.ToList();
        }

        public User Add(User user)
        {
            db.Users.Add(user);
            db.SaveChanges();

            return user;
        }
    }
}

