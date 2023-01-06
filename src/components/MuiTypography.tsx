import { Typography  } from "@mui/material"

export const MuiTypography = () => {
  return (
    <div>
        <Typography variant="h1">h1 Heading</Typography>
        <Typography variant="h2">h2 Heading</Typography>
        <Typography variant="h3">h3 Heading</Typography>
        <Typography variant="h4" component="h1" gutterBottom>h4 Heading</Typography>
        <Typography variant="h5">h5 Heading</Typography>
        <Typography variant="h6">h6 Heading</Typography>

        <Typography variant="subtitle1">Subtitle 1</Typography>
        <Typography variant="subtitle2">Subtitle 2</Typography>

        <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex hic recusandae doloremque tenetur quasi, numquam, ad ut consectetur voluptatum quo quibusdam facere magni aspernatur suscipit, repellat corporis officia temporibus ab.</Typography>
        <Typography variant="body2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, corrupti veniam facilis hic natus ea! Modi odio veritatis dolore aperiam! Voluptas minus tenetur temporibus laborum, praesentium quibusdam ipsam dolorum consequatur.</Typography>
    </div>
  )
}
