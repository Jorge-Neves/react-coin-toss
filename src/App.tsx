import React, { FC, useState, useEffect } from 'react';
import ResultScreen from './components/ResultScreen';
import './App.css';

const App: FC = () => {
  const [result, setResult] = useState<string>('');
  const [shouldDisplayResult, setShouldDisplayResult] =
    useState<boolean>(false);
  return (
    <>
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      {shouldDisplayResult && <ResultScreen result={result} />}
    </>
  );
};

export default App;
