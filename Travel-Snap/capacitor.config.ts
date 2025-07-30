import type { CapacitorConfig } from '@capacitor/cli';
import { SplashScreen } from '@capacitor/splash-screen';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Travel-Snap',
  webDir: 'www',
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,  
      launchAutoHide: true,      
      backgroundColor: "#ffffffff", 
      androidSplashResourceName: "splash",  
      androidScaleType: "CENTER_CROP",     
      showSpinner: false,       
      splashFullScreen: true,   
      splashImmersive: true
    }
  }

};

export default config;
