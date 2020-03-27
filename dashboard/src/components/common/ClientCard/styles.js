import { colors } from '../../../res';

export const styles = {
  clientCardWrapper: {
    display: 'flex',
    flexDirection: 'row',
    height: 60,
    backgroundColor: colors.clientCardBackground,
    color: colors.white,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
    borderRadius: '5px 0px 0px 5px'
    // paddingLeft: 100
  },
  imageWrapper: {
    marginLeft: -16,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '15%'
  },
  regularLabel: {
    color: colors.lightGrey,
    fontFamily: 'Roboto-Light, sans-serif',
    fontSize: 14,
    minWidth: 90,
    textOverflow: 'ellipsis'
  },
  lblTitle: {
    color: colors.lightGrey,
    fontFamily: 'Roboto-Light, sans-serif',
    fontSize: 14,
    minWidth: 90,
    textAlign: 'left'
  },

  lblName: {
    fontFamily: 'Roboto-Bold, sans-serif',
    fontSize: 18,
    width: '105%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }
};
