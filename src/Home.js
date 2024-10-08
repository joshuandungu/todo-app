import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading blogs...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
      {/* Optional: Filtered list for a specific author */}
      {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs" /> */}
    </div>
  );
}

export default Home;
