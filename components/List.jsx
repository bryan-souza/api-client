import { Box } from '@mui/material';

function ListItem({ children }) {
  return (
    <Box
      display={'flex'}
      flexGrow={1}
      flexShrink={0}
      paddingX={'20px'}
      borderRadius={2}
      bgcolor={'#5b5b5b'}
      fontSize={'22px'}
      color={'#ffffff'}
    >
      {children}
    </Box>
  );
}

export { ListItem };