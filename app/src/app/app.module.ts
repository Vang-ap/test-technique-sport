import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './pipes/search.pipe';
import { LeagueItemComponent } from './components/league-item/league-item.component';
import { TeamComponent } from './components/team/team.component';
import { TeamItemComponent } from './components/team-item/team-item.component';
import { PlayerComponent } from './components/player/player.component';
import { PlayerItemComponent } from './components/player-item/player-item.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    SearchPipe,
    LeagueItemComponent,
    TeamComponent,
    TeamItemComponent,
    PlayerComponent,
    PlayerItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
