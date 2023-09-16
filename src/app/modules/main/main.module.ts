import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import {LoaderComponent, ProjectsComponent,AboutComponent,ExperienceComponent,EducationComponent,SkillsComponent,ContactComponent,ReferencesComponent } from './pages/index';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ReferencesComponent,
    ContactComponent,
    ProjectsComponent,
    LoaderComponent,
    
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class MainModule { }
