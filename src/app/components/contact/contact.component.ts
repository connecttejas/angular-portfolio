import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Clipboard } from '@angular/cdk/clipboard';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, ClipboardModule, MatSnackBarModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  email: string = 'tvd999@yahoo.in';
  phone: string = '8657764640';

  constructor(private clipboard: Clipboard, private snackBar: MatSnackBar) {}

  copyToClipboard(value: string, type: 'email' | 'phone') {
    this.clipboard.copy(value);
    const msg = type === 'email' ? 'Email copied' : 'Contact number copied';
    this.snackBar.open(msg, '', { duration: 1500, verticalPosition: 'top' });
  }
}
