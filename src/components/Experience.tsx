import { Experience } from "@/constants/Experience";

export const Exp = () => {
  return (
    <section className="flex flex-col container w-1/2 text-center">
      <p className="text-purple-500">
        📚 Experience
      </p>

      {Experience.map((e) => (
        <div key={e.year} className="flex items-center justify-start lines-items">
          <div className="line w-4 h-100 bg-gradient-to-b from-transparent to-gray-700 rounded-full"></div>
          <span className="text-white">{e.timeline}-{e.year}: </span>
          <span className="text-gray-500" data-tip="soo cuteeeee">
            {e.title.cargo} at {e.title.name}
          </span>

          <div className="text-gray-500" data-tip="soo cuteeeee">
            <br />
            {e.description.split('\n').map((item, index) => (
              <span key={index}>
                {item.trim()}
              </span>
            ))}
          </div>
          <br />
          <div className="text-gray-500" data-tip="soo cuteeeee">
            Technologies: {e.details.join(', ')}
          </div>
        </div>
      ))}
    </section>
  );
};
