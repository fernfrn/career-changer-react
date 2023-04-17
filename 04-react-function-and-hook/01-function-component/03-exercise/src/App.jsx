import React from 'react';

const name = 'Fern';
const bio = "It's me. Hi, I'm the problem. It's me!";

function App() {
    return (
      <div id="app">
        <img width="150px" src="https://static01.nyt.com/images/2022/09/09/science/00tb-FERNS2/00tb-FERNS2-articleLarge.jpg?quality=75&auto=webp&disable=upscale" />
        <Info />
        <Social />
      </div>
    );
  }

function Info() {
    return (
        <div>
        <h1>{name}</h1>
        <p>{bio}</p>
        </div>
    );
}

function Social() {
    return (
        <div>
            <a href="https://facebook.com/">facebook</a>
            &nbsp;&nbsp;
            <a href="https://twitter.com">twitter</a>
        </div>
    )
}

export default App;
