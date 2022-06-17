import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [];
        this._selectedType = {};
        this._brands = [];
        this._selectedBrand = {};
        this._devices = [];
        this._selectedDevice = {};
        this._page = 1;
        this._totalCount = 0;
        this._limit = 4;
        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;
    }
    setSelectedType(type) {
        this._page = 1;
        this._selectedType = type;
    }

    setBrands(brands) {
        this._page = 1;
        this._brands = brands;
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand;
    }
    setDevices(devices) {
        this._devices = devices;
    }
    setSelectedDevice(device) {
        this._selectedDevice = device;
    }

    setSelectedPage(page) {
        this._page = page;
    }
    setTotalCount(totalCount) {
        this._totalCount = totalCount;
    }
    setLimit(limit) {
        this._limit = limit;
    }

    get types() {
        return this._types;
    }
    get brands() {
        return this._brands;
    }
    get devices() {
        return this._devices;
    }
    get selectedType() {
        return this._selectedType;
    }
    get selectedBrand() {
        return this._selectedBrand;
    }
    get selectedDevice() {
        return this._selectedDevice;
    }

    get selectedPage() {
        return this._page;
    }
    get totalCount() {
        return this._totalCount;
    }
    get limit() {
        return this._limit;
    }
}
