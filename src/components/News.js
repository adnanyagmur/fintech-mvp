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

export default function NewsCard() {
 

  return (
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
          <Table sx={{ maxWidth: 700 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>HABER KAYNAĞI</TableCell>
                <TableCell align="right">İÇERİK</TableCell>
               
              </TableRow>
            </TableHead>
            <TableBody>
          {/* BTCUSDT */}
                <TableRow
                  key={1}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                  KRİPTOLA HABER
                  </TableCell>
                  <TableCell align="left">Terra UST’nin çöküşüyle birlikte ciddi kan kaybeden kripto para piyasaları son günlerde toparlanıyor. Peki altcoinlerde asıl yükseliş ne zaman başlayacak? Bitcoin yazı hazırlandığı sırada 30.000 dolardan alıcı buluyor ancak gün içinde birçok kez bu seviyeyi kaybetti ve kesin bir geri dönüş sinyali vermiyor...</TableCell>
                </TableRow>
          {/* eterium */}
                <TableRow
                  key={2}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    COİN HABER
                  </TableCell>
                  <TableCell align="left">Nisan ayı başından bu yana düşen bir formasyonda işlem görüyordu. Piyasadaki büyük düşüş sonucunda destekte tutunamayarak 37,3 dolara kadar geriledi. Yükselmek için fırsat kollayarak işlem gördüğü alana girmek istedi ancak ret yedi...</TableCell>
                </TableRow>
            {/* usdt */}
                <TableRow
                  key={3}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                   DÜZCE HABER
                  </TableCell>
                  <TableCell align="left">Axie Infinity, kullanıcıların platformunda oyun oynayarak Smooth Love Potion (SLP) tokeni elde etmelerini sağlar. Ancak 12 Mayıs’ta bir Axie Infinity oyun geliştiricisi tarafından gönderilen bir tweet, Axie Infinity’nin SLP tokeninin ciddi değer kaybettiğini gösteriyor. Ödül musluğunun kısılmasıyla birlikte oyuncular daha az SLP kazanmaya başlamış ve fiyatı hızla yükselmişti. Bugünlerde ise daha az ödül ve daha düşük bir fiyattan oyun ayakta tutulmaya çalışılıyor...</TableCell>
                </TableRow>
                {/*  ADA*/}
                <TableRow
                  key={4}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                  GLOBAL COİN
                  </TableCell>
                  <TableCell align="left">AB Parlamentosu, Bitcoin ve Ethereum'u yasaklamayı kolaylaştırabilecek düzenleyici çerçeveyi oylayacak. Eğer yasa kabul edilirse AB, çevresel sürdürülebilirlik kriterlerini karşılamayan herhangi bir kripto varlığın listelenmesini yasaklayabilecek.</TableCell>
                </TableRow>
                {/* SOL */}
                <TableRow
                  key={5}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    TÜRK COİN
                  </TableCell>
                  <TableCell align="left">Bir süredir kripto paraların yasal çerçeveye alınması için yapılan çalışmalarda sona gelindi. Hazine ve Maliye Bakanı Nureddin Nebati, kripto para düzenlemesiyle ilgili teknik son çalışmaların yapıldığını ifade ederek, "Bu mevzuatla Türkiye'de kripto paranın önünü açıcı, fakat zarar verici yönlerini bertaraf eden, genel kapsamlı, daha çok ikincil düzenlemelerle işin yürütülebileceği bir adım attık" dedi.</TableCell>
                </TableRow>
                

            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    
  
  </Card>
  );
}