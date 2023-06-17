import Header from './components/Header/Header';
import './App.scss';
import './components/Header/Header.scss';
import './components/TakeAPicture/TakeAPicture.scss';
import TakeAPicture from './components/TakeAPicture/TakeAPicture';
function App() {
  const showTakeAPicture = () => {
    document.querySelector('.cta').style.display = 'none';
    document.querySelector('.picture').style.display = 'flex';
  };
  return (
    <div className="App">
      <Header />
      <section className="cta">
        <main>
          <p>
            Cliquer sur le bouton ci-dessous pour prendre une photo des chiffres de mon
            compteur
          </p>
          <button onClick={showTakeAPicture}>Relever mon compteur</button>
        </main>
      </section>
      <TakeAPicture />
    </div>
  );
}

export default App;
