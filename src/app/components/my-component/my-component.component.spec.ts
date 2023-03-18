import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { API_URL } from 'src/app/interfaces/constants';
import { UserService } from 'src/app/services/user.service';

import { MyComponentComponent } from './my-component.component';

describe('MyComponentComponent', () => {
  let component: MyComponentComponent;
  let fixture: ComponentFixture<MyComponentComponent>;
  //#1
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyComponentComponent ],
      //#3
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
    //#2
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  //#4
  it('Should be return a user result', () => {
    service.getUser().subscribe(result => {
      expect(result).toBeTruthy();
      expect(result.results).toBeTruthy();
      expect(result.results.length).toEqual(1);
      console.log('Result verified');

      const req = httpMock.expectOne(API_URL);
      expect(req.request.method).toBe('GET');
      req.flush({
        results: [
          {
            name: {
              title: 'Mr',
              first: 'Peter',
              last: 'Parker'
            }
          }
        ]
      });

    })
  });
});
