using Microsoft.AspNetCore.Mvc;
using Streamish.Controllers;
using Streamish.Models;
using Streamish.Tests.Mocks;
using System;
using System.Collections.Generic;
using System.Linq;
using Xunit;

namespace Streamish.Tests
{
    public class UserProfileControllerTests
    {
        [Fact]
        public void Get_Returns_All_UserProfiles()
        {
            // Arrange
            var userProfileCount = 5;
            var userProfiles = CreateTestUserProfiles(userProfileCount);

            var repo = new InMemoryUserProfileRepository(userProfiles);
            var controller = new UserProfileController(repo);

            // Act
            var result = controller.Get();

            // Assert
            var okResult = Assert.IsType<OkObjectResult>(result);
            var actualUserProfiles = Assert.IsType<List<UserProfile>>(okResult.Value);

            Assert.Equal(userProfileCount, actualUserProfiles.Count);
            Assert.Equal(userProfiles, actualUserProfiles);
        }

        [Fact]
        public void Get_By_Id_Returns_NotFound_When_Given_Unknown_id()
        {
            // Arrange
            var userProfiles = new List<UserProfile>(); // no userProfiles

            var repo = new InMemoryUserProfileRepository(userProfiles);
            var controller = new UserProfileController(repo);

            // Act
            var result = controller.Get(1);

            // Assert
            Assert.IsType<NotFoundResult>(result);
        }

        [Fact]
        public void Get_By_Id_Returns_UserProfile_With_Given_Id()
        {
            // Arrange
            var testUserProfileId = 99;
            var userProfiles = CreateTestUserProfiles(5);
            userProfiles[0].Id = testUserProfileId; // Make sure we know the Id of one of the videos

            var repo = new InMemoryUserProfileRepository(userProfiles);
            var controller = new UserProfileController(repo);

            // Act
            var result = controller.Get(testUserProfileId);

            // Assert
            var okResult = Assert.IsType<OkObjectResult>(result);
            var actualUserProfile = Assert.IsType<UserProfile>(okResult.Value);

            Assert.Equal(testUserProfileId, actualUserProfile.Id);
        }

        [Fact]
        public void Post_Method_Adds_A_New_UserProfile()
        {
            // Arrange
            var userProfileCount = 5;
            var userProfiles = CreateTestUserProfiles(userProfileCount);

            var repo = new InMemoryUserProfileRepository(userProfiles);
            var controller = new UserProfileController(repo);

            // Act
            var newUserProfile = new UserProfile()
            {
                Name = "Name",
                Email = "Email",
                ImageUrl = "ImageUrl",
                DateCreated = DateTime.Today,
            };

            controller.Post(newUserProfile);

            // Assert
            Assert.Equal(userProfileCount + 1, repo.InternalData.Count);
        }

        private List<UserProfile> CreateTestUserProfiles(int count)
        {
            var userProfiles = new List<UserProfile>();
            for (var i = 1; i <= count; i++)
            {
                userProfiles.Add(new UserProfile()
                {
                    Id = i,
                    Name = $"Name {i}",
                    Email = $"Email {i}",
                    ImageUrl = $"ImageUrl {i}",
                    DateCreated = DateTime.Today.AddDays(-i),
                });
            }
            return userProfiles;
        }
    }
}
