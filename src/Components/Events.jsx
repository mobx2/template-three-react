function Events() {
  return (
    <>
      <div className="events" id="events">
        <div className="dots dots-up"></div>
        <div className="dots dots-down"></div>
        <h2 className="main-title">Latest Events</h2>
        <div className="container">
          <img src="imgs/events.png" alt="" />
          <div className="info">
            <div className="time">
              <div className="unit">
                <span>08</span>
                <span>Days</span>
              </div>
              <div className="unit">
                <span>08</span>
                <span>Hours</span>
              </div>
              <div className="unit">
                <span>45</span>
                <span>Minutes</span>
              </div>
              <div className="unit">
                <span>55</span>
                <span>Seconds</span>
              </div>
            </div>
            <h2 className="title">Tech Masters Event 2024</h2>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
              nam, magnam ducimus necessitatibus mollitia numquam tempore
              voluptatem itaque excepturi
            </p>
          </div>
          <div className="subscribe">
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" />
              <input type="submit" value="Subscribe" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Events;
