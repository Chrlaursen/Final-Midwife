import {Component, ViewChild} from '@angular/core';
import { Observable } from 'rxjs'
import { AngularFireStorage } from 'angularfire2/storage'
import { DashboardService } from '../../../services/dashboard/dashboard.service';
import { AuthService } from '../../../core/auth.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-dashboard-profile',
  templateUrl: './dashboard-profile.component.html',
  styleUrls: ['./dashboard-profile.component.css']
})


export class DashboardProfileComponent  {
  displayedColumns = [ 'name', 'color', 'id'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    // Create 100 users
    const users: UserData[] = [];
    for (let i = 1; i <= 4; i++) { users.push(createNewUser(i)); }

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {


  return {
    id: id.toString(),
    name: NAMES[Math.round(Math.random() * (NAMES.length - 1))],
  
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}

/** Constants used to fill up our data base. */
const COLORS = ['28-05-18', '30-05-18', '31-05-18', '31-05-18'];

  const NAMES = ['Samlet antal graviditetsundersøgelser, hvor du har været aktivt deltagende', 'Samlet antal graviditetsundersøgelser, hvor du har været aktivt deltagende', 'Fødselsomsorg - uden at anvende håndgreb til modtagelse af barnet'
  , 'Fødselsomsorg -at anvende håndgreb til modtagelse af barnet -'];



export interface UserData {
  id: string;
  name: string;
 
  color: string;
}
    
  

