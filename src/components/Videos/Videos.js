import {useSelector} from "react-redux";

import {youtubeURL} from "../../constants";
import './VideosStyle.css'

function Videos({videosList}) {

    const {theme} = useSelector(state => state.theme)
    const trailer = videosList.find(el=>el.type==="Trailer"&& el.site==="YouTube")

    return (
        <div>
            <a className={`TrailerHref_${theme}`} href={`${youtubeURL}=${trailer.key}=${trailer.id}`} target={"_blank"}> Trailer </a>
        </div>
    );
}

export {Videos}