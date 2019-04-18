using FirstAide.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FirstAide.Repositories
{
    public class UserWeightRepository : IUserWeightRepository
    {
        FirstAideContext db;

        public UserWeightRepository(FirstAideContext db)
        {
            this.db = db;
        }

        public List<UserWeight> GetAll()
        {
            return db.UserWeights.ToList();
        }

        public UserWeight Add(UserWeight userWeight)
        {
            db.UserWeights.Add(userWeight);
            db.SaveChanges();

            return userWeight;
        }
    }
}
