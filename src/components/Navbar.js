import React from 'react';
import { Link } from 'react-router-dom';

export const PublicNavbar = () => (
  <nav>
    <section>
      <Link to='/'>Home</Link>
      <Link to='/questions'>Questions</Link>
    </section>
  </nav>
);

export const PrivateNavbar = () => (
  <nav>
    <section>
      <Link to='/'>Home</Link>
      <Link to='/questions'>Questions</Link>
      <Link to='/new'>Create New Question</Link>
      <Link to='/list'>Show My Questions</Link>
      <Link to='/profile'>My Profile</Link>
    </section>
  </nav>
);
