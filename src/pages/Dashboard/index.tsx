import React from 'react';

import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './style';

import logo from '../../assets/images/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="gitexplorer" />
      <Title>Explore Git repos</Title>

      <Form action="">
        <input type="text" placeholder="Search the repo" />
        <button type="submit">Search</button>
      </Form>

      <Repositories>
        <a href="/">
          <img src="" alt="" />
          <div>
            <strong>Title</strong>
            <p>description</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
