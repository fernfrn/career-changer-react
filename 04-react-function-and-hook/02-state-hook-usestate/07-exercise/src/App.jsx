import React, { useState } from 'react';

function App() {
    // adding state here.
    // [stateVariable, stateMethod] = useState(init)
    const [choices, setChoices] = useState('')

  const handleClick = (value) => {
    // code here.
    setChoices(value.target.textContent);
    };
  
  return (
    <div>
      
      {/* <button onClick={() => setChoices('Fullname')}>Fullname</button>
      <button onClick={() => setChoices('Age')}>Age</button>
      <button onClick={() => setChoices('Picture')}>Picture</button> อันนี้ลองรันผ่านครั้งแรกเขียนเอง */}

      {/* อันนี้ลอกคุณช้าง */}
      <button onClick={handleClick}>Fullname</button>
      <button onClick={handleClick}>Age</button>
      <button onClick={handleClick}>Picture</button>
      <DisplayInfo choices={choices}/>
    </div>
  );

  }

function DisplayInfo(props) {

  let choices = props.choices;
  if (choices === 'Fullname') {
    choices = <h2>John Doe</h2>;
  } else if (choices === 'Age') {
    choices = <h2>30</h2>;
  } else if (choices === 'Picture') {
    choices = <img src="https://via.placeholder.com/150" alt="Placeholder" />;
  } else {
    choices = <p>Please select an option.</p>;
  }

  return (
    <div>
      {choices}
    </div>
  );
}

export default App;
