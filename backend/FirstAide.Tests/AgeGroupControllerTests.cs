using FirstAide.Controllers;
using FirstAide.Models;
using System;
using System.Collections.Generic;
using System.Text;
using Xunit;
using NSubstitute;
using FirstAide.Repositories;

namespace FirstAide.Tests
{
    public class AgeGroupControllerTests
    {
        IAgeGroupRepository repo;
        AgeGroupController underTest;
        public AgeGroupControllerTests()
        {
            repo = Substitute.For<IAgeGroupRepository>();
            underTest = new AgeGroupController(repo);
        }

        [Fact]
        public void Get_Returns_List_Of_Age_Groups()
        {
            var expected = new List<AgeGroup>();
            repo.GetAll().Returns(expected);

            var result = underTest.Get();

            Assert.IsType<List<AgeGroup>>(result.Value);
        }
    }
}
