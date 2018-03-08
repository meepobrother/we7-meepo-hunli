import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';
import { We7RouterModule } from 'meepo-we7-router';
import { routes, components } from './routes';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ...components
  ],
  imports: [
    BrowserModule,
    We7RouterModule.forRoot(routes),
    HttpClientModule,
    NgZorroAntdModule.forRoot(),
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '/'
  }],
  entryComponents: [
    ...components
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
