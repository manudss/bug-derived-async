import { Component, computed, EnvironmentInjector, input, InputSignal, model, OnInit, output, runInInjectionContext, Signal } from '@angular/core';
import { Datasource, listItem } from '../services/Datasource';
import { derivedAsync } from 'ngxtension/derived-async';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {

  datasource: InputSignal<Datasource | undefined> = input<Datasource>();
  greetings = input<string>('', {
    alias: 'greeting',
  });
  name = model.required<string>();
  submit = output<string>();

  greetingMessage = computed(() => `${this.greetings()} ${this.name()}`);


  public listItems: Signal<listItem[] | undefined> | undefined;

  constructor(private injector: EnvironmentInjector) {
    
  }

  ngOnInit(): void {
    this.listItems = derivedAsync(() => this.datasource()?.selectList(), {initialValue: [], injector: this.injector});
  }


}
