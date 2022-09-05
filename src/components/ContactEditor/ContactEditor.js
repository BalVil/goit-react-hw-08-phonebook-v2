import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useContactEditor } from 'hooks/useContactEditor';

const ContactEditor = ({ id, onClose }) => {
  const { inputs, handleSubmit, handleChange } = useContactEditor({
    id,
    onClose,
  });

  return (
    <Box
      padding={{ xs: 3 }}
      sx={{
        bgcolor: '#fff',
        borderRadius: 2,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <Typography
        component="h2"
        variant="h6"
        sx={{
          textAlign: 'center',
          marginBottom: 2,
        }}
      >
        Edit contact
      </Typography>

      <Box component="form" textAlign="center" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              type="text"
              fullWidth
              id="name"
              label="Name"
              name="name"
              onChange={handleChange}
              value={inputs.name}
              variant="standard"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              type="tel"
              fullWidth
              id="number"
              label="Number"
              name="number"
              onChange={handleChange}
              value={inputs.number}
              variant="standard"
              onKeyPress={e => !/[0-9]/.test(e.key) && e.preventDefault()}
            />
          </Grid>
        </Grid>

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ mt: 3, bgcolor: '#32a5cf' }}
        >
          Confirm
        </Button>
      </Box>
    </Box>
  );
};
export default ContactEditor;
