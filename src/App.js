import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
   <>
   <Navbar/>
   <div className="container my-3">
   <TextForm heading="Analyze the Text"/>
   </div>
   </>
  );
}

export default App;
