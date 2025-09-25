export const BuiderHeader = () => {
  return (
    <header className="bg-gray-800">
      <div className="container mx-auto flex flex-wrap pt-4 pl-5 pb-4 pl-5 flex-col md:flex-row items-center">
        <div className="title-font font-medium text-white mb-4 md:mb-0">
          {
            <a href="/sayBuilder" className="ml-3 text-xl">
              SayBuild
            </a>
          }
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="/" className="mr-5 hover:text-white">
            Home
          </a>
        </nav>
      </div>
    </header>
  );
};
