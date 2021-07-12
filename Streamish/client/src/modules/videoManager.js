const baseUrl = '/api/video';
const userUrl = '/api/userprofile';
// This is a relative url -- it doesn't look anything like https://localhost:5001/api/video.
// This is the benefit of adding the proxy attribute in our package.json file.


// Function that gets all the videos with comments by doing a GET fetch call to the database
export const getAllVideos = () => {
  return fetch(baseUrl + "/GetWithComments")
    .then((res) => res.json())
};

// Function that gets one video by the id
export const getVideo = (id) => {
  return fetch(`${baseUrl}/GetVideoWithComments/${id}`).then((res) => res.json());
}

export const getVideosByUser = (userId) => {
  return fetch(`${userUrl}/GetVideosByUser/${userId}`).then((res) => res.json());
}

// Function that adds a new video by doing a POST fetch call to the database
export const addVideo = (video) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(video),
  });
};

// Function that searches through the database of videos
export const searchVideos = (search) => {
    return fetch(`${baseUrl}/search/?q=${search}`)
    .then((res) => res.json())
};