import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { ChartComponent, NgApexchartsModule } from 'ng-apexcharts';
import {
  UntypedFormArray,
  UntypedFormControl,
  UntypedFormGroup,
} from '@angular/forms';
import { SeriesPipe } from './series.pipe';
import { SharedService } from 'shared';
import { AppService } from '../services/proxy.service';

@Component({
  standalone: true,
  imports: [CommonModule, NgApexchartsModule, SeriesPipe],
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  @ViewChild('chart', { static: true }) chart: ChartComponent;

  private service = inject(AppService);
  private sharedService = inject(SharedService);
  user: { name: string; role: string };
  accesses = '';
  form: UntypedFormGroup;

  ngOnInit() {
    this.sharedService.user$.subscribe((v) => (this.user = v));
    this.sharedService.acceses.subscribe((v) => (this.accesses = v));
    this.service.getAccess().subscribe((s) => console.log({ s }));

    this.form = new UntypedFormGroup({
      title: new UntypedFormControl('Basic Chart'),
      type: new UntypedFormControl('line'),
      height: new UntypedFormControl(350),
      series: new UntypedFormArray([
        new UntypedFormGroup({
          name: new UntypedFormControl('Series'),
          type: new UntypedFormControl('line'),
          data: new UntypedFormArray([
            new UntypedFormControl(this.getRandomArbitrary(0, 100)),
            new UntypedFormControl(this.getRandomArbitrary(0, 100)),
            new UntypedFormControl(this.getRandomArbitrary(0, 100)),
            new UntypedFormControl(this.getRandomArbitrary(0, 100)),
          ]),
        }),
      ]),
      xaxis: new UntypedFormArray([
        new UntypedFormControl('Jan'),
        new UntypedFormControl('Feb'),
        new UntypedFormControl('Mar'),
        new UntypedFormControl('Apr'),
      ]),
    });
  }

  onClick() {
    this.sharedService.loadGetAccess();
  }

  addValue() {
    (<UntypedFormArray>this.form.get('series')).controls.forEach((c) => {
      (<UntypedFormArray>c.get('data')).push(
        new UntypedFormControl(this.getRandomArbitrary(0, 100))
      );
    });
    (<UntypedFormArray>this.form.get('xaxis')).push(
      new UntypedFormControl('Jan')
    );
  }

  addSeries() {
    (<UntypedFormArray>this.form.get('series')).push(
      new UntypedFormGroup({
        name: new UntypedFormControl('Series'),
        type: new UntypedFormControl('line'),
        data: new UntypedFormArray([
          new UntypedFormControl(this.getRandomArbitrary(0, 100)),
          new UntypedFormControl(this.getRandomArbitrary(0, 100)),
          new UntypedFormControl(this.getRandomArbitrary(0, 100)),
          new UntypedFormControl(this.getRandomArbitrary(0, 100)),
        ]),
      })
    );
  }

  onChartReady(event: any) {
    console.log('Chart ready', event);
  }

  private getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }
}
