import PropTypes from 'prop-types';
import SimpleBarReact from 'simplebar-react';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, Stack } from '@mui/material';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(() => ({
  flexGrow: 1,
  height: '100%',
  overflow: 'scroll',
}));

const SimpleBarStyle = styled(SimpleBarReact)(({ theme }) => ({
   maxHeight: '100%',
  '& .simplebar-scrollbar': {
    '&:before': {
      backgroundColor: alpha(theme.palette.grey[600], 0.48),
    },
    '&.simplebar-visible:before': {
      opacity: 1,
    },
  },
  '& .simplebar-track.simplebar-vertical': {
    width: 10,
  },
  '& .simplebar-track.simplebar-horizontal .simplebar-scrollbar': {
    height: 6,
  },
  '& .simplebar-mask': {
    zIndex: 'inherit',
  },
  "& .simplebar-placeholder": {
    height: '0 !important',
  }
}));

// ----------------------------------------------------------------------

Scrollbar.propTypes = {
  children: PropTypes.node.isRequired,
  sx: PropTypes.object,
};

export default function Scrollbar({ children, sx, ...other }) {
  const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  if (isMobile) {
    return (
      <Box sx={{ overflowX: 'auto', ...sx }} {...other}>
        {children}
      </Box>
    );
  }

  return (
    <RootStyle>
      <SimpleBarStyle timeout={500} clickOnTrack={false} sx={sx} {...other}>
        {children}
      </SimpleBarStyle>
    </RootStyle>
  );
}
export const ScrollBox = styled(Stack)({
  height: '100%',
  overflowY: 'scroll', // Ensure the box is scrollable
  '&::-webkit-scrollbar': {
    width: '8px',
  },
  '&::-webkit-scrollbar-track': {
    background: '#f1f1f1',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '#888',
    borderRadius: '10px',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: '#555',
  },
  
});

export {SimpleBarStyle};