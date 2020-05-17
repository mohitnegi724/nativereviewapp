import React, {useEffect, useState} from 'react';
import Home from './screens/home'
import * as Font from 'expo-font'
import {AppLoading} from 'expo';

const getFonts=()=>Font.loadAsync({
  'lato-regular': require('./assets/Fonts/Lato-Regular.ttf'),
  'lato-bold': require('./assets/Fonts/Lato-Bold.ttf')
})

export default function App() {
  const [fontLoaded, setFontLoad] = useState(false);
  if(fontLoaded){
    return (
      <Home/>
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
