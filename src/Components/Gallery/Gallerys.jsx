
import image2 from "../../assets/image2.jpg"
import image3 from "../../assets/image3.jpg"
import image6 from "../../assets/image6.jpg"
import image7 from "../../assets/image7.jpg"
import image8 from "../../assets/image8.jpg"
import Masonry from "react-responsive-masonry";
import { ResponsiveMasonry } from "react-responsive-masonry";


const Gallerys = () => {

    const Images = [
        
        image2,
        image3,
        image6,
        image7,
        image8,
    ];

    return (
        <div className="container">
          <h1 className="text-4xl text-center py-16">Visit our Poducts Gallery</h1>
        <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
          <Masonry gutter="2rem">
            {Images?.map((item, i) => {
              return (
                <img className="masonry__img" src={item} alt="" key={i}
                  style={{width: "100%", display: "block", borderRadius: "10px",}}/>
              );
            })}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    );
};

export default Gallerys;