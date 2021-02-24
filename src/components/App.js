import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../api/youtube';
import VideoDetail from './VideoDetail';

class App extends React.Component{
    constructor(props) {
        super(props);

        this.state = {videos: [], selectedVideo: null};
        this.onTermSubmit = this.onTermSubmit.bind(this);
        this.onVideoSelect = this.onVideoSelect.bind(this);
    }
    
    async onTermSubmit(term){
        const response = await youtube.get('/search', {
            params:{
                q: term
            }
        });

        this.setState({videos: response.data.items});
    }

    onVideoSelect(video) {
        this.setState({selectedVideo: video});
    }

    render() {
        return (
            <div className='ui container'>
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className='ui grid'>
                    <div className='ui row'>
                        <div className='ten wide column'>
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className='six wide column'>
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;