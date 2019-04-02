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
    public class InstructionsControllerTests
    {
        IInstructionsRepository repo;
        InstructionsController underTest;
        public InstructionsControllerTests()
        {
            repo = Substitute.For<IInstructionsRepository>();
            underTest = new InstructionsController(repo);
        }

        [Fact]
        public void Get_Returns_List_Of_Instructions()
        {
            var expected = new List<Instructions>();
            repo.GetAll().Returns(expected);

            var result = underTest.Get();

            Assert.IsType<List<Instructions>>(result.Value);
        }
    }
}
