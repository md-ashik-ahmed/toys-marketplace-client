import useTitle from "../hooks/useTitle";

const Blogs = () => {
   useTitle("Blogs") 
    return (
        <div className='container'>
            <div>
                <h1 className='font-sans text-2xl font-semibold' data-aos="fade-down">1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1> <br />
                <h3 className='text-xl'> <span className='font-semibold'>Answer:</span> Access Token: A piece of information a client uses to gain access to a server's secured resources. It has a finite lifespan and contains data about the authorizations and identity of the client. <br /> <br />

                Refresh Token: A persistent credential that is used to request a fresh access token once the old one expires. The client is able to extend their session without having to re-authenticate. <br /> <br />

                Storage on Client-side:<br /> <br />

                Access Token: During the client session, securely store data in memory, local storage, or session storage. <br /> <br />
                Refresh Token: Safely save in an HTTP-only cookie or another secure storage device offered by the browser or operating system.
                <br /> <br />

               
                </h3> <br /> <br />

                <h1 className='font-sans text-2xl font-semibold'>2. Compare SQL and NoSQL databases?</h1> <br />
                <h3 className='text-xl'><span className='font-semibold'>Answer:</span> A standardized programming language called Structured Query Language (SQL) is used to administer relational databases and carry out various operations on the data they contain. <br /> <br />


                For organizing and accessing data, NoSQL databases employ a number of different data models. By easing some of the data consistency constraints of traditional databases, these types of databases are specifically tailored for applications that need enormous data volumes, low latency, and flexible data models.


                </h3> <br /> <br />

                <h1 className='font-sans text-2xl font-semibold'>3. What is express js? What is Nest JS?</h1><br />
                <h3 className='text-xl'><span className='font-semibold'>Answer:</span> Express.js is a popular and lightweight web application framework for Node.js. It provides a set of features and tools for building web applications and APIs.  <br /> <br />

                One of the Node. js frameworks that are expanding the quickest for creating effective, scalable, and enterprise-grade backend applications is nest. Using contemporary JavaScript and TypeScript, it is renowned for creating highly testable, maintainable, and scalable applications.</h3> <br /> <br />

                <h1 className='font-sans text-2xl font-semibold'>4. What is MongoDB aggregate and how does it work?</h1><br />
                <h3 className='text-xl'><span className='font-semibold'>Answer:</span> The aggregate operation in MongoDB is a pipeline-based function that enables sophisticated data processing and analysis on collections. To carry out operations like filtering, grouping, sorting, and data transformation, it employs a number of phases. Each stage of the pipeline manipulates the data before passing it on to the next level. <br /> <br />
                The aggregation framework offers a wide range of operators and features, allowing for flexibility and expressiveness. Due to its performance optimization, it is effective in processing big datasets. In conclusion, the aggregate function allows for intricate data manipulations and aggregations within MongoDB, enhancing data analysis and insights right within the database.</h3>

            </div>
        </div>
    );
};

export default Blogs;