import { Component } from '@angular/core';
import { HeaderComponent } from './components/template/header/header.component'
import { FooterComponent } from './components/template/footer/footer.component'
import { NavComponent } from './components/template/nav/nav.component'
import { RedDirective } from './directives/red.directive';
import { ForDirective } from './directives/for.directive';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, NavComponent, FooterComponent, RedDirective, ForDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
  title = 'Angular';
}
