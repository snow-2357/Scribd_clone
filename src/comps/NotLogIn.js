import Header from "./Header";
// import Sidebar from "./comps/Sidebar";
import Body from "./Body";
import Lowerbody from "./Lowerbody";
import Show from "./Show";
import Footer from "./Footer";
import Logincard from "./Logincard";

function NotLogIn() {
  return (
    <div className="App">

      <Header/>
      <Body />
      <Lowerbody/>
      <Show />
      <Footer/>
    </div>
  );
}

export default NotLogIn;
