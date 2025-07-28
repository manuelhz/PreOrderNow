import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import MuiLink from '@mui/material/Link'; // because name Link clashes changed name from Link to MuiLink
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import visuallyHidden from '@mui/utils/visuallyHidden';
import { styled } from '@mui/material/styles';

// Import the custom hook to access marketing content
import { useMarketingContent } from '../MarketingPage';
import { Link } from 'react-router-dom';

// Define Props Interface for StyledBox ---
interface StyledBoxProps {
  lightModeImageUrl: string;
  darkModeImageUrl: string;
}

// --- MODIFIED: StyledBox now accepts and uses props ---
const StyledBox = styled('div')<StyledBoxProps>(({ theme, lightModeImageUrl, darkModeImageUrl }) => ({
  alignSelf: 'center',
  width: '100%',
  height: 400,
  marginTop: theme.spacing(8),
  borderRadius: (theme.vars || theme).shape.borderRadius,
  outline: '6px solid',
  outlineColor: 'hsla(220, 25%, 80%, 0.2)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.grey[200],
  boxShadow: '0 0 12px 8px hsla(220, 25%, 80%, 0.2)',
  // Use lightModeImageUrl from props
  backgroundImage: `url(${lightModeImageUrl})`,

  backgroundSize: 'cover',
  [theme.breakpoints.up('sm')]: {
    marginTop: theme.spacing(10),
    height: 700,
  },
  ...theme.applyStyles('dark', {
    boxShadow: '0 0 24px 12px hsla(210, 100%, 25%, 0.2)',
    // Use darkModeImageUrl from props
    backgroundImage: `url(${darkModeImageUrl})`,
    outlineColor: 'hsla(220, 20%, 42%, 0.1)',
    borderColor: (theme.vars || theme).palette.grey[700],
  }),
}));

export default function Hero() {
  // Consume the marketing content using the custom hook
  const { hero } = useMarketingContent();

  // Determine if the button link should open in a new tab
  const isExternalLink = hero.primaryButton.target === '_blank';
  const buttonLinkProps = isExternalLink
    ? {
        href: hero.primaryButton.path,
        target: '_blank',
        rel: 'noopener noreferrer', // Recommended for security when using target="_blank"
      }
    : {
        component: Link, // Use react-router-dom's Link component
        to: hero.primaryButton.path, // Path for internal routing
      };

  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundImage:
          'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
        ...theme.applyStyles('dark', {
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
        }),
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' } }}
        >
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              fontSize: 'clamp(3rem, 10vw, 3.5rem)',
            }}
          >
            {hero.titlePrefix}&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={(theme) => ({
                fontSize: 'inherit',
                color: 'primary.main',
                ...theme.applyStyles('dark', {
                  color: 'primary.light',
                }),
              })}
            >
              {hero.titleHighlight}
            </Typography>
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              width: { sm: '100%', md: '80%' },
            }}
          >
            {hero.description}
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: '350px' } }}
          >
            <InputLabel htmlFor="email-hero" sx={visuallyHidden}>
              Email
            </InputLabel>
            <TextField
              id="email-hero"
              hiddenLabel
              size="small"
              variant="outlined"
              aria-label={hero.emailInput.ariaLabel}
              placeholder={hero.emailInput.placeHolder}
              fullWidth
              slotProps={{
                htmlInput: {
                  autoComplete: 'off',
                  'aria-label': hero.emailInput.ariaLabel,
                },
              }}
            />
            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={{ minWidth: 'fit-content' }}
              {...buttonLinkProps}
            >
              {hero.primaryButton.label}
            </Button>
          </Stack>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ textAlign: 'center' }}
          >
            {hero.disclaimerPrefix}
            <MuiLink href={hero.disclaimerLink.path} color="primary">
              {hero.disclaimerLink.label}
            </MuiLink>
            {hero.diclaimerSufix}
          </Typography>
        </Stack>

        <StyledBox
          id="image"
          lightModeImageUrl={hero.lightModeImageUrl}
          darkModeImageUrl={hero.darkModeImageUrl}
        />
      </Container>
    </Box>
  );
}