using FirstAide.Repositories;
using System;
using Xunit;
using NSubstitute;
using FirstAide.Controllers;
using FirstAide.Models;
using System.Collections.Generic;

namespace FirstAide.Tests
{
    public class EmergencyControllerTests
    {
        IEmergencyRepository repo;
        EmergencyController underTest;
        public EmergencyControllerTests()
        {
            repo = Substitute.For<IEmergencyRepository>();
            underTest = new EmergencyController(repo);
        }

        [Fact]
        public void Get_Returns_List_Of_Emergency()
        {
            var expected = new List<Emergency>();
            repo.GetAll().Returns(expected);

            var result = underTest.Get();

            Assert.IsType<List<Emergency>>(result.Value);
        }
    }
}
