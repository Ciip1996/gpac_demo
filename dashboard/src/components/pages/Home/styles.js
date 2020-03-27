import { colors } from '../../../res';

const sidebarWidth = 140;
export const styles = {
  homeWrapper: {
    // display: 'flex',
    // flexDirection: 'row',
    margin: '0 auto',
    backgroundColor: colors.appBackground
    // minHeight: 750
  },
  sidebar: {
    // flex: 3,
    maxWidth: sidebarWidth,
    backgroundColor: colors.sideBar,
    margin: 0,
    padding: 0,
    position: 'fixed',
    height: '100%',
    overflow: 'hidden'
  },
  contentPage: {
    float: 'left',
    paddingLeft: sidebarWidth
    // marginLeft: 15
    // flex: 1,
    // display: 'flex'
    // marginLeft: 140,
  }
};
