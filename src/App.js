import React, { useState } from 'react';
import Link from './Link';
import UserInput from './UserInput';

function App() {
  const [inputFirstLine, setInputFirstLine] = useState();
  const [inputSecondLine, setInputSecondLine] = useState();
  const [memeType, setMemeType] = useState();

  return (
    <div>
      <header>
        {' '}
        <h1>Ready to create your own meme?</h1>{' '}
      </header>
      <UserInput
        inputFirstLine={inputFirstLine}
        inputSecondLine={inputSecondLine}
        memeType={memeType}
        setInputFirstLine={setInputFirstLine}
        setInputSecondLine={setInputSecondLine}
        setMemeType={setMemeType}
      />
      <Link
        inputFirstLine={inputFirstLine}
        inputSecondLine={inputSecondLine}
        memeType={memeType}
      />
    </div>
  );
}

export default App;
