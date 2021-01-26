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
            songs: [{ name: 'cutey patootie', duration: 278 }, { name: 'Iphone', duration: 278 }, { name: 'pew pew', duration: 278 }]
         },
         {
            name: 'Angry',
            songs: [{ name: 'cutey patootie', duration: 278 }, { name: 'Iphone', duration: 278 }, { name: 'pew pew', duration: 278 }]
         },
         {
            name: 'I am Baby',
            songs: [{ name: 'cutey patootie', duration: 278 }, { name: 'Iphone', duration: 278 }, { name: 'pew pew', duration: 278 }]
         },
         {
            name: 'Shwing',
            songs: [{ name: 'cutey patootie', duration: 278 }, { name: 'Iphone', duration: 278 }, { name: 'pew pew', duration: 278 }]
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
            <img></img>
            <input type="text"></input>
         </div>
      )
   }
}

class Playlist extends React.Component {
   render() {
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
            <img></img>
            <h3>Playlist Name</h3>
            <ul>
               <li>
                  Song 1
               </li>
               <li>
                  Song 2
               </li>
               <li>
                  Song 3
               </li>
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
         serverData: {}
      }
   }
   componentDidMount() {
      setTimeout(() => {
         this.setState({
            serverData: fakeServerData
         })
      }, 5000)
   }
   render() {
      return (
         <div style={{ color: teal }} className="App">
            {this.state.serverData.user ?
               <div>
                  <h1 style={
                     {
                        width: '80%',
                        margin: 'auto',
                        'margin-top': '10vh',
                        'border-radius': "20px",
                        'border': 'solid teal 2px'
                     }
                  }>{this.state.serverData.user.name + '\'s '}Musical Data
                  </h1>

                  <PlaylistCounter playlists={this.state.serverData.user.playlists} />
                  <HoursCounter playlists={this.state.serverData.user.playlists} />

                  <Filter />
                  <Playlist />
                  <Playlist />
                  <Playlist />
                  <Playlist />
               </div> : <h1>Loading</h1>
            }
         </div>
      );
   }
}


export default App;
