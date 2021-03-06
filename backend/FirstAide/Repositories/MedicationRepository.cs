﻿using FirstAide.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FirstAide.Repositories
{
    public class MedicationRepository : IMedicationRepository
    {
        FirstAideContext db;

        public MedicationRepository(FirstAideContext db)
        {
            this.db = db;
        }

        public bool Create(Medication medication)
        {
            db.Medications.Add(medication);
            db.SaveChanges();

            return true;
        }

        public List<Medication> GetAll()
        {
            return db.Medications.ToList();
        }
    }
}