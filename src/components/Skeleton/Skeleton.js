import { Skeleton } from '@mui/material';
import { Stack } from '@mui/material';

export const SkeletonFrame = () => {
  return (
    <Stack
      sx={{
        animation: 'pulse',
      }}
    >
      <Skeleton variant="rectangular" width="100%" height={68} />
    </Stack>
  );
};

export const SkeletonOutlet = () => {
  return (
    <Stack
      spacing={5}
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        animation: 'pulse',
        marginTop: '64px',
      }}
    >
      <Skeleton variant="rectangular" width="160px" height={20} />
      <Skeleton variant="rectangular" width="332px" height={30} />
      <Skeleton variant="rectangular" width="332px" height={30} />
      <Skeleton variant="rectangular" width="332px" height={30} />
      <Skeleton variant="rectangular" width="332px" height={30} />
    </Stack>
  );
};

export const SkeletonContacts = () => {
  return (
    <Stack
      spacing={2}
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        animation: 'pulse',
        marginTop: '20px',
      }}
    >
      <Skeleton variant="rectangular" width="200px" height={20} />
      <Skeleton variant="rectangular" width="224px" height={40} />
      <Skeleton variant="rectangular" width="332px" height={30} />
      <Skeleton variant="rectangular" width="332px" height={30} />
      <Skeleton variant="rectangular" width="332px" height={30} />
      <Skeleton variant="rectangular" width="332px" height={30} />
      <Skeleton variant="rectangular" width="332px" height={30} />
      <Skeleton variant="rectangular" width="332px" height={30} />
    </Stack>
  );
};
