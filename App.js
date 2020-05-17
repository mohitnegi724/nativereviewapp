import React, {useState} from 'react';
import * as Font from 'expo-font'
import {AppLoading} from 'expo';
import Navigator from './routes/drawer'
const getFonts=()=>Font.loadAsync({
  'lato-regular': require('./assets/Fonts/Lato-Regular.ttf'),
  'lato-bold': require('./assets/Fonts/Lato-Bold.ttf')
})

export default function App() {
  const [fontLoaded, setFontLoad] = useState(false);
  if(fontLoaded){
    return (
      <Navigator/>
    );
  }else{
    return(
      <AppLoading
        startAsync={getFonts}
        onFinish={()=>setFontLoad(true)}
        onError={console.warn}
      />
    )
  }
}
