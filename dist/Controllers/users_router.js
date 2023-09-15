"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const ORM = __importStar(require("../ORM/generic_mongo_dao"));
const router = express_1.default.Router();
const users = [
    {
        "id": 1,
        "name": "John Doe",
        "email": "johndoe@example.com",
        "age": 30
    },
    {
        "id": 2,
        "name": "Jane Smith",
        "email": "janesmith@example.com",
        "age": 25
    },
    {
        "id": 3,
        "name": "Robert Johnson",
        "email": "robertjohnson@example.com",
        "age": 35
    },
    {
        "id": 4,
        "name": "Emily Davis",
        "email": "emilydavis@example.com",
        "age": 28
    },
    {
        "id": 5,
        "name": "Michael Wilson",
        "email": "michaelwilson@example.com",
        "age": 40
    },
    {
        "id": 6,
        "name": "Jessica Brown",
        "email": "jessicabrown@example.com",
        "age": 32
    },
    {
        "id": 7,
        "name": "David Taylor",
        "email": "davidtaylor@example.com",
        "age": 45
    },
    {
        "id": 8,
        "name": "Sarah Anderson",
        "email": "sarahanderson@example.com",
        "age": 27
    },
    {
        "id": 9,
        "name": "Andrew Martinez",
        "email": "andrewmartinez@example.com",
        "age": 39
    },
    {
        "id": 10,
        "name": "Jennifer Garcia",
        "email": "jennifergarcia@example.com",
        "age": 31
    },
    {
        "id": 11,
        "name": "Christopher Thomas",
        "email": "christopherthomas@example.com",
        "age": 36
    },
    {
        "id": 12,
        "name": "Sophia Clark",
        "email": "sophiaclark@example.com",
        "age": 24
    },
    {
        "id": 13,
        "name": "Matthew Hernandez",
        "email": "matthewhernandez@example.com",
        "age": 33
    },
    {
        "id": 14,
        "name": "Olivia Walker",
        "email": "oliviawalker@example.com",
        "age": 29
    },
    {
        "id": 15,
        "name": "Daniel King",
        "email": "danielking@example.com",
        "age": 42
    },
    {
        "id": 16,
        "name": "Ava Lewis",
        "email": "avalewis@example.com",
        "age": 26
    },
    {
        "id": 17,
        "name": "James Turner",
        "email": "jamesturner@example.com",
        "age": 38
    },
    {
        "id": 18,
        "name": "Mia Lee",
        "email": "miale@example.com",
        "age": 30
    },
    {
        "id": 19,
        "name": "Logan Hall",
        "email": "loganhall@example.com",
        "age": 23
    },
    {
        "id": 20,
        "name": "Ella Green",
        "email": "ellagreen@example.com",
        "age": 34
    },
    {
        "id": 21,
        "name": "Benjamin Adams",
        "email": "benjaminadams@example.com",
        "age": 41
    },
    {
        "id": 22,
        "name": "Sofia Baker",
        "email": "sofiabaker@example.com",
        "age": 27
    },
    {
        "id": 23,
        "name": "Joseph Hill",
        "email": "josephhill@example.com",
        "age": 35
    },
    {
        "id": 24,
        "name": "Charlotte Cook",
        "email": "charlottecook@example.com",
        "age": 31
    },
    {
        "id": 25,
        "name": "William Nelson",
        "email": "williamnelson@example.com",
        "age": 37
    },
    {
        "id": 26,
        "name": "Amelia Carter",
        "email": "ameliacarter@example.com",
        "age": 28
    },
    {
        "id": 27,
        "name": "Alexander Ward",
        "email": "alexanderward@example.com",
        "age": 32
    },
    {
        "id": 28,
        "name": "Harper Ramirez",
        "email": "harperramirez@example.com",
        "age": 39
    },
    {
        "id": 29,
        "name": "Henry Brooks",
        "email": "henrybrooks@example.com",
        "age": 25
    },
    {
        "id": 30,
        "name": "Grace Torres",
        "email": "gracetorres@example.com",
        "age": 43
    },
    {
        "id": 31,
        "name": "Michaela Hughes",
        "email": "michaelahughes@example.com",
        "age": 26
    },
    {
        "id": 32,
        "name": "Liam Powell",
        "email": "liampowell@example.com",
        "age": 30
    },
    {
        "id": 33,
        "name": "Scarlett Gray",
        "email": "scarlettgray@example.com",
        "age": 33
    },
    {
        "id": 34,
        "name": "Lucas Foster",
        "email": "lucasfoster@example.com",
        "age": 27
    },
    {
        "id": 35,
        "name": "Chloe Russell",
        "email": "chloerussell@example.com",
        "age": 36
    },
    {
        "id": 36,
        "name": "Jackson Butler",
        "email": "jacksonbutler@example.com",
        "age": 29
    },
    {
        "id": 37,
        "name": "Lily Patterson",
        "email": "lilypatterson@example.com",
        "age": 34
    },
    {
        "id": 38,
        "name": "Ethan Simmons",
        "email": "ethansimmons@example.com",
        "age": 31
    },
    {
        "id": 39,
        "name": "Aria Wood",
        "email": "ariawood@example.com",
        "age": 38
    },
    {
        "id": 40,
        "name": "Noah Howard",
        "email": "noahhoward@example.com",
        "age": 24
    },
    {
        "id": 41,
        "name": "Savannah Bennett",
        "email": "savannahbennett@example.com",
        "age": 35
    },
    {
        "id": 42,
        "name": "Carter Ward",
        "email": "carterward@example.com",
        "age": 26
    },
    {
        "id": 43,
        "name": "Zoe Ramirez",
        "email": "zoeramirez@example.com",
        "age": 29
    },
    {
        "id": 44,
        "name": "Sebastian Price",
        "email": "sebastianprice@example.com",
        "age": 37
    },
    {
        "id": 45,
        "name": "Victoria Rogers",
        "email": "victoriarogers@example.com",
        "age": 28
    },
    {
        "id": 46,
        "name": "Mason Perry",
        "email": "masonperry@example.com",
        "age": 32
    },
    {
        "id": 47,
        "name": "Penelope Martinez",
        "email": "penelopemartinez@example.com",
        "age": 30
    },
    {
        "id": 48,
        "name": "Gabriel Adams",
        "email": "gabrieladams@example.com",
        "age": 26
    },
    {
        "id": 49,
        "name": "Samantha Collins",
        "email": "samanthacollins@example.com",
        "age": 39
    },
    {
        "id": 50,
        "name": "Ryan Cox",
        "email": "ryancox@example.com",
        "age": 32
    },
    {
        "id": 51,
        "name": "Addison Rivera",
        "email": "addisonrivera@example.com",
        "age": 36
    },
    {
        "id": 52,
        "name": "Leo Simmons",
        "email": "leosimmons@example.com",
        "age": 25
    },
    {
        "id": 53,
        "name": "Nora Scott",
        "email": "norascott@example.com",
        "age": 34
    },
    {
        "id": 54,
        "name": "Owen Green",
        "email": "owengreen@example.com",
        "age": 27
    },
    {
        "id": 55,
        "name": "Avery Phillips",
        "email": "averyphillips@example.com",
        "age": 33
    },
    {
        "id": 56,
        "name": "Isabella Simmons",
        "email": "isabellasimmons@example.com",
        "age": 28
    },
    {
        "id": 57,
        "name": "Elijah Wright",
        "email": "elijahwright@example.com",
        "age": 31
    },
    {
        "id": 58,
        "name": "Mila Murphy",
        "email": "milamurphy@example.com",
        "age": 37
    },
    {
        "id": 59,
        "name": "Grayson Reed",
        "email": "graysonreed@example.com",
        "age": 29
    },
    {
        "id": 60,
        "name": "Hannah Long",
        "email": "hannahlong@example.com",
        "age": 36
    },
    {
        "id": 61,
        "name": "Jacob Ross",
        "email": "jacobross@example.com",
        "age": 24
    },
    {
        "id": 62,
        "name": "Elizabeth Cox",
        "email": "elizabethcox@example.com",
        "age": 35
    },
    {
        "id": 63,
        "name": "William Stewart",
        "email": "williamstewart@example.com",
        "age": 26
    },
    {
        "id": 64,
        "name": "Aubrey Richardson",
        "email": "aubreyrichardson@example.com",
        "age": 30
    },
    {
        "id": 65,
        "name": "Jackie Peterson",
        "email": "jackiepeterson@example.com",
        "age": 29
    },
    {
        "id": 66,
        "name": "Levi Gray",
        "email": "levigray@example.com",
        "age": 27
    },
    {
        "id": 67,
        "name": "Madison Cooper",
        "email": "madisoncooper@example.com",
        "age": 31
    },
    {
        "id": 68,
        "name": "Jayden Young",
        "email": "jaydenyoung@example.com",
        "age": 38
    },
    {
        "id": 69,
        "name": "Alyssa Mitchell",
        "email": "alyssamitchell@example.com",
        "age": 32
    },
    {
        "id": 70,
        "name": "Luke Turner",
        "email": "luketurner@example.com",
        "age": 25
    },
    {
        "id": 71,
        "name": "Bella Hill",
        "email": "bellahill@example.com",
        "age": 34
    },
    {
        "id": 72,
        "name": "Nathan Murphy",
        "email": "nathanmurphy@example.com",
        "age": 28
    },
    {
        "id": 73,
        "name": "Audrey Barnes",
        "email": "audreybarnes@example.com",
        "age": 33
    },
    {
        "id": 74,
        "name": "Jameson Nelson",
        "email": "jamesonnelson@example.com",
        "age": 30
    },
    {
        "id": 75,
        "name": "Luna Martinez",
        "email": "lunamartinez@example.com",
        "age": 27
    },
    {
        "id": 76,
        "name": "Isaac Hughes",
        "email": "isaachughes@example.com",
        "age": 31
    },
    {
        "id": 77,
        "name": "Stella Taylor",
        "email": "stellataylor@example.com",
        "age": 39
    },
    {
        "id": 78,
        "name": "Elijah Foster",
        "email": "elijahfoster@example.com",
        "age": 26
    },
    {
        "id": 79,
        "name": "Hazel Lewis",
        "email": "hazellewis@example.com",
        "age": 36
    },
    {
        "id": 80,
        "name": "Mason Allen",
        "email": "masonallen@example.com",
        "age": 29
    },
    {
        "id": 81,
        "name": "Aria Campbell",
        "email": "ariacampbell@example.com",
        "age": 35
    },
    {
        "id": 82,
        "name": "Maxwell Thompson",
        "email": "maxwellthompson@example.com",
        "age": 28
    },
    {
        "id": 83,
        "name": "Sofia Evans",
        "email": "sofiaevans@example.com",
        "age": 32
    },
    {
        "id": 84,
        "name": "Logan Clark",
        "email": "loganclark@example.com",
        "age": 30
    },
    {
        "id": 85,
        "name": "Penelope Hernandez",
        "email": "penelopehernandez@example.com",
        "age": 27
    },
    {
        "id": 86,
        "name": "Matthew Wood",
        "email": "matthewwood@example.com",
        "age": 31
    },
    {
        "id": 87,
        "name": "Scarlett Bell",
        "email": "scarlettbell@example.com",
        "age": 38
    },
    {
        "id": 88,
        "name": "Henry Adams",
        "email": "henryadams@example.com",
        "age": 32
    },
    {
        "id": 89,
        "name": "Ella Richardson",
        "email": "ellarichardson@example.com",
        "age": 25
    },
    {
        "id": 90,
        "name": "Jackson Scott",
        "email": "jacksonscott@example.com",
        "age": 34
    },
    {
        "id": 91,
        "name": "Avery Howard",
        "email": "averyhoward@example.com",
        "age": 29
    },
    {
        "id": 92,
        "name": "Liam Lewis",
        "email": "liamlewis@example.com",
        "age": 27
    },
    {
        "id": 93,
        "name": "Chloe White",
        "email": "chloewhite@example.com",
        "age": 31
    },
    {
        "id": 94,
        "name": "Madison Cooper",
        "email": "madisoncooper@example.com",
        "age": 39
    },
    {
        "id": 95,
        "name": "Ethan Hernandez",
        "email": "ethanhernandez@example.com",
        "age": 26
    },
    {
        "id": 96,
        "name": "Scarlett Peterson",
        "email": "scarlettpeterson@example.com",
        "age": 35
    },
    {
        "id": 97,
        "name": "Lucas Young",
        "email": "lucasyoung@example.com",
        "age": 30
    },
    {
        "id": 98,
        "name": "Olivia Turner",
        "email": "oliviaturner@example.com",
        "age": 27
    },
    {
        "id": 99,
        "name": "Caleb Martinez",
        "email": "calebmartinez@example.com",
        "age": 31
    },
    {
        "id": 100,
        "name": "Abigail Gray",
        "email": "abigailgray@example.com",
        "age": 38
    }
];
// var fs = require("fs");
// fs.readFile('./Data/users',  "utf-8", function(err, obj) {
//     // print your json file to the screen
//     console.log(obj);
//     // parse the obj string and convert it to an actual object
//     obj = JSON.parse(obj);
// }) 
function initUsersCollection() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield ORM.removeCollectionData('Users');
            yield ORM.insertData('Users', users);
        }
        catch (err) {
            console.log("the DB is already empty");
        }
    });
}
//init users DB with list data
router.get('/InitDB', (_req, _res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield initUsersCollection();
        _res.status(200).end();
    }
    catch (err) {
        _res.status(500).json({ error: 'Could not init users DB.' }).end();
    }
}));
//Get All users
router.get('/All', (_req, _res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield ORM.getAllCollection('Users');
        _res.status(200).json(users);
    }
    catch (err) {
        console.log(err);
        _res.status(500).json({ error: 'Could not fetch all cars.' });
    }
}));
router.get('/ID/:id', (_req, _res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = _req.params.id;
    _res.send(yield ORM.getObjById('Users', id));
}));
router.delete('/ID/:id', (_req, _res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = _req.params.id;
    yield ORM.deleteObjById('Users', id);
    _res.send("Done- delete by ID:" + id);
}));
router.post('/Add', (_req, _res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = _req.body;
    let dummy_user = {
        "name": "John Doe",
        "email": "johndoe@example.com",
        "age": 30
    };
    let insert_command = true;
    Object.keys(dummy_user).forEach(key => {
        if (!Object.keys(user).includes(key)) {
            insert_command = false;
        }
    });
    if (insert_command) {
        ORM.insertOne('Users', user);
    }
    else {
        return 'please check that all keys exist in user object! ' + Object.keys(dummy_user);
    }
}));
exports.default = router;
//# sourceMappingURL=users_router.js.map