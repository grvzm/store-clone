import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import data from './data/data.json';
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar.js';
import Slider from './components/Slider.js';
import Offers from './components/Offers.js';
import Heading from './components/Heading.js';
import StarProduct from './components/StarProduct.js';
import HotAccessoriesMenu from './components/HotAccessoriesMenu.js';
import HotAccessories from './components/HotAccessories.js';
import ProductReviews from './components/ProductReviews.js';
import Videos from './components/Videos.js';
import Banner from './components/Banner.js';

function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text="STAR PRODUCTS" />
      <StarProduct product={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />
      <Routes>
        <Route
          exact
          path="/music"
          element={
            <HotAccessories
              cover={data.hotAccessoriesCover.music}
              start={data.hotAccessories.music}
            />
          }
        ></Route>
        <Route
          exact
          path="/smartDevices"
          element={
            <HotAccessories
              cover={data.hotAccessoriesCover.smartDevice}
              start={data.hotAccessories.smartDevice}
            />
          }
        ></Route>
        <Route
          exact
          path="/home"
          element={
            <HotAccessories
              cover={data.hotAccessoriesCover.home}
              start={data.hotAccessories.home}
            />
          }
        ></Route>
        <Route
          exact
          path="/lifeStyle"
          element={
            <HotAccessories
              cover={data.hotAccessoriesCover.lifeStyle}
              start={data.hotAccessories.lifeStyle}
            />
          }
        ></Route>
        <Route
          exact
          path="/mobileAccessories"
          element={
            <HotAccessories
              cover={data.hotAccessoriesCover.mobileAccessories}
              start={data.hotAccessories.mobileAccessories}
            />
          }
        ></Route>
      </Routes>
      <Heading text="PRODUCT REVIEWS" />
      <ProductReviews start={data.productReviews} />
      <Heading text="VIDEOS" />
      <Videos video={data.videos} />
      <Heading text="IN THE PRESS" />
      <Banner />
    </Router>
  );
}

export default App;
