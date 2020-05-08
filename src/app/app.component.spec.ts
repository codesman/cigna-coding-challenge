import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {Store} from '@ngrx/store';

describe('AppComponent', () => {
  let appComponent: AppComponent;
  let storeSpy: jasmine.SpyObj<Store>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('Store', ['dispatch']);

    TestBed.configureTestingModule({
      providers: [
        AppComponent,
        {provide: Store, useValue: spy}
      ]
    });

    appComponent = TestBed.inject(AppComponent);
    storeSpy = TestBed.inject(Store) as jasmine.SpyObj<Store>;
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Cigna Coding Challenge');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(compiled.title);
  });
});
