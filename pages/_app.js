import Leyout from "../components/Leyout";
import '../styles/globals.css';


const App = ({ Component, pageProps }) => {
  return (
    <Leyout>
      <Component {...pageProps} />
    </Leyout>
  );
}

export default App;