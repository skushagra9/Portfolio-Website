import { Experience } from "@/constants/Experience";

export const Exp = () => {
  return (
    <section id="experience" className="flex flex-col w-full md:w-1/2 text-center mt-12">
      <p className="text-indigo-900 dark:text-indigo-300 font-bold ">
        📚 Experience
      </p>

      {Experience.map((e) => (
        <div key={e.year} className="flex flex-col items-center justify-start ">
          <div className="line"></div>
          <span className="font-bold">{e.timeline} ({e.year}): </span>
          <span>
            {e.title.cargo} at {e.title.name}
          </span>

          <div className="w-2/3 dark:text-gray-300">
            <br />
            {e.description.split('\n').map((item, index) => (
              <span key={index}>
                {item.trim()}
              </span>
            ))}
          </div>
          <br />
          <div className="font-semibold">
            {e.details.join(', ')}
          </div>
        </div>
      ))}
    </section>
  );
};
