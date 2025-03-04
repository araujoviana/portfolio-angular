import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactsComponent } from './components/contacts/contacts.component';

export const routes: Routes = [
    {path:'', title:'Welcome!', component: HomeComponent},
    {path:'about', title:'About Me', component: AboutComponent},
    {path:'projects', title:'Projects', component: ProjectsComponent},
    {path:'skills', title:'Skills', component: SkillsComponent},
    {path:'contacts', title:'Let\'s connect!', component: ContactsComponent},
    {path:'**', title:'Welcome!', component: HomeComponent},
];
