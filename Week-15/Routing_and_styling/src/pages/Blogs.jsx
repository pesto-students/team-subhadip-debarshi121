import BlogCard from "../components/BlogCard";
import { articles } from "../utils/articles";

const Blogs = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-20 mx-auto">
        <div className="flex flex-wrap -m-4">
          {articles.map((a, i) => {
            return <BlogCard key={i} article={a} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
