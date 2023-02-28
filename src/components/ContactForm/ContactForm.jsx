import { Controller } from 'react-hook-form';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { contactValidation } from 'helpers/contactValidation';
import Spinner from 'components/Spinner';
import { useAddContact } from 'hooks/useAddContact';
import { FormSection, Title, FormWrap } from './ContactForm.styled';

const ContactForm = () => {
  const {
    register,
    errors,
    control,
    isLoading,
    handleSubmit,
    handleAddContact,
  } = useAddContact();

  return (
    <FormSection>
      <Title>Phonebook</Title>
      <FormWrap>
        <Box
          sx={{
            padding: 4,
            bgcolor: '#fff',
            borderRadius: 2,
            boxShadow: 'rgb(0 0 0 / 20%) 0px 2px 4px',
          }}
        >
          <CssBaseline />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box
              component="form"
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit(handleAddContact)}
              textAlign="center"
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Controller
                    control={control}
                    name="name"
                    render={({ field: { ref, ...field } }) => (
                      <TextField
                        {...field}
                        inputRef={ref}
                        type="text"
                        name="name"
                        fullWidth
                        id="name"
                        label="Name"
                        variant="standard"
                        {...register('name', contactValidation.name)}
                        error={Boolean(errors.name)}
                        helperText={errors?.name && errors.name.message}
                        required
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Controller
                    control={control}
                    name="number"
                    render={({ field: { ref, ...field } }) => (
                      <TextField
                        {...field}
                        inputRef={ref}
                        fullWidth
                        name="number"
                        label="Phone"
                        type="tel"
                        id="number"
                        variant="standard"
                        {...register('number', contactValidation.number)}
                        error={Boolean(errors.number)}
                        helperText={errors?.number && errors.number.message}
                        required
                      />
                    )}
                  />
                </Grid>
              </Grid>

              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={isLoading === 'add'}
                sx={{
                  mt: 5,
                  bgcolor: '#32a5cf',
                }}
              >
                {isLoading === 'add' ? (
                  <Spinner size={22} />
                ) : (
                  <span>Add contact</span>
                )}
              </Button>
            </Box>
          </Box>
        </Box>
      </FormWrap>
    </FormSection>
  );
};

export default ContactForm;
