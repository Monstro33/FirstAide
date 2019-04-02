using FirstAide.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FirstAide.Repositories
{
    public class InstructionsRepository : IInstructionsRepository
    {
        FirstAideContext db;

        public InstructionsRepository(FirstAideContext db)
        {
            this.db = db;
        }

        public List<Instructions> GetAll()
        {
            return db.Instructions.ToList();
        }
    }
}
