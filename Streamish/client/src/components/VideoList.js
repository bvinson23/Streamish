import React, { useEffect, useState } from "react";
import Video from './Video';
import { getAllVideos, searchVideos } from "../modules/videoManager";

const VideoList = () => {
    const [videos, setVideos] = useState([]);
    const [search, setSearch] = useState("");

    const getVideos = () => {
        getAllVideos().then(videos => setVideos(videos));
    };

    const handleSearch = (evt) => {
        evt.preventDefault()
        let searchInput = evt.target.value

        if (searchInput.length > 0) {
            let searchMatch = videos.filter(videos => {
                if (videos.title.toLowerCase().includes(searchInput.toLowerCase())) {
                    return true
                }
            })
            setVideos(searchMatch)
        }
        else {
            getVideos()
        }
    }


    useEffect(() => {
        getVideos();
    }, []);

    useEffect(() => {
        searchVideos();
    }, [search]);

    return (
        <>
            <div>
                <input type='text' className="search" required onChange={handleSearch} id="search_box" placeholder="Search" />
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    {videos.map((video) => (
                        <Video video={video} key={video.id} />
                    ))}
                </div>
            </div>
        </>
    );
}


export default VideoList;