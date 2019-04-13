using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FirstAide.Models
{
    public class Medication
    {
        public int UserId { get; set; }
        public int MedicationId { get; set; }
        public string MedicationName { get; set; }       
        public string Concentration { get; set; }
        public string Dosage { get; set; }
        public string Purpose { get; set; }
        public string Notes { get; set; }

    }
}
