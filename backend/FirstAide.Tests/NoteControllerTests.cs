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
    public class NoteControllerTests
    {
        INoteRepository repo;
        NoteController underTest;

        public NoteControllerTests()
        {
            repo = Substitute.For<INoteRepository>();
            underTest = new NoteController(repo);
        }

        [Fact]
        public void Get_Returns_List_Of_Notes()
        {
            var expected = new List<Note>();
            repo.GetAll().Returns(expected);

            var result = underTest.Get();

            Assert.IsType<List<Note>>(result.Value);
        }

        [Fact]

        public void Post_Creates_New_Note()
        {
            var note = new Note();
            repo.Create(note).Returns(true);

            var result = underTest.Post(note);

            Assert.True(result);

        }
    }
}
