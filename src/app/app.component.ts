import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Title, Meta } from '@angular/platform-browser';
import { LanguageService } from "src/app/services/language/language.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'amber-portfolio';

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private languageService: LanguageService
  ) {
  }
  ngOnInit(): void {

    this.languageService.initLanguage()

    this.titleService.setTitle("Amber Goswami | Python Developer | AI/ML developer | Software Developer");
    this.metaService.addTags([
      { name: 'keywords', content: 'Backend, Python Developer , AI/ML Developer , Software Engineer, software, developer' },
      { name: 'description', content: 'Sincere and hardworking Software Developer having expertise in Python, Backend Development, and AI-ML to drive impactful results.' },
    ]);
    
    AOS.init();


  }
}
