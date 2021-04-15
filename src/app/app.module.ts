import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { WalletComponent } from './wallet/wallet.component';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BitcoinService } from './bitcoin.service';
import { LoggerService } from './logger.service';

@NgModule({
  imports:     
   [ 
    
    BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot([
      {path: 'Carteira', component: WalletComponent},
      {path: 'Historico', component: BitcoinComponent},
    ]) 
    
    ],
  declarations: [ AppComponent, HelloComponent, WalletComponent, BitcoinComponent, NavbarComponent ],
  bootstrap:    [ AppComponent ],
  providers: [BitcoinService, LoggerService]
})
export class AppModule { }
