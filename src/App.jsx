import DesignList from './components/DesignList';
import Links from './components/Links';
import Footer from './components/Footer';
import AboutMe from './components/About-me';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h1 id='top'>Agustin Graziani | Portfolio</h1>
        </div>
        <Links />
        <DesignList />
        <AboutMe />
        <Footer />
      </div>
    </div>
  );
}

export default App;
