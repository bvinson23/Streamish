﻿using Streamish.Models;
using System.Collections.Generic;

namespace Streamish.Repositories
{
    public interface IUserProfileRepository
    {
        void Add(UserProfile userProfile);
        void Delete(int id);
        List<UserProfile> GetAll();
        UserProfile GetById(int id);
        List<Video> GetVideosByUser(int id);
        void Update(UserProfile userProfile);
        UserProfile GetByFirebaseUserId(string firebaseUserId);
    }
}