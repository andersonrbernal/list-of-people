import Navbar from "./Navbar";
import Footer from './Footer';

const Leyout = ({ children }) => {
    return (
        <div className="content">
            <Navbar />
            { children }
            <Footer />
        </div>
    );
}

export default Leyout;