import ResponsiveAppBar from "./components/Header";
import { Routes, Route, Link } from "react-router-dom";
import Homepage from "./page/Homepage";
import TradeBot from "./page/TradeBot";
import BackTest from "./page/BackTest";
import {ContactUs} from "./components/Email"

import Blog from "./page/Blog";

import { Card, Stack } from "@mui/material";
import { blue } from '@mui/material/colors';

function App() {
  return (
    <div >
      <ResponsiveAppBar></ResponsiveAppBar>
      <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/tradebot" element={<TradeBot />} />
        <Route path="/backtest" element={<BackTest />} />
        
        <Route path="/blog" element={<Blog />} />
        <Route path="/iletisim" element={<ContactUs />} />
        
      </Routes>
    
    </div>

    
    <Stack sx={{textAlign:"center"}}>
      <br></br>
      <Card sx={{minWidth:150,backgroundColor:blue[500]}}>
      <br></br>
        Copyright by UNİCORN © Designed and built by Adnan YAĞMUR and Emre DEĞİRMENCİ
        <br></br>
        <br></br>
      </Card>
      <br></br>
    </Stack>
    </div>
  );
}

export default App;
