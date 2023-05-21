

const NewsLetter = () => {
    return (
        <div className="text-center bg-cyan-500 rounded-lg" data-aos="fade-right">
           <div className="py-8">
            <h1 className="text-3xl text-white">Subscribe to our newsletter</h1>
            <h4 className="text-white text-xl pb-6">Promotions, new products and sales. Directly to your inbox.</h4>
            <div className="flex">
    <input type="text" placeholder="Type Your Email" className="w-1/3 lg:ml-96 px-3" />
    <button className="btn px-6">
      Subcribe
    </button>
  </div>
            </div> 
        </div>
    );
};

export default NewsLetter;