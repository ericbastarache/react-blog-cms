import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h3 className="text-center">This Blog (with CMS)</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="dark-about-card">
            <h2 className="simplicity">Simple</h2>
            <p>The blog and CMS are both easy to get started with while providing you with the ability to create, update, read, and delete blog posts just as you would with any other blogging platform. While it's not fully featured yet,
            every effort is being made to keep the application simple, while adding in the extensive features you expect from a fully functional CMS for blogging purposes.</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="light-about-card">
            <h2 className="lightning-quick">Fast</h2>
            <p>With pages that render fast and the ability to see blog statistics in realtime on the backend, you'll never have to worry about slow loading pages again.
              This blog is built with React (for the full list of technologies go to <a href="https://github.com/ericbastarache/react-blog-cms">this GitHub repository</a>) which means that as a SPA (Single Page Application)
              you get lightning quick responses to your search queries which means anyone browsing your blog can see updates and changes, as well as new posts almost instantly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
