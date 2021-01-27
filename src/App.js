import queryString from 'query-string'
import React from 'react'
import './App.css';

const teal = '#437C90';
const darkblue = '#255957';
const beige = '#EEEBD3';
const ocre = '#A98743';
const yellow = '#F7C548';

const fakeServerData = {
   user: {
      name: 'Laiqa',
      playlists: [
         {
            name: 'Lit',
            songs: [
               { name: 'cutey patootie', duration: 278 }, { name: 'Iphone', duration: 278 },
               { name: 'pew pew', duration: 278 }
            ]
         }
      ]
   }
}

class PlaylistCounter extends React.Component {
   render() {
      return (
         <div style={
            {
               width: "50%",
               display: "inline-block",
            }
         }>
            <h2 style={{ color: ocre, fontSize: "1rem" }} >
               {this.props.playlists.length} Playlists
            </h2>
         </div >
      )
   }
}

class HoursCounter extends React.Component {
   render() {
      let allsongs = this.props.playlists.reduce((songs, eachPlaylist) => {
         return songs.concat(eachPlaylist.songs)
      }, []);
      let totalTime = allsongs.reduce((sum, eachSong) => {
         return sum + eachSong.duration
      }, 0)
      return (
         <div style={
            {
               width: "50%",
               display: "inline-block",
            }
         }>
            <h2 style={{ color: ocre, fontSize: "1rem" }} >
               {Math.floor(totalTime / 60)} Hours
            </h2>
         </div >
      )
   }
}

class Filter extends React.Component {
   render() {
      return (
         <div>
            <img />
            <input type="text" onKeyUp={event =>
               this.props.onTextChange(event.target.value)} />
         </div>
      );
   }
}

class Playlist extends React.Component {
   render() {
      let playlist = this.props.playlist
      return (
         <div style={{
            width: '25%',
            display: "inline-block",
            marginLeft: '2vw',
            marginRight: '2vw',
            color: '#F7C548',
            backgroundColor: darkblue,
            borderRadius: '20px',
            padding: '1rem'
         }}>
            <img src={playlist.imageUrl} style={{ width: '60px' }} />
            <h3>{playlist.name}</h3>
            <ul>
               {playlist.songs.map(song =>
                  <li>{song.name}</li>)
               }
            </ul>
         </div>
      )
   }
}

class App extends React.Component {
   // initial state is empty then when app gets mounted the state changes to data that is fetched
   constructor() {
      super();
      this.state = {
         serverData: {},
         filterString: ''
      }
   }
   componentDidMount() {
      let parsed = queryString.parse(window.location.search);
      let accessToken = parsed.access_token;
      if (!accessToken) {
         return
      }
      fetch('https://api.spotify.com/v1/me', {
         headers: { 'Authorization': 'Bearer ' + accessToken }
      }).then(response => response.json())
         .then(data => this.setState({
            user: {
               name: data.display_name
            }
         }))

      fetch('https://api.spotify.com/v1/me/playlists', {
         headers: { 'Authorization': 'Bearer ' + accessToken }
      }).then(response => response.json())
         .then(data => this.setState({
            playlists: data.items.map(item => {
               console.log(data.items)
               return {
                  name: item.name,
                  imageUrl: item.images[0].url,
                  songs: []
               }
            })
         }))
   }
   render() {
      let playlistToRender =
         this.state.user &&
            this.state.playlists
            ? this.state.playlists.filter(playlist =>
               playlist.name.toLowerCase().includes(
                  this.state.filterString.toLowerCase()))
            : []
      return (
         <div style={{ color: teal }} className="App">
            {this.state.playlists ?
               <div>
                  <h1 style={
                     {
                        width: '80%',
                        margin: 'auto',
                        marginTop: '10vh',
                        borderRadius: "20px",
                        border: 'solid teal 2px'
                     }
                  }> {this.state.user.name} Musical Data
                  </h1>
                  <PlaylistCounter playlists={playlistToRender} />
                  <HoursCounter playlists={playlistToRender} />
                  <Filter onTextChange={text => {
                     this.setState({ filterString: text })
                  }} />
                  {playlistToRender.map(playlist =>
                     <Playlist playlist={playlist} />
                  )}
               </div> : <button onClick={() => { window.location = "http://localhost:8888/login" }} className="signMeIn">Sign into Spotify</button>
            }
         </div>
      );
   }
}


export default App;
