
import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const { error, status } = useRouteError()
  return (
    <section className='h-screen p-16 bg-gray-100 text-gray-900 flex items-center'>
      <div className='container  justify-center flex flex-col items-center px-5 mx-auto my-8'>
        <img className='h-96 w-96' src="https://i.ibb.co/ws7fPYD/the.jpg" alt="" />
        <div className='max-w-md text-center'>
          <h2 className='font-extrabold mb-8  text-9xl text-gray-600'>
            <span className='sr-only'>Error</span> {status || 404}
          </h2>
          <p className='font-semibold text-2xl  md:text-3xl mb-8'>
            {error?.message}
          </p>
          <Link
            to='/'
            className='rounded btn btn-outline px-8 py-3 font-semibold  bg-amber-300 text-gray-900'>
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage