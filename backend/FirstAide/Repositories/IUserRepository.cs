﻿using FirstAide.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FirstAide.Repositories
{
    public interface IUserRepository
    {
        List<User> GetAll();
        User Add(User user);
    }
}

