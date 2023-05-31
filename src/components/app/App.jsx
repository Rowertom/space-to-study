import { Banner } from '../banner/Banner';
import { ButtonStudy } from '../buttonsStudy/ButoonsStudy';
import { Faq } from '../faq/Faq';
import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';
import { Study } from '../study/Study';
import { Teachers } from '../teachers/Teachers';
import './style.scss';

function App() {
  return (
    <div className='app'>
      <header className='container'>
        <Header />
      </header>
      <main className='container'>
        <Banner />
        <Study />
        <Teachers />
        <ButtonStudy />
        <Faq />
      </main>
      <footer className="container">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
