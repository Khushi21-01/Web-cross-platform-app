import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _storage: Storage | null = null;
  private readonly STORAGE_KEY = 'travel_memories';

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    this._storage = await this.storage.create();
  }

  // delete method
  async deleteMemory(memoryId: number): Promise<boolean> {
    try {
      const memories = await this.getMemories();
      const updatedMemories = memories.filter(m => m.id !== memoryId);
      await this._storage?.set(this.STORAGE_KEY, updatedMemories);
      return true;
    } catch (error) {
      console.error('Error deleting memory:', error);
      return false;
    }
  }

  async getMemories(): Promise<any[]> {
    return (await this._storage?.get(this.STORAGE_KEY)) || [];
  }

  async saveMemory(memory: any) {
    const memories = await this.getMemories();
    memories.unshift({
      ...memory,
      id: Date.now() 
    });
    await this._storage?.set(this.STORAGE_KEY, memories);
  }
  async clearMemories() {
    await this._storage?.remove(this.STORAGE_KEY);
  }
}