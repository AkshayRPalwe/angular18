import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.scss',
})
export class InvestmentResultsComponent {
  private investmentService = inject(InvestmentService);

  // constructor(private investmentService:InvestmentService){}

  // get results() {
  //   return this.investmentService.resultsData;
  // }

  // results = computed(() => this.investmentService.resultsData());
  // OR
  results = this.investmentService.resultsData.asReadonly();
}
