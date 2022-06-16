import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [];
        this._selectedType = {};

        this._brands = [];
        this._selectedBrand = {};

        this._devices = [];
        this._selectedDevice = {};
        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;
    }
    setSelectedType(type) {
        this._selectedType = type;
    }

    setBrands(brands) {
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
}
