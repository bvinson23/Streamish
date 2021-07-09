import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { addVideo, getAllVideos } from "../modules/videoManager";

const VideoForm = () => {
    const [video, setVideo] = useState({});

    const history = useHistory();

    const handleFieldChange = (evt) => {
        const newVideo = { ...video }
        let selectedVal = evt.target.value
        if (evt.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newVideo[evt.target.id] = selectedVal
        setVideo(newVideo)
    };

    const handleClickSaveVideo = (evt) => {
        evt.preventDefault()

        addVideo(video)
            .then(() => history.push("/"))
    };

    return (
        <form className="videoForm">
            <h2 className="videoForm__title">Add a Video</h2>
            <fieldset>
                <div>
                    <input 
                        type="text"
                        onChange={handleFieldChange}
                        className="form-control"
                        value={video.title} />
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <input 
                        type="text"
                        onChange={handleFieldChange}
                        className="form-control"
                        value={video.description} />
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <input 
                        type="text"
                        onChange={handleFieldChange}
                        className="form-control"
                        value={video.url} />
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <input 
                        type="hidden"
                        onChange={handleFieldChange}
                        className="form-control"
                        value={video.dateCreated} />
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <input 
                        type="hidden"
                        onChange={handleFieldChange}
                        className="form-control"
                        value={video.userProfileId} />
                </div>
            </fieldset>
            <button className="btn-primary"
                    onClick={handleClickSaveVideo}>Save Video</button>
        </form>
    )
}

export default VideoForm;