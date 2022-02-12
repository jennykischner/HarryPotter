import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const Tarjeta= ({imagen, nombre, apodo, casa}) => {
         
  return (
<Box>
      <Card sx={{ width: 250, m: 2 }}>
        <CardContent>
          <CardMedia 
          height="300" 
          component="img" 
          image={imagen} />
          <Typography variant="h5">{nombre}</Typography>
          <Typography variant="body2">{apodo}</Typography>
          <Typography variant="body2">{casa}</Typography>
        </CardContent>
      </Card>
    </Box>

    )
}


export default Tarjeta