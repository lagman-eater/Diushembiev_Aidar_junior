import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './Components/Header'
import ProductListing from './Components/ProductListing'
import ProductDetail from './Components/ProductDetail'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/nft/:assetContractAdress/:tokenId" element={<ProductDetail />} />
          {/* <Route path="/product/:productId" element={<ProductDetail />} /> */}
          <Route>404 Not found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
