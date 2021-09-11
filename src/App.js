import Cart from "./components/Cart";
import TotalPrice from "./components/TotalPrice";

const App = () => {
  return (
    <main className="main">
      <h2 className="main-heading">Order Summary</h2>
      <div className="main-container">
        <Cart />
        <TotalPrice />
      </div>
    </main>
  );
};

export default App;
