using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FirstAide.Models
{
    public class Note
    {
        public int UserId { get; set; }
        public int NoteId { get; set; }
        public string NoteInput { get; set; }
    }
}
