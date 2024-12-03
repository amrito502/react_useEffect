import AppNav from '../components/AppNav';
import Footer from '../components/Footer';
function Layout(props) {
  return (
    <div>
       <AppNav/>
        {props.children}
       <Footer/>
    </div>
  );
}

export default Layout;
