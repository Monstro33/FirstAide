using FirstAide.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FirstAide.Repositories
{
    public interface INoteRepository
    {
        bool Create(Note note);
        List<Note> GetAll();
    }
}
