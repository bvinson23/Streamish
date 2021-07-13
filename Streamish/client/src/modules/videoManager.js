import { getToken } from "./authManager";

const baseUrl = '/api/video';
const userUrl = '/api/userprofile';
// This is a relative url -- it doesn't look anything like https://localhost:5001/api/video.
// This is the benefit of adding the proxy attribute in our package.json file.


// Function that gets all the videos with comments by doing a GET fetch call to the database
export const getAllVideos = () => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}/GetWithComments`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("An unknown error occurred while trying to get videos.");
      }
    });
  });
};

// Function that gets one video by the id
export const getVideo = (id) => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}/GetVideoWithComments/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("An unknown error occurred while trying to get the video.")
      }
    });
  });
};

export const getVideosByUser = (userId) => {
  return getToken().then((token) => {
    return fetch(`${userUrl}/GetVideosByUser/${userId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((res) => res.json());
  });
};

// Function that adds a new video by doing a POST fetch call to the database
export const addVideo = (video) => {
  return getToken().then((token) => {
    return fetch(baseUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(video),
    });
  })
};

// Function that searches through the database of videos
export const searchVideos = (search) => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}/search/?q=${search}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((res) => res.json())
  })
};