import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, UrlMatcher, UrlSegment } from '@angular/router';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AComponent,
    BComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { matcher: endsWith('a'), component: AComponent },
      { matcher: endsWith('b'), component: BComponent },
  ], { relativeLinkResolution: 'legacy' })
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/angular' }],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function endsWith(prefix: string): UrlMatcher {
  return (url: UrlSegment[]) => {
      const fullUrl = url.map(u => u.path).join('/');
      if (fullUrl.endsWith(prefix)) {
          return ({consumed: url});
      }
      return null;
  };
}
