import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stockinfo',
  templateUrl: './stockinfo.component.html',
  styleUrls: ['./stockinfo.component.css']
})
export class StockinfoComponent implements OnInit {


  stockHoldings = [
    {stockId:101, stockName:'RIL',stockCategory:'Petro Chem', purchasePrice:1900, currentPrice:2600, qty:200},
    {stockId:102, stockName:'SBI',stockCategory:'Banking', purchasePrice:400, currentPrice:600, qty:200},
    {stockId:103, stockName:'HCL',stockCategory:'IT', purchasePrice:1400, currentPrice:1100, qty:200},
    {stockId:104, stockName:'INFY',stockCategory:'IT', purchasePrice:1900, currentPrice:1600, qty:200},
    {stockId:105, stockName:'Ashok',stockCategory:'Automobiles', purchasePrice:120, currentPrice:145, qty:200},
    {stockId:106, stockName:'TataPower',stockCategory:'Power and Energy', purchasePrice:198, currentPrice:200, qty:200},
  ]

    totalStocks = 0;
    totalInvestmentValue = 0;
    totalCurrentValue = 0;
    isInProfitOrLoss = true;

    getSummary()
    {
      for (let index = 0; index < this.stockHoldings.length; index++) {
        console.log(this.totalStocks);
        this.totalStocks = this.totalStocks + 1;
        
        this.totalInvestmentValue = this.totalInvestmentValue + this.stockHoldings[index].purchasePrice * this.stockHoldings[index].qty;
        this.totalCurrentValue = this.totalCurrentValue + this.stockHoldings[index].currentPrice * this.stockHoldings[index].qty;       
        
      }
      if(this.totalInvestmentValue < this.totalCurrentValue)
      {
        this.isInProfitOrLoss = false;
      }
    }

  constructor() { }

  ngOnInit(): void {
  }

}
