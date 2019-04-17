using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FirstAide.Models
{
    public class User
    {
        public int UserId { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }

        //public string  Dob { get; set; }
        //public string Height { get; set; }
        //public string Weight { get; set; }
        //public string BloodPressure { get; set; }
        //public string Allergies { get; set; }
        //public string ChifComplaint { get; set; }
        //public virtual List <Medication> Medication { get; set; }
    }
}
