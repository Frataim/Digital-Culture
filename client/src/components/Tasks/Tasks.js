import * as React from "react"
import {Card, Grid} from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { Button, CardActionArea, CardActions } from "@mui/material"
import { useSelector } from "react-redux"

const Tasks = () => {

const { id, userOwner, title, deadline, created_at } = useSelector((state) => state.task[0])
              const stateHandler = () => {
                            console.log(id);
              }


              
  return (
                <div style={{ margin: "100px" }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJvsaICMLOM8PMnOr1ZGoHT0HZaEOf-_J3ZA&usqp=CAU"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {userOwner}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {deadline}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {created_at}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button onClick={stateHandler} size="small" color="primary">
            Share
          </Button>
        </CardActions>
                              </Card>
                           
    </div>
  )
}

export default Tasks
