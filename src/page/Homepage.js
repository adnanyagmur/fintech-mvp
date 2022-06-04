import TwitCard from "../components/Twit";
import CoinListCard from "../components/coinList";
import NewsCard from "../components/News";
import Stack from '@mui/material/Stack';
import { Paper } from "@mui/material";
import { Container } from '@mui/material';
function Homepage() {
  return (
    <Container maxWidth="lm">

      <br></br>
     
     <Stack direction="row" spacing={5}>
    
    <TwitCard></TwitCard>
    
   
    <NewsCard></NewsCard>
    
    
    <CoinListCard ></CoinListCard>
    
    </Stack>
    </Container>
  
  );
}

export default Homepage;