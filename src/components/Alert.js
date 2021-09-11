import ReactDOM from "react-dom";

const AlertBox = ({ children, isVisible, onHideAlert }) => {
  const classes = isVisible ? "alertbox visible" : "alertbox";
  return (
    <div className={classes}>
      <button className="alertbox-close-btn" onClick={onHideAlert}>
        <svg width="12" height="12" viewBox="0 0 18 18" fill="none">
          <path
            d="M1 17L17 1M17 17L1 1"
            stroke="#f8f8f8"
            strokeLinecap="round"
            strokeWidth="1.5"
          ></path>
        </svg>
      </button>
      <p>{children}</p>
    </div>
  );
};

const Alert = ({ isVisible, onHideAlert, children }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <AlertBox isVisible={isVisible} onHideAlert={onHideAlert}>
          {children}
        </AlertBox>,
        document.getElementById("alert-box")
      )}
    </>
  );
};

export default Alert;
