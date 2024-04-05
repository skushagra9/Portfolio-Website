import { Experience } from "@/constants/Experience";

export const Exp = () => {
  return (
    <section className="flex flex-col  w-1/2 text-center">
      <p className="text-indigo-300">
        📚 Experience
      </p>

      {Experience.map((e) => (
        <div key={e.year} className="flex flex-col items-center justify-start lines-items">
          <div className="line w-4 h-100 bg-gradient-to-b from-transparent to-gray-700 rounded-full"></div>
          <span >{e.timeline}-{e.year}: </span>
          <span>
            {e.title.cargo} at {e.title.name}
          </span>

          <div className="w-2/3" data-tip="soo cuteeeee">
            <br />
            {e.description.split('\n').map((item, index) => (
              <span key={index}>
                {item.trim()}
              </span>
            ))}
          </div>
          <br />
          <div className="font-bold" data-tip="soo cuteeeee">
            Technologies: {e.details.join(', ')}
          </div>
        </div>
      ))}
    </section>
  );
};
