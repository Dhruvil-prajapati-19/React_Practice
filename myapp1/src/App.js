import Navigation from './components/Navigation/navigation.component.jsx';
import Header from './components/Header/header.component.jsx';
import Highlight from './components/Highlight/highlight.component.jsx';
import Footer from './components/Footer/footer.component.jsx';

const App = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <Highlight highlightColor="yellow">
        <p>Welcome to Attribute Directives Example!</p>
      </Highlight>
      <Footer />
    </div>
  );
}

export default App;
