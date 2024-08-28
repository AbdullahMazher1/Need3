import './App.css';
import Header from './components/Header';
import Container from './components/Container';
import Slider from './components/Slider';
import Services from './components/Services';
import Webservice from './components/Webservice';
import Mobile from './components/Mobile';
import Workflow from './components/Workflow';
import Analytics from './components/Analytics';
import Footer from './components/Footer';
import Values from './components/Values';
import Profile from './components/Profile';
import Desktop from './components/Desktop';
import Newprojects from './components/Newprojects';
import Projects2 from './components/Projects2'

function App() {
  const title1 = 'Web Development'
  const title2 = 'Soft Development'
  const MySubtitle = 'Framworks & Technologies'
  const im1 = '16.png'
  const im2 = '12.png'
  const strSoft = "We deliver custom software solutions designed to streamline operations and boost productivity, tailored to meet specific business requirements. Our focus is on scalability, performance, and user satisfaction.";
  const strMob = "We develop high-performance mobile applications for both iOS and Android platforms, ensuring a seamless user experience on the go. Our apps are known for their intuitive design and robust functionality.";

  return (
    <>
      <link
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <script
        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGaXMOvQ2K7jaPz0XKp5vvo5MR"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
        crossOrigin="anonymous"
      ></script>
      <Header />
      <Slider />
      <Container />
      <Services />
      <Projects2 />
      <Webservice title={title1} subtitle={MySubtitle} im={im1} disp={strMob} />
      <Mobile />
      <Webservice title={title2} subtitle={MySubtitle} im={im2} disp={strSoft} />
      <Desktop />
      <Workflow />
      <Analytics />
      <Profile/>
      <Values />
      <Footer />
    </>
  );
}

export default App;
