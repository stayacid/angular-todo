import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class SnackService {
  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, duration?: number) {
    const isDuration = duration ? { duration } : null;
    this._snackBar.open(message, null, isDuration);
  }
}
