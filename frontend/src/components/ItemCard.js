import { IconButton, Card, CardContent, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const ItemCard = ({ title, amount, onDelete }) => (
  <Card sx={{ mb: 1 }}>
    <CardContent
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography>
        {title} – ₹ {amount}
      </Typography>

      <IconButton color="error" onClick={onDelete}>
        <DeleteIcon />
      </IconButton>
    </CardContent>
  </Card>
);

export default ItemCard;
