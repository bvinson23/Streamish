const baseUrl = '/api/video';
// This is a relative url -- it doesn't look anything like https://localhost:5001/api/video.
// This is the benefit of adding the proxy attribute in our package.json file.

export const getAllVideos = () => {
  return fetch(baseUrl + "/GetWithComments")
    .then((res) => res.json())
};

export const addVideo = (video) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(video),
  });
};

export const searchVideos = () => {
    return fetch(baseUrl + "/search")
    .then((res) => res.json())
};