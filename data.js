const videos = [
  {
    title: 'MrBeast Style Reel',
    src: 'https://drive.google.com/file/d/1seSFZ1z-fu7yqfy6_ZJjruvU0i9v8TEw/preview',
    description: 'Recreated Mr Beast Podcast video with Minimal Clean edit.'
  },
  {
    title: 'Manifest Reel',
    src: 'https://drive.google.com/file/d/1_PqhNnFtEGjAsRuLhLFjx4xoSWJkSADo/preview',
    description: 'Clean MotionGraphics & Storytelling for a personal brand.'
  },
  {
    title: 'Faceless Educational Promo',
    src: 'https://drive.google.com/file/d/179mYIRXq2jAoVDy2eFW-CYw557Eqmj8p/preview',
    description: 'Faceless educational content built with clear messaging.'
  }
];

const videoGrid = document.getElementById('videoGrid');

videos.forEach(video => {
  const container = document.createElement('div');
  container.className = 'video-item';
  container.innerHTML = `
    <div class="video-title">${video.title}</div>
    <div class="video-frame">
      <iframe src="${video.src}" allow="autoplay" allowfullscreen></iframe>
    </div>
    <div class="overlay">${video.description}</div>
  `;
  videoGrid.appendChild(container);
});
