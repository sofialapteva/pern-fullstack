import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: "Freezer"},
            {id: 2, name: "Phone"},
            {id: 3, name: "Radio"},
            {id: 4, name: "E-book"},
            {id: 5, name: "Keyboard"},
            {id: 6, name: "Mouse"},
            {id: 7, name: "Charger"},
        ];
        this._selectedType = {};

        this._brands = [
            {id: 1, name: "Apple"},
            {id: 2, name: "Samsung"},
            {id: 3, name: "Lenovo"},
            {id: 4, name: "Asus"},
        ];
        this._selectedBrand = {};

        this._devices = [
            {
                id: 1,
                name: "IPhone10",
                price: 20000,
                rating: 5,
                img: "https://cdn.multitronic.fi/images/prod/6/0/MLPK3KG-A-1.jpg",
            },
            {
                id: 2,
                name: "IPhone10",
                price: 20000,
                rating: 5,
                img: "https://cdn.multitronic.fi/images/prod/6/0/MLPK3KG-A-1.jpg",
            },
            {
                id: 3,
                name: "IPhone10",
                price: 20000,
                rating: 5,
                img: "https://cdn.multitronic.fi/images/prod/6/0/MLPK3KG-A-1.jpg",
            },
            {
                id: 4,
                name: "IPhone10",
                price: 20000,
                rating: 5,
                img: "https://cdn.multitronic.fi/images/prod/6/0/MLPK3KG-A-1.jpg",
            },
            {
                id: 5,
                name: "IPhone10",
                price: 20000,
                rating: 5,
                img: "https://cdn.multitronic.fi/images/prod/6/0/MLPK3KG-A-1.jpg",
            },
        ];
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
        this.brands = brands;
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand;
    }
    setDevices(brands) {
        this.brands = brands;
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
