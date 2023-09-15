import express from 'express';
import * as ORM from '../ORM/generic_mongo_dao';
const router = express.Router();


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
]

async function initCarsCollection() {
  try {
    await ORM.removeCollectionData( 'Cars');
    await ORM.insertData('Cars', cars);
  }
  catch (err) {
    console.log("the DB is already empty")
  }
}


//init cars DB with list data
router.get('/InitDB', async (_req: any, _res: any) => {
  try {
    await initCarsCollection();
    _res.status(200)
  } catch (err) {
    _res.status(500).json({ error: 'Could not init cars DB.' });
  }
});

//Get All cars
router.get('/All', async (_req: any, _res: any) => {
  try {
    const cars = await ORM.getAllCollection('Cars');
    _res.status(200).json(cars);
  } catch (err) {
    console.log(err);
    _res.status(500).json({ error: 'Could not fetch all cars.' });
  }
});

//returns all cars by the following format company2Cars: Map<string, Car[]>
router.get('/All/SearchFormat', async (_req: any, _res: any) => {
  const cars: Car[] = await ORM.getAllCollection('Cars');
  let result: Map<string, Car[]> = new Map<string, Car[]>();
  cars.forEach(car => {
    if (result.get(car.company) !== undefined && result.get(car.company) !== null) {
      result.get(car.company)?.push(car);
    }
    else {
      result.set(car.company, [car])
    }
  })
  _res.send(Object.fromEntries(result));
});

router.get('/ID/:id', async (_req: any, _res: any) => {
  const id = _req.params.id;
  _res.send(await ORM.getObjById('Cars', id));
});

router.delete('/ID/:id', async (_req: any, _res: any) => {
  const id = _req.params.id;
  await ORM.deleteObjById('Cars', id)
  _res.send("Done- delete by ID:" + id);
});

router.post('/Add', async (_req: any, _res: any) => {
  const car = _req.body
  let dummy_car = {
    company: "Audi",
    model: "e-tron GT",
    price: 99500,
    batteryRange: 238,
    chargingSpeed: 270
  }
  let insert_command = true;
  Object.keys(dummy_car).forEach(key => {
    if (!Object.keys(car).includes(key)) {
      insert_command = false;
    }
  })
  if (insert_command) {
    ORM.insertOne('Cars', car);
  }
  else {
    return 'please check that all keys exist in car object! ' + Object.keys(dummy_car)
  }
});


export default router;