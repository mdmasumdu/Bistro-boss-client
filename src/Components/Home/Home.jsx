import { Helmet } from "react-helmet";
import Banner from "./Banner";
import Featured from "./Featured/Featured";
import Foods from "./Foods/Foods";
import Poupular from "./Poupular/Poupular";
import Testomonial from "./Testomonial/Testomonial";


const Home = () => {
    return (
        <div>
                  <Helmet>
        <title>BISTRO BOSS|Home</title>
       
      </Helmet>
            <Banner></Banner>
            <Foods></Foods>
            <Poupular></Poupular>
            <Featured></Featured>
            <Testomonial></Testomonial>
            
        </div>
    );
};

export default Home;