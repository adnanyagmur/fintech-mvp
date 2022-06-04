import * as React from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import CardContent from '@mui/material/CardContent';

import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue, green, red } from '@mui/material/colors';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Czbinance from '../images/czbinance.jpg';
import Danheld from '../images/danheld.jpg';
import Barisesen from '../images/barisesen.jpg';
import Luna from '../images/luna.jpg';
import Will from '../images/willuna.png';
import logo from '../images/logo.png';

export default function TwitCard() {

  return (
    <Card >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: green[300] }} aria-label="recipe" src={logo}>
            
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            
          </IconButton>
        }
        title="İlgili Tweetler"
      />
     
      <CardContent>
      <TableContainer>
          <Table sx={{ maxWidth: 500 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Tweet Kullanıcısı</TableCell>
                <TableCell align="right">Tweet</TableCell>
               
              </TableRow>
            </TableHead>
            <TableBody>
          {/* BTCUSDT */}
                <TableRow
                  key={1}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                  <Avatar sx={{ bgcolor: red[500] }} align="center" aria-label="recipe" src={Luna}>
          </Avatar>
                  Terra (UST) 🌍 Powered by LUNA 🌕
                  </TableCell>
                  <TableCell align="left">A post-mortem on everything that transpired the past week is in progress. It will be published asap. These are tremendously difficult times for everyone affected. The feelings are still raw. Please be safe.The strength of the #LUNAtics has been amazing. More to come.</TableCell>
                </TableRow>
          {/* eterium */}
                <TableRow
                  key={2}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                  <Avatar sx={{ bgcolor: red[500] }} align="center" aria-label="recipe" src={Will}>
          </Avatar>
                  will 🛠🌑🩸😥
                  </TableCell>
                  <TableCell align="left">The community is deciding on a new 
@terra_money
, between restoring a snapshot prior to attack, removing TFL, fully collateralizing UST and drafting & deliberating new mechanisms for $LUNA.

We must salvage the remaining value in the ecosystem & community and rebuild the right way</TableCell>
                </TableRow>
            {/* usdt */}
                <TableRow
                  key={3}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                  <Avatar sx={{ bgcolor: red[500] }} align="center" aria-label="recipe" src={Barisesen}>
          </Avatar>
                  Dr. Barış Esen
                  </TableCell>
                  <TableCell align="left">Kripto para nedir? Kripto #Luna’dır.. İlk 10’daki kriptolardan olan #Luna 120 dolardan bir haftada 1 doların altına düşüş..</TableCell>
                </TableRow>
                {/*  ADA*/}
                <TableRow
                  key={4}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                  <Avatar sx={{ bgcolor: red[500] }} align="center" aria-label="recipe" src={Danheld}>
          </Avatar>
                  Dan Held
                  </TableCell>
                  <TableCell align="left">Altcoins waiting to see what #Bitcoin will do next.</TableCell>
                </TableRow>
                {/* SOL */}
                <TableRow
                  key={5}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">   
                  <Avatar sx={{ bgcolor: red[500] }} align="center" aria-label="recipe" src={Czbinance}>
          </Avatar>
                  CZ 🔶 Binance
                  </TableCell>
                  <TableCell align="left">1/8 These past weeks have proven to be a watershed moment for the crypto industry. We have witnessed the rapid decline of a major project, which sent ripples across the industry, but also a new found resiliency in the market that did not exist during the last market downswing.</TableCell>
                </TableRow>
                

            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
      
    
    </Card>
  );
}