import Banner from "../Banner/Banner";
import 'react-tabs/style/react-tabs.css';
import Gallerys from "../Gallery/Gallerys";
import NewsLetter from "../ExtraSection/NewsLetter";
import useTitle from "../hooks/useTitle";
import Category from "../Category/Category";


const Home = () => {
    useTitle("Home")
    return (
        <div>
            
            <Banner></Banner>
            <Gallerys></Gallerys>
            <Category></Category>
            <NewsLetter></NewsLetter>
          
        </div>
    );
};

export default Home;