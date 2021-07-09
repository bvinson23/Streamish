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

        const title = video.title
        const description = video.description
        const url = video.url
        const dateCreated = video.dateCreated
        const userProfileId = video.userProfileId

        addVideo(video)
            .then(() => history.push("/"))
    };

    return (
        <form className="videoForm">
            <h2 className="videoForm__title">Add a Video</h2>
            <fieldset>
                
            </fieldset>
        </form>
    )
}