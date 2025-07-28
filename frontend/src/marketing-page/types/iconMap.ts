import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import  PhotoCameraRoundedIcon from '@mui/icons-material/PhotoCameraRounded';
import  TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import  ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';

type IconComponent = React.ElementType;

export const MuiIconMap: Record<string, IconComponent> = {
    CalendarMonthRoundedIcon: CalendarMonthRoundedIcon,
    PhotoCameraRoundedIcon: PhotoCameraRoundedIcon,
    TrendingUpRoundedIcon: TrendingUpRoundedIcon,
};

export const FallbackIcon: IconComponent = ErrorOutlineRoundedIcon;