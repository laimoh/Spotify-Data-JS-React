import Header from './components/Header';
import Filter from './components/Filter';
import './App.css';
import Playlist from './components/Playlist';

const teal = '#437C90';
const darkblue = '#255957';
const beige = '#EEEBD3';
const ocre = '#A98743';
const yellow = '#F7C548';

// let colors = {
//    teal: '#437C90',
//    darkblue: '#255957',
//    beige: '#EEEBD3',
//    ocre: '#A98743',
//    yellow: '#F7C548'
// }

function App() {
   return (
      <div style={{ color: teal }} className="App">
         <h1 style={
            {
               width: '50%',
               margin: 'auto',
               'margin-top': '10vh',
               'border-radius': "20px",
               'border': 'solid teal 2px'
            }
         }>Musical Data</h1>
         <Header />
         <Header />
         <Filter />
         <Playlist />
         <Playlist />
         <Playlist />
         <Playlist />
      </div>
   );
}

export default App;
