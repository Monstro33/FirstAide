using FirstAide.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FirstAide.Repositories
{
    public class AgeGroupRepository : IAgeGroupRepository 
    {
        FirstAideContext db;

        public AgeGroupRepository(FirstAideContext db)
        {
            this.db = db;
        }

        public List<AgeGroup> GetAll()
        {
            return db.AgeGroups.ToList();
        }
    }
}
