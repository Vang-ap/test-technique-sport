import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LeagueComponent } from './components/league/league.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PlayerComponent } from './components/player/player.component';
import { TeamComponent } from './components/team/team.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'leagues',
    component: LeagueComponent
  },
  {
    path: 'teams/:leagueId',
    component: TeamComponent
  },
  {
    path: 'players/:teamId',
    component: PlayerComponent
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
