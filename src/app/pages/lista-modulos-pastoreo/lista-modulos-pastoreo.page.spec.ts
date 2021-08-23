import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaModulosPastoreoPage } from './lista-modulos-pastoreo.page';

describe('ListaModulosPastoreoPage', () => {
  let component: ListaModulosPastoreoPage;
  let fixture: ComponentFixture<ListaModulosPastoreoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaModulosPastoreoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaModulosPastoreoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
