import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <head>
      </head>
      <body>
      <div class="topnav">
        <a class="active" href="#home">home</a>
        <a href="#news">news</a>
        <a href="#posts">posts</a>
        <a href="#scores">scores</a>
        <a href="#calendar">calendar</a>
        <a href="#about">about</a>
      </div>
      <div class="body">
        <h1 class = "title">sports central</h1>
        <p class = "text"> you want to play lets play </p>
        {/*<iframe class = "text" width="560" height="315" src="https://www.youtube.com/embed/e82VE8UtW8A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>*/}

      </div>
      </body>


      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
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
      </div> */}
    </>
  );
}

export default App;
