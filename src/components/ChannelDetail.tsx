import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { Videos, ChannelCard } from './';
import { fetchFromAPI } from '../utils/FetchFromAPI';

const ChannelDetail = () => {
    const [channelDetail, setChannelDetail] = useState<any>(null);
    const [videos, setVideos] = useState<any>([]);
    const { id } = useParams<{ id: string }>();
    console.log(channelDetail, videos);

    useEffect(() => {
        fetchFromAPI(`channels?part=snippet&id=${id}`).then((data: any) => setChannelDetail(data?.items[0]));

        fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data: any) => setVideos(data?.items));
    }, [id]);
    return ( 
        <Box minHeight='95vh'>
            <Box>
                <div style={{ background: 'linear-gradient(90deg, rgba(50,212,236,1) 0%, rgba(227,59,202,1) 100%)', zIndex: 10, height: '300px'}} />
                <ChannelCard channelDetail={channelDetail} marginTop='-110px'/>
            </Box>
            <Box display='flex' p='2'>
                <Box sx={{ mr: { sm: '100px'}}} />
                <Videos videos={videos} />
            </Box>
        </Box>
     );
}
 
export default ChannelDetail;