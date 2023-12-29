import Hero from "./components/Hero";
import Demo from "./components/Demo";
import FooterWithLogo from "./components/footer";
import "./App.css";
const App = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>
      <div className="app">
        <Hero />
        <Demo />
        <div className="w-full">
          <FooterWithLogo />
        </div>
      </div>
    </main>
  );
};

export default App;
