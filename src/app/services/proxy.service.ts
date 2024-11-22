import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedServiceProxy {
  private _service: any;

  async getService() {
    if (!this._service) {
      const remoteModule = await import('host/SharedService');
      this._service = new remoteModule.SharedService();
    }
    return this._service;
  }
}
