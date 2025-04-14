import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Main from './components/Main.js';
import Slider from './components/Slider.js';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import View from './components/View.js';
import Complaint from './components/Complaint.js';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import Cengov from './components/Cengov.js';
import Stagov from './components/Stagov.js';

const router=createBrowserRouter(
  [
    {path:"/", element: <div>
      <Header/><div style={{marginTop:"70px"}}></div><Main/><Footer/>
      </div>},
    {path:"/View", element: <div>
      <Header/><div style={{marginTop:"90px"}}></div><View/><div style={{marginTop:"30px"}}></div><Footer/>
      </div>},
    {path:"/Complaint", element: <div>
      <Header/><div style={{marginTop:"70px"}}></div><Complaint/><Footer/>
      </div>},
    {path:"/Login", element: <div>
      <Header/><div style={{marginTop:"70px"}}></div><Login/><Footer/>
      </div>},
    {path:"/Signup", element: <div>
      <Header/><div style={{marginTop:"70px"}}></div><Signup/><Footer/>
      </div>},
    {path:"/Central-Govt", element: <div>
      <Header/><div style={{marginTop:"70px"}}></div><Cengov/><Footer/>
      </div>},
    {path:"/State-Govt", element: <div>
      <Header/><div style={{marginTop:"70px"}}></div><Stagov/><Footer/>
      </div>},
  ]
);

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
