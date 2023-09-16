import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent,AboutComponent,ContactComponent,ExperienceComponent,EducationComponent,SkillsComponent,ReferencesComponent } from './pages';

const routes: Routes = [{
  path: '',
  component: AboutComponent
},
{
  path: 'experience',
  component: ExperienceComponent
},
{
  path: 'education',
  component: EducationComponent
},
{
  path: 'skill',
  component: SkillsComponent
},
{
  path: 'testimonials',
  component: ReferencesComponent
},
{
  path: 'contact',
  component: ContactComponent
},
{
  path: 'projects',
  component: ProjectsComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
