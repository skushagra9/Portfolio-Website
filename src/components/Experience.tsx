import { Experience } from "@/constants/Experience";

// Helper function to parse markdown-style links
const parseMarkdownLinks = (text: string) => {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = linkRegex.exec(text)) !== null) {
    // Add text before the link
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    
    // Add the link
    parts.push(
      <a 
        key={match.index} 
        href={match[2]} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 underline"
      >
        {match[1]}
      </a>
    );
    
    lastIndex = linkRegex.lastIndex;
  }
  
  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  
  return parts.length > 0 ? parts : [text];
};

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

          <div className="w-2/3 dark:text-gray-300 text-left">
            <br />
            {e.description.map((item, index) => (
              <li className="mt-2" key={index}>
                {parseMarkdownLinks(item)}
              </li>
            ))}
          </div>
          <div className="font-semibold mt-2">
            {e.details.join(', ')}
          </div>
        </div>
      ))}
    </section>
  );
};
