import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia } from "@mui/material"

export const MuiCard = () => {
  return (
    <Box width="300px">
        <Card>
            <CardMedia component='img' height='140' image='https://source.unsplash.com/random' alt='unsplash image' />
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>Lorem</Typography>
                <Typography variant="body2" color="text.secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex laboriosam ipsum aliquam, soluta cum, dolore at dignissimos consequatur, id facilis illum dicta iusto consequuntur tempora porro aliquid eaque nulla ipsam?</Typography>
            </CardContent>
            <CardActions>
                <Button size='small'>Share</Button>
                <Button size='small'>Learn More</Button>
            </CardActions>
        </Card>
    </Box>
  )
}
