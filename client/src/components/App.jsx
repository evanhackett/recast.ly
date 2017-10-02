class App extends React.Component {
  constructor() {
    super();

    this.state = {
      videoList: [],
      currentVideo: null
    };

    // load some initial videos using empty string as search
    window.searchYouTube({query: ''}, videos => {
      this.setState({
        videoList: videos.slice(1),
        currentVideo: videos[0]
      });
    });
  }

  changeVideo(video) {
    this.setState({currentVideo: video});
  }

  updateVideos(videos) {
    this.setState({videoList: videos});
  }

  render() {
    // don't render unless there is video data
    if (_.isNil(this.state.currentVideo)) {
      return (
        <div>
          <nav className="navbar">
            <div className="col-md-6 offset-md-3">
              <Search search_cb={this.updateVideos.bind(this)}/>
            </div>
          </nav>
          <div>Loading...</div>
        </div>
      );
    }

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search search_cb={this.updateVideos.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videoList} onClick={this.changeVideo.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
