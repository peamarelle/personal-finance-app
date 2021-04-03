import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../models/Transactions'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  API_URI: String = 'http://localhost:3000/api/v1';

  constructor(private http: HttpClient) { }

  getTransactions() {
    return this.http.get(`${this.API_URI}/money`);
  }

  getTransaction(id: number) {
    return this.http.get(`${this.API_URI}/money/${id}`);
  }

  deleteTransaction(id: number) {
    return this.http.delete(`${this.API_URI}/money/${id}`);
  }

  updateTransaction(id: number, transaction: Transaction) {
    return this.http.put(`${this.API_URI}/money/${id}`, transaction);
  }

  saveTransaction(transaction: Transaction) {
    return this.http.post(`${this.API_URI}/money`, transaction);
  }

  getBallance() {
    return this.http.get(`${this.API_URI}/money/balance`);
  }

}
