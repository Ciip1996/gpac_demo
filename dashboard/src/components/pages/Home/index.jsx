// @flow
import React from 'react';
import Market from '../Market';
import Sidebar from '../../common/Sidebar';
import { styles } from './styles';
import { GpacLogo, colors } from '../../../res';

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
    <div style={styles.homeWrapper}>
      <div style={styles.sidebar}>
        <Sidebar pages={pages}>
          <GpacLogo fill={colors.white} width={55.28} height={61.5} />
        </Sidebar>
      </div>
      <div style={styles.contentPage}>
        <Market />
      </div>
    </div>
  );
};
export default Home;
