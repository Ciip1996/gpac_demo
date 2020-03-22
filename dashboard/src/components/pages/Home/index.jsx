import React from 'react';
import Market from '../Market';
import Sidebar from '../../common/Sidebar';
import './styles.css';

const Home = () => {
  // const [selectedPage, setSelectedPage] = useState();

  const pages = ['Dashboard', 'Job Orders', 'Market'];

  return (
    <div className="homeWrapper">
      <div className="sidebar">
        <Sidebar items={pages} />
      </div>
      <div className="contentPage">
        <Market />
      </div>
    </div>
  );
};
export default Home;
