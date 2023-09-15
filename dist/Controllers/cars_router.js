"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const cars = [
    {
        company: "Tesla",
        model: "Model 3",
        price: 39990,
        batteryRange: 263,
        chargingSpeed: 250,
        ImagePath: 'assets/cars/kia ev6 23.png',
        logo: 'assets/Branding/kia.png'
    },
    {
        company: "Nissan",
        model: "Leaf",
        price: 34999,
        batteryRange: 150,
        chargingSpeed: 100,
        ImagePath: 'assets/cars/kia ev6 23.png',
        logo: 'assets/Branding/kia.png'
    },
    {
        company: "Chevrolet",
        model: "Bolt EV",
        price: 36620,
        batteryRange: 259,
        chargingSpeed: 100,
        ImagePath: 'assets/cars/kia ev6 23.png',
        logo: 'assets/Branding/kia.png'
    },
    {
        company: "Ford",
        model: "Mustang Mach-E",
        price: 42995,
        batteryRange: 211,
        chargingSpeed: 150,
        ImagePath: 'assets/cars/kia ev6 23.png',
        logo: 'assets/Branding/kia.png'
    },
    {
        company: "Hyundai",
        model: "Kona Electric",
        price: 37920,
        batteryRange: 258,
        chargingSpeed: 100,
        ImagePath: 'assets/cars/kia ev6 23.png',
        logo: 'assets/Branding/kia.png'
    },
    {
        company: "Volkswagen",
        model: "ID.4",
        price: 39995,
        batteryRange: 250,
        chargingSpeed: 125,
        ImagePath: 'assets/cars/kia ev6 23.png',
        logo: 'assets/Branding/kia.png'
    },
    {
        company: "BMW",
        model: "i3",
        price: 44450,
        batteryRange: 153,
        chargingSpeed: 100,
        ImagePath: 'assets/cars/kia ev6 23.png',
        logo: 'assets/Branding/kia.png'
    },
    {
        company: "Audi",
        model: "e-tron",
        price: 65900,
        batteryRange: 222,
        chargingSpeed: 150,
        ImagePath: 'assets/cars/kia ev6 23.png',
        logo: 'assets/Branding/kia.png'
    },
    {
        company: "Jaguar",
        model: "I-PACE",
        price: 69900,
        batteryRange: 234,
        chargingSpeed: 100,
        ImagePath: 'assets/cars/kia ev6 23.png',
        logo: 'assets/Branding/kia.png'
    },
    {
        company: "Kia",
        model: "Soul EV",
        price: 34595,
        batteryRange: 243,
        chargingSpeed: 100,
        ImagePath: 'assets/cars/kia ev6 23.png',
        logo: 'assets/Branding/kia.png'
    },
    {
        company: "Porsche",
        model: "Taycan",
        price: 79800,
        batteryRange: 200,
        chargingSpeed: 270,
        ImagePath: 'assets/cars/kia ev6 23.png',
        logo: 'assets/Branding/kia.png'
    },
    {
        company: "Rivian",
        model: "R1T",
        price: 67900,
        batteryRange: 314,
        chargingSpeed: 300,
        ImagePath: 'assets/cars/kia ev6 23.png',
        logo: 'assets/Branding/kia.png'
    },
    {
        company: "Lucid",
        model: "Air",
        price: 77900,
        batteryRange: 406,
        chargingSpeed: 924,
        ImagePath: 'assets/cars/kia ev6 23.png',
        logo: 'assets/Branding/kia.png'
    },
    {
        company: "Volvo",
        model: "XC40 Recharge",
        price: 53995,
        batteryRange: 208,
        chargingSpeed: 150,
        ImagePath: 'assets/cars/kia ev6 23.png',
        logo: 'assets/Branding/kia.png'
    },
    {
        company: "Mazda",
        model: "MX-30",
        price: 33995,
        batteryRange: 100,
        chargingSpeed: 50,
        ImagePath: 'assets/cars/kia ev6 23.png',
        logo: 'assets/Branding/kia.png'
    },
    {
        company: "Rimac",
        model: "C_Two",
        price: 2000000,
        batteryRange: 340,
        chargingSpeed: 250,
        ImagePath: 'assets/cars/kia ev6 23.png',
        logo: 'assets/Branding/kia.png'
    },
    {
        company: "Audi",
        model: "e-tron GT",
        price: 99500,
        batteryRange: 238,
        chargingSpeed: 270,
        ImagePath: 'assets/cars/kia ev6 23.png',
        logo: 'assets/Branding/kia.png'
    }, {
        company: "Tesla",
        model: "Model 3",
        price: 39990,
        batteryRange: 263,
        chargingSpeed: 250,
        ImagePath: 'assets/cars/kia ev6 23.png',
        logo: 'assets/Branding/kia.png'
    },
    {
        company: "Nissan",
        model: "Leaf",
        price: 34999,
        batteryRange: 150,
        chargingSpeed: 100,
        ImagePath: 'assets/cars/kia ev6 23.png',
        logo: 'assets/Branding/kia.png'
    },
    {
        company: "Chevrolet",
        model: "Bolt EV",
        price: 36620,
        batteryRange: 259,
        chargingSpeed: 100,
        ImagePath: 'assets/cars/kia ev6 23.png',
        logo: 'assets/Branding/kia.png'
    },
    {
        company: "Ford",
        model: "Mustang Mach-E",
        price: 42995,
        batteryRange: 211,
        chargingSpeed: 150,
        ImagePath: 'assets/cars/kia ev6 23.png',
        logo: 'assets/Branding/kia.png'
    },
    {
        company: "Hyundai",
        model: "Kona Electric",
        price: 37920,
        batteryRange: 258,
        chargingSpeed: 100,
        ImagePath: 'assets/cars/kia ev6 23.png',
        logo: 'assets/Branding/kia.png'
    },
    {
        company: "Volkswagen",
        model: "ID.4",
        price: 39995,
        batteryRange: 250,
        chargingSpeed: 125,
        ImagePath: 'assets/cars/kia ev6 23.png',
        logo: 'assets/Branding/kia.png'
    },
    {
        company: "BMW",
        model: "i3",
        price: 44450,
        batteryRange: 153,
        chargingSpeed: 100,
        ImagePath: 'assets/cars/kia ev6 23.png',
        logo: 'assets/Branding/kia.png'
    },
    {
        company: "Audi",
        model: "e-tron",
        price: 65900,
        batteryRange: 222,
        chargingSpeed: 150,
        ImagePath: 'assets/cars/kia ev6 23.png',
        logo: 'assets/Branding/kia.png'
    },
    {
        company: "Jaguar",
        model: "I-PACE",
        price: 69900,
        batteryRange: 234,
        chargingSpeed: 100,
        ImagePath: 'assets/cars/kia ev6 23.png',
        logo: 'assets/Branding/kia.png'
    },
    {
        company: "Kia",
        model: "Soul EV",
        price: 34595,
        batteryRange: 243,
        chargingSpeed: 100,
        ImagePath: 'assets/cars/kia ev6 23.png',
        logo: 'assets/Branding/kia.png'
    },
    {
        company: "Porsche",
        model: "Taycan",
        price: 79800,
        batteryRange: 200,
        chargingSpeed: 270,
        ImagePath: 'assets/cars/kia ev6 23.png',
        logo: 'assets/Branding/kia.png'
    },
    {
        company: "Rivian",
        model: "R1T",
        price: 67900,
        batteryRange: 314,
        chargingSpeed: 300,
        ImagePath: 'assets/cars/kia ev6 23.png',
        logo: 'assets/Branding/kia.png'
    },
    {
        company: "Lucid",
        model: "Air",
        price: 77900,
        batteryRange: 406,
        chargingSpeed: 924,
        ImagePath: 'assets/cars/kia ev6 23.png',
        logo: 'assets/Branding/kia.png'
    },
    {
        company: "Volvo",
        model: "XC40 Recharge",
        price: 53995,
        batteryRange: 208,
        chargingSpeed: 150,
        ImagePath: 'assets/cars/kia ev6 23.png',
        logo: 'assets/Branding/kia.png'
    },
    {
        company: "Mazda",
        model: "MX-30",
        price: 33995,
        batteryRange: 100,
        chargingSpeed: 50,
        ImagePath: 'assets/cars/kia ev6 23.png',
        logo: 'assets/Branding/kia.png'
    },
    {
        company: "Rimac",
        model: "C_Two",
        price: 2000000,
        batteryRange: 340,
        chargingSpeed: 250,
        ImagePath: 'assets/cars/kia ev6 23.png',
        logo: 'assets/Branding/kia.png'
    },
    {
        company: "Audi",
        model: "e-tron GT",
        price: 99500,
        batteryRange: 238,
        chargingSpeed: 270,
        ImagePath: 'assets/cars/kia ev6 23.png',
        logo: 'assets/Branding/kia.png'
    }
];
const car_dao = require('../ORM/generic_mongo_dao');
function initCarsCollection() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield car_dao.removeCollectionData('CarsApp', 'Cars');
        }
        catch (err) {
            console.log("the DB is already empty");
        }
        yield car_dao.insertData('CarsApp', 'Cars', cars);
    });
}
//init cars DB with list data
router.get('/InitDB', (_req, _res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield initCarsCollection();
        _res.status(200);
    }
    catch (err) {
        _res.status(500).json({ error: 'Could not init cars DB.' });
    }
}));
//Get All cars
router.get('/All', (_req, _res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cars = yield car_dao.getAllCollection('CarsApp', 'Cars');
        _res.status(200).json(cars);
    }
    catch (err) {
        console.log(err);
        _res.status(500).json({ error: 'Could not fetch all cars.' });
    }
}));
//returns all cars by the following format company2Cars: Map<string, Car[]>
router.get('/All/SearchFormat', (_req, _res) => __awaiter(void 0, void 0, void 0, function* () {
    const cars = yield car_dao.getAllCollection('CarsApp', 'Cars');
    let result = new Map();
    cars.forEach(car => {
        var _a;
        if (result.get(car.company) !== undefined && result.get(car.company) !== null) {
            (_a = result.get(car.company)) === null || _a === void 0 ? void 0 : _a.push(car);
        }
        else {
            result.set(car.company, [car]);
        }
    });
    _res.send(Object.fromEntries(result));
}));
router.get('/ID/:id', (_req, _res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = _req.params.id;
    _res.send(yield car_dao.getObjById('CarsApp', 'Cars', id));
}));
router.delete('/ID/:id', (_req, _res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = _req.params.id;
    yield car_dao.deletObjById('CarsApp', 'Cars', id);
    _res.send("Done- delete by ID:" + id);
}));
router.post('/Add', (_req, _res) => __awaiter(void 0, void 0, void 0, function* () {
    const car = _req.body;
    let dummy_car = {
        company: "Audi",
        model: "e-tron GT",
        price: 99500,
        batteryRange: 238,
        chargingSpeed: 270
    };
    let insert_command = true;
    Object.keys(dummy_car).forEach(key => {
        if (!Object.keys(car).includes(key)) {
            insert_command = false;
        }
    });
    if (insert_command) {
        car_dao.insertOne('CarsApp', 'Cars', car);
    }
    else {
        return 'please check that all keys exist in car object! ' + Object.keys(dummy_car);
    }
}));
module.exports = router;
//# sourceMappingURL=cars_router.js.map