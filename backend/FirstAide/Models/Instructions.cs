using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FirstAide.Models
{
    public class Instructions
    {
        public int InstructionsId { get; set; }
        public int EmergencyId { get; set; }
        public int AgeGroupId { get; set; }
        public List<string>Details { get; set; }
        public List<string>Image { get; set; }
        public string Video { get; set; }
    }
}
