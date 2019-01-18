import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroComponent } from './components/hero/hero.component';
import { SearchHeroComponent } from './components/search-hero/search-hero.component';


const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent},
    { path: 'heroes', component: HeroesComponent},
    { path: 'hero/:id', component: HeroComponent},
    { path: 'searchhero/:name', component: SearchHeroComponent},
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
