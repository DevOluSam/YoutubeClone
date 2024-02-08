import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from ".";
interface VideosProps {
    videos: any;
    direction?: string;

}
const Videos: React.FC<VideosProps> = ({ videos }) => {
    if(!videos?.length) return 'Loading...';
    return ( 
        <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
           { videos.map((item: any, index: number) => (
                        <Box key={index}>
                            {item.id.videoId && <VideoCard video={item} />}
                            {item.id.channelId && <ChannelCard channelDetail={item} marginTop=""/>}
                        </Box>
                        ))}
                        </Stack>
                        );
                        }
                        export default Videos;

