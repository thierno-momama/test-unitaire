import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AccoutingsComponent } from './accoutings/accoutings.component';
import { AppComponent } from './app.component';
import { CheckerService } from './shared/services/checker/checker.service';

declare global {
  namespace jasmine {
    interface Matchers<T> {
      toBeCorrect(): void;
    }
  }
}
describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let checkService: CheckerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  //créer sa propore logique de comparaison avec beforeEach
  beforeEach(() => {
    jasmine.addMatchers({
      toBeCorrect: () => {

        return {
          compare: (actual: number, expect: number) => {
            let response: { pass: boolean, message: string } = {} as any;
            response.pass = (actual < 5 && actual > 2);
            response.message = "ca ne fonctionne pas";
            return response;
          } 
        }
      }
    });
    checkService = TestBed.inject(CheckerService)
  });

  it('Should check if ap-accounting is present', () => {
    const element = fixture.debugElement;
    const accounting = element.query(By.css('app-accoutings'));
    expect(accounting).toBeTruthy();
  });

  it('Should be check if smaller than 5 and greater than 2', () => {
    expect(3).toBeCorrect()
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });
  it('name() Should be string', ()=> {
    expect(app.name).toBeInstanceOf(String);
  });
  describe('Describe chage age', () => {
    it('chageAge() Should be chageAge', () => {
      expect(app.age).toBe(1);
      app.changeAge();
      expect(app.age).toBe(12);
    });
  });

  describe('calc(...)', () => {
    it('Should mutiply two number correctly', () => {
      const resultat = app.calc(2,4);
      expect(resultat).toBe(8)
    });
    
    it('Should verify that isValidNumber was called', () => {
      let spyIsValidNumber: jasmine.Spy;
      let spyAge: jasmine.Spy = spyOnProperty(checkService, 'age', 'get');
      spyIsValidNumber = spyOn(checkService, 'isValidNumber').and.returnValue(true);

      const resultat = app.calc(2,4);
      expect(resultat).toBe(8)
      expect(spyIsValidNumber).toHaveBeenCalled();
      expect(spyIsValidNumber).toHaveBeenCalledTimes(1);
      expect(spyIsValidNumber).toHaveBeenCalledWith(2);
      expect(spyAge).toHaveBeenCalled();
    });
  });

});
