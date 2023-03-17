import DesignList from './components/DesignList';
import Links from './components/Links';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h1 id='top'><a href="/">Agustin Graziani | Portfolio</a></h1>
        </div>
        <Links />
        <DesignList />

      </div>
    </div>
  );
}

export default App;
