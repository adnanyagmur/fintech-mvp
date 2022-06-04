import * as React from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import CardContent from '@mui/material/CardContent';

import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red,green } from '@mui/material/colors';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Logo from '../images/logo.png';
import { Container } from '@mui/material';

function Blog() {
  return (
  
     <Container>
       <br></br>
<Card >
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: green[300] }} aria-label="recipe" src={Logo}>
          </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          
        </IconButton>
      }
      title="Blog"
      
    />
   
   <CardContent>
      <TableContainer>
          <Table sx={{ minWidth: 400 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Blogger</TableCell>
                <TableCell align="right">Blog</TableCell>
               
              </TableRow>
            </TableHead>
            <TableBody>
          {/* BTCUSDT */}
                <TableRow
                  key={1}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                  Murat Kadıoğlu
                  </TableCell>
                  <TableCell align="left">Terra UST’nin çöküşüyle birlikte ciddi kan kaybeden kripto para piyasaları son günlerde toparlanıyor. Peki altcoinlerde asıl yükseliş ne zaman başlayacak? Bitcoin yazı hazırlandığı sırada 30.000 dolardan alıcı buluyor ancak gün içinde birçok kez bu seviyeyi kaybetti ve kesin bir geri dönüş sinyali vermiyor...</TableCell>
                </TableRow>
          {/* eterium */}
                <TableRow
                  key={2}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Serkan Değirmenci
                  </TableCell>
                  <TableCell align="left">Nisan ayı başından bu yana düşen bir formasyonda işlem görüyordu. Piyasadaki büyük düşüş sonucunda destekte tutunamayarak 37,3 dolara kadar geriledi. Yükselmek için fırsat kollayarak işlem gördüğü alana girmek istedi ancak ret yedi...</TableCell>
                </TableRow>
            {/* usdt */}
                <TableRow
                  key={3}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                   Furkan Alemdar
                  </TableCell>
                  <TableCell align="left">Axie Infinity, kullanıcıların platformunda oyun oynayarak Smooth Love Potion (SLP) tokeni elde etmelerini sağlar. Ancak 12 Mayıs’ta bir Axie Infinity oyun geliştiricisi tarafından gönderilen bir tweet, Axie Infinity’nin SLP tokeninin ciddi değer kaybettiğini gösteriyor. Ödül musluğunun kısılmasıyla birlikte oyuncular daha az SLP kazanmaya başlamış ve fiyatı hızla yükselmişti. Bugünlerde ise daha az ödül ve daha düşük bir fiyattan oyun ayakta tutulmaya çalışılıyor...</TableCell>
                </TableRow>
                {/*  ADA*/}
                <TableRow
                  key={4}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                  ADAUSDT
                  </TableCell>
                  <TableCell align="left">tweet4</TableCell>
                </TableRow>
                {/* SOL */}
                <TableRow
                  key={5}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    SOLUSDT
                  </TableCell>
                  <TableCell align="left">tweet5</TableCell>
                </TableRow>
                

            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    
  
  </Card>
    
  <h2>!!! ÖNEMLİ UYARI: Blog'un amacı finansal okur-yazarlığınızı arttırmaktır, yaptığınız analizleri bilimsel olarak karşılaştırmaktır, bir YATIRIM TAVSİYESİ DEĞİLDİR. Kendi finanasal okur-yazarlığınız ile piyasaları ve şartları değerlendirip kendi kararınız ile yatırım yapmalısınız.</h2>
  </Container>
  );
}

export default Blog;