import Hero from "./components/hero/Hero";
import InfoBlock from "./components/InfoBlock/InfoBlock";
import NewCollection from "./components/newCollection/NewCollection";
import Product from "./components/product/Product";

export default function Home() {
  return (
    <div>
      <Hero />
      <InfoBlock />
      <NewCollection />
      <Product />
    </div>
  );
}