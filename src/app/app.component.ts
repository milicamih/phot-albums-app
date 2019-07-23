import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
               <router-outlet></router-outlet>
               <div class="stop-spinner" id="spinner" #spinner>
                 <div class="loader"></div>
                </div>
              </div>`,
})
export class AppComponent {
  title = 'photo-album-page';
}
