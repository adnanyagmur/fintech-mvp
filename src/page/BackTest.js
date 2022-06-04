import Grafik from '../images/grafik2.png';

import { Button, Card, CardContent, Container } from '@mui/material';


import Stack from '@mui/material/Stack';

import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

import { styled } from '@mui/material/styles';

import Switch from '@mui/material/Switch';

import Typography from '@mui/material/Typography';

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));


const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const top100Films = [
  { title: "Bollinger Bantları", year: 1994 },
  { title: "Göreceli Güç Endeksi(RSI)", year: 1972 },
  { title: "MA 50 / 200", year: 1974 },
  { title: "Stokastik RSI", year: 2008 },
  { title: "SuoerTrend", year: 1957 }
];



function BackTest() {
  return (

    <Container maxWidth="left">
      <br></br>
      <Stack direction="row" spacing={5}>
        <Card sx={{minWidth: 1000}}>
          <div ><iframe src="https://widget.coinlib.io/widget?type=chart&theme=light&coin_id=1512453&pref_coin_id=1505" width="100%" height="536px" scrolling="auto" marginwidth="0" marginheight="0" frameborder="0" border="0" ></iframe></div>
        </Card>
        <Card>
        <CardContent>
          <h3>Temel Hesaplama</h3>
          <Autocomplete
            multiple
            id="checkboxes-tags-demo"
            options={top100Films}
            disableCloseOnSelect
            getOptionLabel={(option) => option.title}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option.title}
              </li>
            )}
            style={{ width: 250 }}
            renderInput={(params) => (
              <TextField {...params} label="Göstergeler" placeholder="Favorites" />
            )}
          />
          <br></br>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography>SATIŞ EMRİ</Typography>
            <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
            <Typography>ALIŞ EMRİ</Typography>
          </Stack>
          
          <Stack>
            <h5>BAKİYENİZ: 100.000 SANAL USDT</h5>
            <br></br>
            <TextField id="outlined-basic" label="FİYAT" variant="outlined" className='mb-3' />
            <br></br>
            <TextField id="outlined-basic" label="MİKTAR" variant="outlined" />
            <br></br>
            <TextField id="outlined-basic" label="TOPLAM" variant="outlined" />
            <br></br>
            <Button variant="contained">HESAPLA</Button>
          </Stack>
          </CardContent>
        </Card>
      </Stack>
    </Container>



  );
}

export default BackTest;