import './App.css';
import Carousel from './Components/Carousel/Carousel';
import LogoSearchBar from './Components/LogoSearchBar/LogoSearchBar';
import Navbar from './Components/Navbar/Navbar';
import Products from './Components/Products/Products';
import TopBanner from './Components/TopBanner/TopBanner';
import flashSaleData from './data/flashSaleData';
import barazMallData from './data/barazMallData';

function App() {
  return (
    <main>
      <Navbar />
      <LogoSearchBar />
      <Carousel />
      <TopBanner />
      <Products title='FLASH SALE' products={flashSaleData} />
      <Products title='BARAZ MALL' products={barazMallData} />
    </main>
  );
}

export default App;