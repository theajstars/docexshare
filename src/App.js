import Register from "./Components/Auth/Register";
import "./Assets/CSS/All.css";
import {ToastProvider} from "react-toast-notifications";

function App() {
  return (
    <>
        <ToastProvider>
            <Register />
        </ToastProvider>
    </>
  );
}

export default App;
