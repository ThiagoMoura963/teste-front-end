import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { MainBanner } from "./components/MainBanner";
import { ProductGrid } from "./components/ProductGrid";
import "./components/ProductCard/style.scss";

function App() {
  return (
    <div>
      <Header />
      <Navbar />

      <main>
        <MainBanner />
        <ProductGrid />
      </main>
    </div>
  );
}

export default App;
