import videos from "../data/videos";

function Video() {
  return (
    <>
      <div className="videos" id="video">
        <h2 className="main-title">Top Videos</h2>
        <div className="container">
          <div className="holder">
            <div className="list">
              <div className="name">
                Top Videos
                <i className="fas fa-random"></i>
              </div>
              <ul>
                {videos.map((video, index) => (
                  <li key={index}>
                    {video.title}
                    <span>{video.duration}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="preview">
              <img src="imgs/video-preview.jpg" alt="Video Preview" />
              <div className="info">Everything About The Virtual Hosts</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Video;
