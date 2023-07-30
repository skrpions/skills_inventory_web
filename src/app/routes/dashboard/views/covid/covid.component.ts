import { Component, ElementRef, NgZone, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { DashboardService } from '../../dashboard.service';
import { SettingsService } from '@core';
import { CovidApplication } from '../../application/covid-application';
import { GraphEntity } from '../../domain/entities/graph-entity';
import { ExternalEntity } from '../../domain/entities/external-entity';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.scss'],
})
export class CovidComponent {
  @ViewChild('chartCovid', { static: true }) chartCovidElementRef!: ElementRef;

  confirmedCases: number[] = [];
  countryNames: string[] = [];

  //charts!: any;
  charts: any = this.dashboardSrv.getChartsCovid();
  chartsx = this.dashboardSrv.getChartsCovid();
  chartCovid: any;

  data: GraphEntity[] = [];

  notifySubscription!: Subscription;

  constructor(
    private ngZone: NgZone,
    private dashboardSrv: DashboardService,
    private settings: SettingsService,
    private readonly covidApplication: CovidApplication
  ) {}

  ngOnInit() {
    this.notifySubscription = this.settings.notify.subscribe(res => {});
  }

  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => this.initChart());
  }

  ngOnDestroy() {
    if (this.chartCovid) {
      this.chartCovid?.destroy();
    }

    this.notifySubscription.unsubscribe();
  }

  initChart() {
    this.covidApplication.getGraph().subscribe(data => {
      data.map(item => {
        this.countryNames.push(item.country);
        this.confirmedCases.push(item.confirmed);
      });
    });

    // console.log('this.charts.series', this.charts.series[0].data);
    // console.log('this.charts.categories', this.charts.xaxis.categories);

    this.charts.series[0].data = this.confirmedCases;
    this.charts.xaxis.categories = this.countryNames;

    this.chartCovid = new ApexCharts(this.chartCovidElementRef.nativeElement, this.charts);

    this.chartCovid.render();
  }
}
