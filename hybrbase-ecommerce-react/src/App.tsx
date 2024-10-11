import { Outlet } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";

function App() {

  return (
    <div className="overflow-hidden text-base w-full bg-slate-50">
      <ToastContainer
        position="top-right"
        transition={Bounce}
        autoClose={2000}
        draggable={true}
        theme="colored"
        hideProgressBar={true}
        toastClassName="!font-sans !rounded-md"
      />
      <Outlet />
    </div>
  );
}

export default App
