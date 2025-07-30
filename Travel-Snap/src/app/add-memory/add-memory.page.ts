import { Component } from '@angular/core';
import { CameraService } from '../services/camera.service';
import { LocationService } from '../services/location.service';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-memory',
  templateUrl: './add-memory.page.html',
  standalone: false,
  styleUrls: ['./add-memory.page.scss']
})
export class AddMemoryPage {
  memory = {
    title: '',
    description: '',
    photo: '',
    location: null as any,
    date: new Date().toISOString()
  };

  constructor(
    private cameraService: CameraService,
    private locationService: LocationService,
    private dataService: DataService,
    private router: Router
  ) {}

  async takePhoto() {
    try {
      this.memory.photo = await this.cameraService.takePhoto();
    } catch (error) {
      console.error('Camera error:', error);
    }
  }

  async getLocation() {
    try {
      this.memory.location = await this.locationService.getCurrentLocation();
    } catch (error) {
      console.error('Location error:', error);
    }
  }

  async saveMemory() {
    if (!this.memory.title.trim()) {
      alert('Please add a title');
      return;
    }
    
    await this.dataService.saveMemory(this.memory);
    this.router.navigate(['/home']);
  }
}