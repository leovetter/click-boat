import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'clickboat';

  constructor(private router: Router,
              private location: Location,
              private translate: TranslateService) {}

  ngOnInit(): void {
    
    if(this.location.path() === '') {
      this.router.navigateByUrl('boat/home');
    }

    this.translate.addLangs(['fr', 'en']);
    this.translate.setDefaultLang('fr');
    this.translate.use('fr');
  }
}
