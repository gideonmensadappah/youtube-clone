import React from 'react';
import { Button, Divider, Icon} from "semantic-ui-react";
import './VideoMetaData.scss';

export function VideoMetaData(props){
const viewCount = Number(props.viewCount).toLocaleString() || '';
    return (
        <div className="video-metadata">
       {props.title ? <h3>Title: {props.title}</h3>:''}
        <div className="video-status">
            {/* <span>{viewCount} views</span> */}
            <div>
                {/*TODO*/}
            </div>
        </div>
        <Divider/>
    </div>
    );
}