import { ComponentFixture, TestBed } from '@angular/core/testing';
import {render, screen, fireEvent, RenderResult, within} from '@testing-library/angular';

import { ListComponent } from './list.component';
import { Datasource } from '../services/Datasource';

const datasource = new Datasource();
describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let result: RenderResult<ListComponent, ListComponent>;

  beforeEach(async () => {
    result = await render(ListComponent, {
      componentInputs: {datasource: datasource}
    });

    fixture = result.fixture;
    component = result.fixture.componentInstance;


    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    console.log('Debug', result.debug);
    result.debug()
  });

  it('Should display list :', () => {
    expect(screen.getByText('Explore the Docs')).toBeTrue();
    const computedValue = within(screen.getByTestId('computed-value'));
    expect(computedValue.getByText(/hello world/i)).not.toBeNull();
  })
});

