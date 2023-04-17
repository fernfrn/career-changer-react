import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

// Code below!!!!

class Header extends React.Component {
  render() {
    return (
      // Code here
      <header>
        <span>Turn on / off</span>
        <p>Current Temperature: XXX</p>
      </header>
      // <Header />
    );
  }
}

class Content extends React.Component {
  render() {
    return (
      // Code here
      <main>
      <Temperature />
      </main>
      // <Content />
    );
  }
}

class Temperature extends React.Component {
  render() {
    return (
      // Code here
      <div id="temperature">
        <span>{ temperature } Oc</span>
      </div>
      // <Temperature />
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      // Code here
      <footer>
      <button>Up</button>
      <button>Down</button>
      </footer>
      // <Footer />
    );
  }
}

class Challenge extends React.Component {
  render() {
    return (
      // Code here
      <div>
        <div>
          <h2>Challenge</h2>
        </div>
      </div>
      // <Footer />
    );
  }
}

export default App;