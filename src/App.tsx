import React, { FC, useState, useEffect } from 'react';
import Button from './components/Button';
import ResultScreen from './components/ResultScreen';
import './App.css';

enum CoinTossPossibilities {
  DEFAULT = "default"
  HEADS = 'heads',
  TAILS = 'tails',
  SIDE = 'side',
}

const App: FC = () => {
  const [result, setResult] = useState<CoinTossPossibilities>(CoinTossPossibilities.DEFAULT);
  const [shouldDisplayResult, setShouldDisplayResult] =
    useState<boolean>(false);

  const beginGameHandler = () => {
    console.log('placeholder');
  };

  useEffect(() => {
    console.log('placeholder');
  });

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
