import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Jewelry } from './jewelry.model';
import { DataStorageService } from '../shared/data-storage.service';
import { JewelryService } from './jewelry.service';
@Injectable({ providedIn: 'root' })
export class JewelryResolverService implements Resolve<Jewelry[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private jewelryService: JewelryService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const jewelrys = this.jewelryService.getJewelrys();

    if (jewelrys.length === 0) {
      return this.dataStorageService.fetchjewelrys();
    } else {
      return jewelrys;
    }
  }
}
