using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FirstAide.Models;

namespace FirstAide.Repositories
{
    public class NoteRepository : INoteRepository
    {

        FirstAideContext db;

        public NoteRepository(FirstAideContext db)
        {
            this.db = db;
        }

        public bool Create(Note note)
        {
            db.Notes.Add(note);
            db.SaveChanges();

            return true;
        }

        public List<Note> GetAll()
        {
            return db.Notes.ToList();
        }
                
    }
}
