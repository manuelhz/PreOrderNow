import Box from '@mui/material/Box'; // Import Box for styling
import MyLogoImage from '/src/assets/images/logo.png';

export default function SitemarkIcon() {
  return (
    <Box
      sx={{
        height: 21,
        width: 100,
        mr: 2, // 'mr' stands for 'margin-right'
        display: 'flex', // Ensures the image is correctly centered/aligned if needed
        alignItems: 'center', // Vertical alignment
        justifyContent: 'center', // Horizontal alignment
      }}
    >
      <img
        src={MyLogoImage}
        alt="My Company Logo" // Important for accessibility! Describe what the logo represents.
        style={{
          maxHeight: '100%', // Ensure the image scales within the Box's height
          maxWidth: '100%',  // Ensure the image scales within the Box's width
          objectFit: 'contain', // Scales the image to fit the container without cropping
        }}
      />
    </Box>
  );
}
