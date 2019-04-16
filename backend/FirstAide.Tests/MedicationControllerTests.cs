using FirstAide.Repositories;
using System;
using System.Collections.Generic;
using System.Text;
using FirstAide.Models;
using FirstAide.Controllers;
using NSubstitute;
using Xunit;

namespace FirstAide.Tests
{
    public class MedicationControllerTests
    {
        IMedicationRepository repo;
        MedicationController underTest;
        public MedicationControllerTests()
        {
            repo = Substitute.For<IMedicationRepository>();
            underTest = new MedicationController(repo);
        }

        [Fact]
        public void Get_Returns_List_Of_Medications()
        {
            var expected = new List<Medication>();
            repo.GetAll().Returns(expected);

            var result = underTest.Get();

            Assert.IsType<List<Medication>>(result.Value);
        }

            [Fact]

        public void Post_Creates_New_Medication()
        {
            var medication = new Medication();
            repo.Create(medication).Returns(true);

            var result = underTest.Post(medication);

            Assert.True(result);

        }
    }
}


