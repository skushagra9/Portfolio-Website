import { Experience } from "@/constants/Experience";

export const Exp = () => {
  return (
    <section id="experience" className="flex flex-col w-full md:w-1/2 text-center mt-12 px-8 md:p-0">
      <p className="text-indigo-900 dark:text-indigo-300 font-bold ">
        📚 Experience
      </p>

      {Experience.map((e) => (
        <div key={e.year} className="flex flex-col items-center justify-start ">
          <div className="line"></div>
          <span className="font-bold"> {e.title.name}</span>
          <span>{e.title.cargo}</span>
          <span>
            {e.timeline} ({e.year})  </span>

          <div className="w-2/3 dark:text-gray-300">
            <br />
            {e.description.map((item, index) => (
              <span key={index}>
                {item.trim()}
              </span>
            ))}
          </div>
          <div className="font-semibold">
            {e.details.join(', ')}
          </div>
        </div>
      ))}
    </section>
  );
};
