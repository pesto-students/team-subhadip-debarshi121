import { articles } from "../utils/articles";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const article = articles.find((a) => a.id === Number(id));
  return (
    <section className="px-4 lg:w-8/12 md:w-full mx-auto py-20">
      <img
        className="w-full object-cover object-center"
        src={article.urlToImage}
        alt="blog"
      />
      <div className="p-6 flex flex-col h-full">
        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
          {article.title}
        </h1>
        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
          {article.author}
        </h2>
      </div>
      <p>{article.description}</p>
    </section>
  );
};

export default BlogDetails;
