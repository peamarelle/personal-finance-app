import { Component, HostBinding, OnInit } from '@angular/core';
import { Transaction } from 'src/app/models/Transactions';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-transactions-form',
  templateUrl: './transactions-form.component.html',
  styleUrls: ['./transactions-form.component.css']
})
export class TransactionsFormComponent implements OnInit {

  @HostBinding('class') classes = 'row'

  transaction: Transaction = {
    id: 0,
    amount: 0,
    concept: '',
    type: '',
    date: new Date()
  };

  constructor(private transactionService: TransactionsService ) { }

  ngOnInit(): void {
  }

  saveNewTransaction() {
    console.log(this.transaction);
  }

}
