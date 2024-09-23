import React,{useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


const TextAnalyzer = () =>{
    const [text, setText] = useState('');
  const [searchString, setSearchString] = useState('');
  const [replaceString, setReplaceString] = useState('');
  const [uniqueWordsCount, setUniqueWordsCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [replacedText, setReplacedText] = useState('');

  // Function to handle text change
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  // Function to handle search string change
  const handleSearchStringChange = (e) => {
    setSearchString(e.target.value);
  };

  // Function to handle replace string change
  const handleReplaceStringChange = (e) => {
    setReplaceString(e.target.value);
  };

  // Function to replace all occurrences of search string with replace string
  const handleReplaceAll = () => {
    const updatedText = text.replaceAll(searchString, replaceString);
    setText(updatedText);
    setReplacedText(searchString); // For highlighting
  };

  // Count unique words (case-insensitive)
  useEffect(() => {
    const words = text
      .toLowerCase()
      .match(/\b\w+\b/g) || []; // Get words
    const uniqueWords = new Set(words); // Unique words
    setUniqueWordsCount(uniqueWords.size);
  }, [text]);

  // Count characters excluding spaces and punctuation
  useEffect(() => {
    const characters = text.replace(/[^\w]/g, ''); // Remove non-word characters
    setCharCount(characters.length);
  }, [text]);

  return (
    <div className="app">
        <div className="w-100 d-flex justify-content-center">
        <div className="typing-animation">
      <h1 className="heading">Real-Time Text Analyzer</h1>
        </div>
        </div>
      <textarea
        rows="10"
        cols="50"
        value={text}
        onChange={handleTextChange}
        placeholder="#type here..."
      ></textarea>
      <div className="statistics">
        <p>Unique Words: <span>{uniqueWordsCount}</span></p>
        <p>Character Count: <span>{charCount}</span></p>
      </div>
      <div className="replacement-section">
        <input
         className="input"
          type="text"
          value={searchString}
          onChange={handleSearchStringChange}
          placeholder="Find"
        />
        <input
        className="input"
          type="text"
          value={replaceString}
          onChange={handleReplaceStringChange}
          placeholder="Replace"
        />
        <button onClick={handleReplaceAll} className="button-54">Replace All</button>
      </div>
    </div>
  );
}
export default TextAnalyzer;