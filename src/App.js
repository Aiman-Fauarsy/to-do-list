
import './App.css';
import Addnote from './components/Addnote';
import Footer from './components/Footer';
import Header from './components/Header';
import NotesList from './components/NotesList';



function App() {

  return (
    <div className="ToddApp">
     <Header></Header>
     <NotesList></NotesList>
     <Footer></Footer>
    </div>
  );
}

export default App;