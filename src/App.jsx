import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/Home';
import AddBlogPage from './pages/AddBlogPage';
import PageNotFound from './pages/PageNotFound';
import DetailPage from './pages/DetailPage';
import EditBlogPage from './pages/EditBlogPage';

const App = () => {
  const createBlog = (data) => {
    axios.post("http://127.0.0.1:8000/blogs/", data)  // Corrected axios URL
      .then(res => {
        console.log(res.data);
        toast.success("Blog added successfully");
      })
      .catch(err => console.log(err.message));
  };

  const updateBlog = (data,slug) => {
    axios.put(`http://127.0.0.1:8000/blogs/${slug}/`,data)  // Corrected axios URL
      .then(res => {
        console.log(res.data);
        toast.success("Blog Updated successfully");
      })
      .catch(err => console.log(err.message));
  };
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/add-blog" element={<AddBlogPage createBlog={createBlog} />} />
          <Route path="blogs/:slug" element={<DetailPage />} />
          <Route path="blogs/edit/:slug" element={<EditBlogPage updateBlog={updateBlog}/>} /> {/* Corrected path */}
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
