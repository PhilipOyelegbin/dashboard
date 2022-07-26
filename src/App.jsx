import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout';
import Dashboard from './pages/Dashboard';
import Error from './pages/Error';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  // whatsapp chatbot
  (function () {
    var options = {
      whatsapp: "+2348054945601", // WhatsApp number
      call_to_action: "Hire me", // Call to action
      position: "right", // Position may be 'right' or 'left'
    };
    var proto = document.location.protocol,
      host = "getbutton.io",
      url = proto + "//static." + host;
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = url + "/widget-send-button/js/init.js";
    s.onload = function () {
      WhWidgetSendButton.init(host, proto, options);
    };
    var x = document.getElementsByTagName("script")[0];
    x.parentNode.insertBefore(s, x);
  })();
  return (
    <>
      <Routes>
        <Route path='/' element={<SharedLayout/>}>
          <Route index element={<Register/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='dashboard' element={<Dashboard/>}/>
          <Route path='*' element={<Error/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App