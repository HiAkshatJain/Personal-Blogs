import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
// import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Socials from './pages/Socials';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import AllBlogs from './pages/AllBlogs';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          {/* <Route path="experience" element={<Experience />} /> */}
          <Route path="contact" element={<Contact />} />
          <Route path="socials" element={<Socials />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/all" element={<AllBlogs />} />
          <Route path="blog/:id" element={<BlogPost />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;