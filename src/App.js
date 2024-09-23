import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import TextAnalyzer from './components/TextAnalyzer';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
         <Route exact path='/' element={<TextAnalyzer/>}/>
      </Routes>
    </Router>
  );
}

export default App;
