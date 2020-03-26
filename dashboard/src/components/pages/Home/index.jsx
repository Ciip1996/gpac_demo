// @flow
import React from 'react';
import Market from '../Market';
import Sidebar from '../../common/Sidebar';
import { styles } from './styles';
import { GpacLogo, colors } from '../../../res';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  // const [selectedPage, setSelectedPage] = useState();
  const pages = [
    'Dashboard',
    'Job Orders',
    'Market',
    'Companies',
    'S. Projects',
    'Map',
    'Tasks Tool',
    'Sendouts'
  ];
  return (
    <div className="h-100 w-100" style={styles.homeWrapper}>
      <div className="h-100" style={styles.sidebar}>
        <Sidebar pages={pages}>
          <GpacLogo fill={colors.white} width={55.28} height={61.5} />
        </Sidebar>
      </div>
      <div className="row w-100 h-100 d-inline-block" style={styles.contentPage}>
        <Market />
      </div>
    </div>
  );
};
export default Home;
