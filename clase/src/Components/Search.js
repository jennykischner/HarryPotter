import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Search = () => {
    return (
        <Box
        component="form"
        sx={{
          m: 1,
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          sx={{ width: 400 }}
          id="standard-basic"
          label="Ingresa el nombre del personaje"
          variant="standard"
        />
      </Box>
  
    )

}

export default Search