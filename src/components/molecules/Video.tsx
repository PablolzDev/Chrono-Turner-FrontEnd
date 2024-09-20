import React from 'react';
import { Video } from '@styles/styles'; // Asegúrate de importar correctamente

const VideoSect: React.FC = () => {
  return (
    <Video
      autoPlay
      loop
      muted
      playsInline
    >
      <source src="/vid/SectionTask.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </Video>
  );
};

export default VideoSect;