
export default function Header() {
  return (
    <section className="header pt-16 pb-8 mt-4 px-8 md:px-0">
      <header className="text-center">
        <h1 className="header-title text-5xl font-bold mb-4 text-indigo-300 dark:text-indigo-100 text-gradient">
          Hello.
        </h1>
        <div className="bg-indigo-100 dark:bg-gray-800 rounded-lg py-6 px-12">
          <p className="text-md font-semibold">
            {`I'm Kushagra Sharma-
  FullStack Developer`}
          </p>
        </div>
      </header>
    </section>
  );
}

