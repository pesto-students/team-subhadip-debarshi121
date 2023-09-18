import { useEffect } from "react";
import axios from "axios";
import BlogCard from "../components/BlogCard";

const Blogs = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=in&apiKey=597caaa40de14293b59fb4a786edc926`
        );
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <BlogCard />
        </div>
      </div>
    </section>
  );
};

export default Blogs;
