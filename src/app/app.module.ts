import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { ViewChildTestComponent } from './viewchildtest.component';
import { Viewchild1Component } from './viewchild1/viewchild1.component';
import { ViewChildTest1Component } from './viewchildtest1.component';
import { ViewchildrenComponent } from './viewchildren/viewchildren.component';
import { ViewChildren1Component } from'./viewchildren1.component';
import { ContentprojectionComponent } from './contentprojection/contentprojection.component';
import {ContentProjectionTestComponent} from './contentprojectiontest.component';
import { Contentchild1Component } from './contentchild1/contentchild1.component';
import { ContentChildTest } from './contentchildtest.component';
import { MessageComponent } from './contentchild1/message.component';
  
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    LifecycleComponent,
    ViewchildComponent,
    ViewChildTestComponent,
    Viewchild1Component,
    ViewChildTest1Component,
    ViewchildrenComponent,
    ViewChildren1Component,
    ContentprojectionComponent,
    ContentProjectionTestComponent,
    Contentchild1Component,
    ContentChildTest,
    MessageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ContentChildTest]
})
export class AppModule { }
