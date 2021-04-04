import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  edit: boolean = false;

  constructor(private transactionService: TransactionsService, private router: Router, private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {

    const params = this.activatedRoute.snapshot.params;
    if(params.id) {
      this.transactionService.getTransaction(params.id).subscribe(
        res => {
          console.log(res);
          this.transaction = res['data'];
          this.edit = true;
      },
        err => console.error(err)
      )
    }
  }

  saveNewTransaction() {
    this.transactionService.saveTransaction(this.transaction).subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/transactions'])
      },
      err => console.error(err)
    )
  }

  updateTransaction() {
    this.transactionService.updateTransaction(this.transaction.id, this.transaction).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/transactions']);
      },
      err => console.error(err)
    )

  }

}
