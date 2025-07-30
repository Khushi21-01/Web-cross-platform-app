import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  standalone: false,
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  memories: any[] = [];

  constructor(private dataService: DataService) {}

  async ngOnInit() {
    await this.loadMemories();
  }

  async ionViewWillEnter() {
    await this.loadMemories();
  }
  private async loadMemories() {
    this.memories = await this.dataService.getMemories();
  }
  

  trackByFn(index: number, item: any): number {
    return item.id || index;
  }





  

}



