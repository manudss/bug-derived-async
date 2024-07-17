import { Observable, of } from "rxjs";

export interface listItem {
  title: string;
  link: string;
}

export class Datasource {

  constructor() { }

  selectList(): Observable<listItem[]> {
    return of( [{ title: 'Explore the Docs', link: 'https://angular.dev' },
      { title: 'Learn with Tutorials', link: 'https://angular.dev/tutorials' },
      { title: 'CLI Docs', link: 'https://angular.dev/tools/cli' },
      { title: 'Angular Language Service', link: 'https://angular.dev/tools/language-service' },
      { title: 'Angular DevTools', link: 'https://angular.dev/tools/devtools' }]);
  }

}
