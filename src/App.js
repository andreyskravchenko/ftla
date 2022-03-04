import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import Team from './components/Team/Team';
import Hero from './components/Hero/Hero';


const App = () => {
  return (
    <div className='App'>
      <Header />
      <Hero />
      <Services />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
