using FirstAide.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FirstAide.Repositories
{
    public class EmergencyRepository : IEmergencyRepository
    {
        FirstAideContext db;

        public EmergencyRepository(FirstAideContext db)
        {
            this.db = db;
        }

        public List<Emergency> GetAll()
        {
            return db.Emergency.ToList();
        }
    }
}
