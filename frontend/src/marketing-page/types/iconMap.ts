import  ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
// features - clients

import  VerifiedUserRoundedIcon from '@mui/icons-material/VerifiedUserRounded';
import  PhotoCameraRoundedIcon from '@mui/icons-material/PhotoCameraRounded';

// features - providers
import ConnectWithoutContactRoundedIcon from '@mui/icons-material/ConnectWithoutContactRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import PaymentsRoundedIcon from '@mui/icons-material/PaymentsRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ReviewsRoundedIcon from '@mui/icons-material/ReviewsRounded';

// Highlights clients
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import PetsRoundedIcon from '@mui/icons-material/PetsRounded';
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';

// Highlights providers
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';

type IconComponent = React.ElementType;

export const MuiIconMap: Record<string, IconComponent> = {
    VerifiedUserRoundedIcon: VerifiedUserRoundedIcon,
    CalendarMonthRoundedIcon: CalendarMonthRoundedIcon,
    PhotoCameraRoundedIcon: PhotoCameraRoundedIcon,
    ConnectWithoutContactRoundedIcon: ConnectWithoutContactRoundedIcon,
    PaymentsRoundedIcon: PaymentsRoundedIcon,
    AccountCircleRoundedIcon: AccountCircleRoundedIcon,
    SupportAgentRoundedIcon: SupportAgentRoundedIcon,
    ReviewsRoundedIcon: ReviewsRoundedIcon,
    AccessTimeFilledRoundedIcon: AccessTimeFilledRoundedIcon,
    PetsRoundedIcon: PetsRoundedIcon,
    MonetizationOnRoundedIcon: MonetizationOnRoundedIcon,
    LocationOnRoundedIcon: LocationOnRoundedIcon,
    TuneRoundedIcon: TuneRoundedIcon,
    TrendingUpRoundedIcon: TrendingUpRoundedIcon,
    PeopleAltRoundedIcon: PeopleAltRoundedIcon,
    StarRateRoundedIcon: StarRateRoundedIcon,
    EventNoteRoundedIcon: EventNoteRoundedIcon,

};

export const FallbackIcon: IconComponent = ErrorOutlineRoundedIcon;