import React from 'react';
import './nextVideoCss.scss';
import {Checkbox, Divider} from "semantic-ui-react";
import {VideoPreview} from '../../main/videoPreview/videoPreview'
 import {RelatedVideos} from '../../main/videoList/videoList';

export function NextVideo(props) {
    return (
        <React.Fragment>
            <div className="next-up-container">
                <h4>Up next</h4>
                <div className="up-next-toggle">
                    <span>Autoplay</span>
                    <Checkbox toggle defaultChecked/>
                </div>
            </div>
            <VideoPreview horizontal={true} />
            <Divider/>
        </React.Fragment>
    )
}