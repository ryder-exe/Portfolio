import './App.css';
import Navbar from './components/navbar'
import About from './components/about'
import Project from './components/project'
import Connect from './components/connect'
import Footer from './components/footer'
import imagebackground from './assests/paper-texture.jpg'
import { TypeAnimation } from 'react-type-animation';
function App() {
  return (
    <div className="App" id="App">
      <Navbar />

      <div className='Imagebg'>
        <img src={imagebackground}></img>
      </div>
        <div className='middletext'>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed once, initially
            'welcome to portfolio',
            1000,
            'explore the new things',
            1000,
            'explore the new ideas',
            1000,
            'explore the new tech',
            1000,
            'explore the new invoations',
            1000,
          ]}
          speed={1}
          style={{ fontSize: '5em' , fontStyle: 'italic'}}
          repeat={Infinity}
        />
        </div>

        <About/>
        <Project/>
        <Connect/>
        <Footer/>
    </div>
  );
}

export default App;
