using FirstAide.Controllers;
using FirstAide.Models;
using FirstAide.Repositories;
using NSubstitute;
using System;
using System.Collections.Generic;
using System.Text;
using Xunit;

namespace FirstAide.Tests
{
    public class UserControllerTests
    {
        IUserRepository repo;
        UserController underTest;
        public UserControllerTests()
        {
            repo = Substitute.For<IUserRepository>();
            underTest = new UserController(repo);
        }

        [Fact]
        public void Get_Returns_List_Of_Users()
        {
            var expected = new List<User>();
            repo.GetAll().Returns(expected);

            var result = underTest.Get();

            Assert.IsType<List<User>>(result.Value);
        }

    }
}


