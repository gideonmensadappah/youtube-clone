import React from 'react';
import './VideoPreview.scss';
export class VideoPreview extends React.Component {
  
    render() {
        const horizontal = this.props.horizontal ? 'horizontal':null;
     
        return (
            <div className={['video-preview', horizontal].join('')}>
                       

            </div>
        )
    }
}