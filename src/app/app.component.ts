import { ChangeDetectionStrategy,Component, OnInit, Input } from '@angular/core';
import { UserService  } from './user.service';
import { FilterPipe} from './filter.pipe'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  @Input('data') meals: string[] = [];
    page: number = 1;
    
  title = 'customer';users:any;
  isMale:boolean=false;
  myFilter;
  constructor(private userService: UserService){
  
  }
  ngOnInit(){
    this.users = this.userService.getUsers()
  }

}

