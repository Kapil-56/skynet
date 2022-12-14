import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Carousal from './Components/Carousal';
import Card from './Components/CardInfo';
import { Container } from 'react-bootstrap';
import Plans from './Components/Plans';
import FAQ from './Components/FAQ';
import Footer from './Components/Footer';
import '../src/style.css'


function App() {
  return (
    <div className="App">
      <Header />
      <Carousal />
      <a href="https:/wa.me/919821510156" target="/" class="whatsapp_float"><i class="fa-brands fa-whatsapp whatsapp-icon"></i></a>
      <Card />
      <Plans />
      <Container>
        {/* <h1>Customer Testimonials</h1>
        <div className="elfsight-app-8db71c85-c800-41ca-a17c-77b691022e52 my-5"></div> */}
      </Container>
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
