import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../../services/transactions.service';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.css']
})
export class TransactionsListComponent implements OnInit {

  transactions: any = [];

  constructor(private transactionsService: TransactionsService) { }

  ngOnInit() {

    this.transactionsService.getTransactions().subscribe(
      res => {
        this.transactions = res
      },
      err => console.error(err)

    )
  }

}
