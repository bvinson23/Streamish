﻿using Streamish.Models;
using System;
using System.Collections.Generic;

namespace Streamish.Repositories
{
    public interface IVideoRepository
    {
        void Add(Video video);
        void Delete(int id);
        List<Video> GetAll();
        List<Video> GetAllWithComments();
        Video GetById(int id);
        Video GetByIdWithComments(int id);
        void Update(Video video);
        List<Video> Search(string criterion, bool sortDescending);
        List<Video> Search(DateTime criterion);
    }
}