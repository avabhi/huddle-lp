import './App.css';
import CommunityCard from './components/CoomunityCard';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';
import UserIllustration from './components/UserIllustration';

function App() {
  return (
    <div className="App">
      <div className='intro'>
        <Header />
        <UserIllustration />
      
      </div>
      <MainContent />
      <div className="footer-container">
  <div className="community-card-container">
    <CommunityCard />
  </div>
  <Footer />
</div>

    </div>
  );
}

export default App;
