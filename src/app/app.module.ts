import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';

import { HttpClientModule } from '@angular/common/http';
import { ApiProvider } from '../providers/api/api'; 
import { customFunctions } from '../providers/functions';

import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { BrMaskerModule } from 'brmasker-ionic-3';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    BrMaskerModule,
    SharedModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    ApiProvider,
    customFunctions,
    ScreenOrientation,
  ]
})
export class AppModule {}
