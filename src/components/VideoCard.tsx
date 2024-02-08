import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from './constants/constants';

interface VideoCardProps {
    video: {
      id: {
        videoId: string;
      };
      snippet: any; 
    };
  }
const VideoCard: React.FC<VideoCardProps> = ({ video: { id: { videoId }, snippet } }) => {
    return (
        <Card sx={{ width: {  xs: '100%', sm: "325px" , md: '340px' }, boxShadow: "none", borderRadius: "15px", marginRight: "35px", marginBottom: "25px" }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia
                    component="img" 
                    image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title}
                    sx={{ width: {xs: '100%', sm: "100%", md: '350px'}, height: 190 }}
                />
            </Link>
            <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px", width: { xs: "95%", sm: "710px"}}}>
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <Typography variant='subtitle1' fontWeight="bold" color="#fff">
                        {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                    </Typography>
                </Link>
                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                    <Typography variant='subtitle2' fontWeight="bold" color="grey">
                        {snippet?.ChannelTitle || demoChannelTitle}
                        <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px"}} />
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    );
};
 
export default VideoCard;