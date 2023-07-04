import Link from 'next/link';

const ComingSoon = () => {
  return (
    <section className='grid h-screen place-items-center text-center mx-10 text-slate-200 '>
      <div>
        <h1 className='md:text-8xl text-4xl font-bold py-6'>
          UNDER <br /> CONSTRUCTION
        </h1>
        <p className='md:text-4xl text-2xl py-2 md:py-4 font-thin tracking-wider'>
          SITE NEARLY READY
        </p>
        <div className='h-2 rounded-full w-full bg-slate-400 my-2'>
          <div className='h-2 rounded-full w-3/4 bg-yellow-600'></div>
        </div>
      </div>
      <footer className='md:my-5 my-10 py-5'>
        <p>
          © Powered and secured by{' '}
          <Link
            href={`https://www.playhousemedia.net/`}
            className='hover:text-yellow-600 text-slate-500'
          >
            Playhouse Media Group
          </Link>
        </p>
      </footer>
    </section>
  );
};
export default ComingSoon;
