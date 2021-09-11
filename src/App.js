import { useEffect, useState } from "react";
import Alert from "./components/Alert";
import Cart from "./components/Cart";
import TotalPrice from "./components/TotalPrice";

let setTimeOutInstance = null;

const App = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("hero");

  const showAlertHandler = (message) => {
    setAlertMessage(message);
    setShowAlert(true);
  };
  const hideAlertHandler = () => {
    setShowAlert(false);
    setAlertMessage("");
  };

  useEffect(() => {
    if (alertMessage) {
      setTimeOutInstance = setTimeout(() => {
        hideAlertHandler();
      }, 1500);
    }
    return () => {
      clearTimeout(setTimeOutInstance);
    };
  }, [alertMessage]);

  return (
    <>
      <main className="main">
        <h2 className="main-heading">Order Summary</h2>
        <div className="main-sub-container">
          <Cart onShowAlert={showAlertHandler} />
          <TotalPrice />
        </div>
      </main>
      <Alert isVisible={showAlert} onHideAlert={hideAlertHandler}>
        {alertMessage}
      </Alert>
    </>
  );
};

export default App;
