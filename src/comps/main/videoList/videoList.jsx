import React from 'react';
import videoList from './videoList.scss';
import _data from '../../../data/data.json';
import {NextVideo} from '../../main/nextVideo/nextVideo';
import {VideoPreview} from '../../main/videoPreview/videoPreview';

export function RelatedVideos(props) {
  return (
    <div className='related-videos'>
  
      <NextVideo/>
      <VideoPreview horizontal={true}/>
      <VideoPreview horizontal={true}/>
      <VideoPreview horizontal={true}/>
    </div>
  );
}