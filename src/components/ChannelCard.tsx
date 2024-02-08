import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from './constants/constants';

interface ChannelCardProps {
    marginTop: string;
    channelDetail: {
      statistics: any;
      id: {
        channelId: string;
      };
      snippet: any; 
    };
  
}

const ChannelCard:React.FC<ChannelCardProps> = ({ channelDetail, marginTop}) => {
    return ( 
        <Box sx={{ boxShadow: 'none', borderRadius: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: { xs: '356px', md: '320px'}, height: '326px', marginRight: "50px", marginBottom: "25px" ,
        marginTop}}>
            <Link to={`/channel/${channelDetail?.id?.channelId}`}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff'}}>
                    <CardMedia component="img" image={ channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture} alt={channelDetail?.snippet?.title} sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }} />
                    <Typography variant='h6' fontWeight="bold" color="#fff">
                        {channelDetail?.snippet?.title}
                        <CheckCircle sx={{ fontSize: 14, color: "gray", ml: "5px", whiteSpace: "wrap"}} />
                    </Typography>
                    {channelDetail?.statistics?.subscriberCount && (
                        <Typography>
                            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
                        </Typography>
                    )}
                </CardContent>
            </Link>
        </Box>
     );
}
 
export default ChannelCard;