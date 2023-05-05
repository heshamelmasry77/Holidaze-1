import { Favorite } from "@mui/icons-material";
import { Card, CardActions, CardHeader, CardMedia, Grid, IconButton, Rating, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import LikeIcon from "../../assets/icons/LikeIcon";

function VenueCard({ id, img, name, description, rating }) {
  return (
    <Card variant="outlined" component={Link} to={`venues/${id}`} sx={{ textDecoration: "none" }}>
      <Grid container item={true}>
        <Grid item xs={2}>
          <CardMedia component="img" alt={name} height="140" image={img}></CardMedia>
        </Grid>
        <Grid item xs={10} sx={{ p: "1rem" }}>
          <Typography variant="h4">{name}</Typography>

          <>ICONS</>
          {rating && <Rating value={rating} readOnly />}
          <Typography paragraph variant="body1" noWrap={true} sx={{ width: "400px" }}>
            {description}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
}

export default VenueCard;
