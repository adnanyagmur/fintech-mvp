import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Logo from '../images/logo.png';
import { blue, green, red } from '@mui/material/colors';
import btc from '../images/btc.png';
import eth from '../images/eth.png';
import usdtc from '../images/usdt.png';
import adatc from '../images/cardano.jpg';
import solana from '../images/sol.png';
import Shiba from '../images/shiba.png';

export default function CoinListCard() {

  const [parite, setParite] = React.useState();
  const [eter, setEter] = React.useState();
  const [usdt, setUsdt] = React.useState();
  const [ada, setAda] = React.useState();
  const [sol, setSol] = React.useState();
  const [shiba, setShiba] = React.useState();


  let ws = new WebSocket('wss://stream.binance.com:9443/ws/!bookTicker');

  ws.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    // console.log(stockObject);

    if (stockObject.s === "BTCUSDT") {
      setParite(stockObject.b); 

    }
    if (stockObject.s === "SOLUSDT") {
      setSol(stockObject.b);

    }
    if (stockObject.s === "USDTBIDR") {
      setUsdt(stockObject.b);

    }
    if (stockObject.s === "ADAUSDT") {
      setAda(stockObject.b);

    }
    if (stockObject.s === "ETHUSDT") {
      setEter(stockObject.b);

    }
    if (stockObject.s === "SHIBUSDT") {
      setShiba(stockObject.b);

    }
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: green[300] }} aria-label="recipe" src={Logo}>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">

          </IconButton>
        }
        title="Coin Listesi"

      />
      <CardContent>



        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 10 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>COİN ADI</TableCell>
                <TableCell align="right">ANLIK FİYATI</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {/* BTCUSDT */}
              <TableRow
                key={1}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Avatar sx={{ bgcolor: green[300] }} aria-label="recipe" src={btc}>
                  </Avatar>
                  BTCUSDT
                </TableCell>
                <TableCell align="right">{parite}</TableCell>
              </TableRow>
              {/* eterium */}
              <TableRow
                key={2}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Avatar sx={{ bgcolor: green[300] }} aria-label="recipe" src={eth}>
                  </Avatar>
                  ETHUSDT
                </TableCell>
                <TableCell align="right">{eter}</TableCell>
              </TableRow>
              {/* usdt */}
              <TableRow
                key={3}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Avatar sx={{ bgcolor: green[300] }} aria-label="recipe" src={usdtc}>
                  </Avatar>
                  USDTBIDR
                </TableCell>
                <TableCell align="right">{usdt}</TableCell>
              </TableRow>
              {/*  ADA*/}
              <TableRow
                key={4}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Avatar sx={{ bgcolor: green[300], }} aria-label="recipe" src={adatc}>
                  </Avatar>
                  ADAUSDT
                </TableCell>
                <TableCell align="right">{ada}</TableCell>
              </TableRow>
              {/* SOL */}
              <TableRow
                key={5}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Avatar sx={{ bgcolor: green[300], }} aria-label="recipe" src={solana}>
                  </Avatar>
                  SOLUSDT
                </TableCell>
                <TableCell align="right">{sol}</TableCell>
              </TableRow>
              {/* Shiba */}
              <TableRow
                key={5}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Avatar sx={{ bgcolor: green[300], }} aria-label="recipe" src={Shiba}>
                  </Avatar>
                  SHIBUSDT
                </TableCell>
                <TableCell align="right">{shiba}</TableCell>
              </TableRow>


            </TableBody>
          </Table>
        </TableContainer>


      </CardContent>


    </Card>

  );
}