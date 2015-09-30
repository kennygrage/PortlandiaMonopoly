



//group_id:
//    0 = Deeds that don't have monopolies
//    1 = Dark Purple: deeds 1, 3
//    2 = Trains: deeds 5, 15, 25, 35
//    3 = Light Blue: deeds 6, 8, 9
//    4 = Purple: deeds 11, 13, 14
//    5 = Sports Teams: deeds 12, 28
//    6 = Orange: deeds 16, 18, 19
//    7 = Red: deeds 21, 23, 24
//    8 = Yellow: deeds 26, 27, 29
//    9 = Green: deeds 31, 32, 34
//    10 = Blue: deeds 37, 39


//Go
var deeds[0] = {name: "G0",
                  price: 0,
                  mortgage_value: 0,
                  house_cost: 0,
                  rent: [],
                  group_id: 0,
                  owned: 0,
                  monopoly: false,
                  multiplier: 0,
                  type: ""  //company, sport, or train
                };

//Mediterranean Avenue
var deeds[1] = {name: "",
                  price: 60,
                  mortgage_value: 30,
                  house_cost: 50,
                  rent: [2, 10, 30, 90, 160],
                  group_id: 1,
                  owned: 0,
                  monopoly: false,
                  multiplier: 0,
                  type: "company"
                };

//Community Chest
var deeds[2] = {name: "",
                  price: ,
                  mortgage_value: ,
                  house_cost: ,
                  rent: [],
                  group_id: 0,
                  owned: 0,
                  monopoly: false,
                  multiplier: 0,
                  type: ""
                };

//Baltic Avenue
var deeds[3] = {name: "",
                  price: 60,
                  mortgage_value: 30,
                  house_cost: 50,
                  rent: [4, 20, 60, 180, 320, 450],
                  group_id: 1,
                  owned: 0,
                  monopoly: false,
                  multiplier: 0,
                  type: "company"
                };

//Income Tax
var deeds[4] = {name: "",
                  price: ,
                  mortgage_value: ,
                  house_cost: ,
                  rent: [],
                  group_id: ,
                  owned: 0,
                  monopoly: false,
                  multiplier: 0,
                  type: ""
                };

//Reading Railroad
var deeds[5] = {name: "MAX",
                  price: 200,
                  mortgage_value: 100,
                  house_cost: 0,
                  rent: [25, 50, 100, 200],
                  group_id: 2,
                  owned: 0,
                  monopoly: false,
                  multiplier: 0,
                  type: "train"
                };

//Oriental Avenue
var deeds[6] = {name: "",
                  price: 100,
                  mortgage_value: 50,
                  house_cost: 50,
                  rent: [6, 30, 90, 270, 400, 550],
                  group_id: 3,
                  owned: 0,
                  monopoly: false,
                  multiplier: 0,
                  type: "company"
               };

//Chance
var deeds[7] = {name: "",
                  price: ,
                  mortgage_value: ,
                  house_cost: ,
                  rent: [],
                  group_id: 0,
                  owned: 0,
                  monopoly: false,
                  multiplier: 0,
                  type: ""
               };

//Vermont Avenue
var deeds[8] = {name: "",
                  price: 100,
                  mortgage_value: 50,
                  house_cost: 50,
                  rent: [6, 30, 90, 270, 400, 550],
                  group_id: 3,
                  owned: 0,
                  monopoly: false,
                  multiplier: 0,
                  type: "company"
                };

//Connecticut Avenue
var deeds[9] = {name: "",
                  price: 120,
                  mortgage_value: 60,
                  house_cost: 50,
                  rent: [8, 40, 100, 300, 450, 600],
                  group_id: 3,
                  owned: 0,
                  monopoly: false,
                  multiplier: 0,
                  type: "company"
                };

//Jail
var deeds[10] = {name: "",
                  price: ,
                  mortgage_value: ,
                  house_cost: ,
                  rent: [],
                  group_id: ,
                  owned: 0,
                  monopoly: false,
                  multiplier: 0,
                  monopoly: false,
                  multiplier: 0,
                  type: ""
                 };

//St. Charles Place
var deeds[11] = {name: "",
                  price: 140,
                  mortgage_value: 70,
                  house_cost: 100,
                  rent: [10, 50, 150, 450, 625, 750],
                  group_id: 4,
                  owned: 0,
                  monopoly: false,
                  multiplier: 0,
                  type: "company"
                 };

//Electric Company
var deeds[12] = {name: "PORTLAND TRAILBLAZERS",
                  price: 150,
                  mortgage_value: 75,
                  house_cost: 0,
                  rent: [], //rent = 4 times dice roll if one owned or 10 times if both are owned
                  group_id: 5,
                  owned: 0,
                  monopoly: false,
                  multiplier: 0,
                  type: ""
                 };


//States Avenue
var deeds[13] = {name: "",
                  price: 140,
                  mortgage_value: 70,
                  house_cost: 100,
                  rent: [10, 50, 150, 450, 625, 750],
                  group_id: 4,
                  owned: 0,
                  monopoly: false,
                  multiplier: 0,
                  type: ""
                 };

//Virginia Avenue
var deeds[14] = {name: "",
                  price: 160,
                  mortgage_value: 80,
                  house_cost: 100,
                  rent: [12, 60, 180, 500, 700, 900],
                  group_id: 4,
                  owned: 0,
                  monopoly: false,
                  multiplier: 0,
                  type: ""
                };

//Pennsylvania Railrood
var deeds[15] = {name: "PORTLAND STREETCAR",
                  price: 200,
                  mortgage_value: 100,
                  house_cost: 0,
                  rent: [25, 50, 100, 200],
                  group_id: 2,
                  owned: 0,
                  monopoly: false,
                  multiplier: 0,
                  type: "train"
                };

//St. James Place
var deeds[16] = {name: "",
                  price: ,
                  mortgage_value: ,
                  house_cost: ,
                  rent: [],
                  group_id: 6,
                  owned: 0,
                  monopoly: false,
                  multiplier: 0,
                  type: ""
                };

var deeds[] = {name: "",
price: ,
mortgage_value: ,
house_cost: ,
rent: [],
group_id: ,
owned: 0,
monopoly: false,
multiplier: 0,
type: ""
};

var deeds[] = {name: "",
price: ,
mortgage_value: ,
house_cost: ,
rent: [],
group_id: ,
owned: 0,
monopoly: false,
multiplier: 0,
type: ""
};

var deeds[] = {name: "",
price: ,
mortgage_value: ,
house_cost: ,
rent: [],
group_id: ,
owned: 0,
monopoly: false,
multiplier: 0,
type: ""
};

var deeds[] = {name: "",
price: ,
mortgage_value: ,
house_cost: ,
rent: [],
group_id: ,
owned: 0,
monopoly: false,
multiplier: 0,
type: ""
};

var deeds[] = {name: "",
price: ,
mortgage_value: ,
house_cost: ,
rent: [],
group_id: ,
owned: 0,
monopoly: false,
multiplier: 0,
type: ""
};

var deeds[] = {name: "",
price: ,
mortgage_value: ,
house_cost: ,
rent: [],
group_id: ,
owned: 0,
monopoly: false,
multiplier: 0,
type: ""
};

var deeds[] = {name: "",
price: ,
mortgage_value: ,
house_cost: ,
rent: [],
group_id: ,
owned: 0,
monopoly: false,
multiplier: 0,
type: ""
};

var deeds[] = {name: "",
price: ,
mortgage_value: ,
house_cost: ,
rent: [],
group_id: ,
owned: 0,
monopoly: false,
multiplier: 0,
type: ""
};

var deeds[] = {name: "",
price: ,
mortgage_value: ,
house_cost: ,
rent: [],
group_id: ,
owned: 0,
monopoly: false,
multiplier: 0,
type: ""
};

var deeds[] = {name: "",
price: ,
mortgage_value: ,
house_cost: ,
rent: [],
group_id: ,
owned: 0,
monopoly: false,
multiplier: 0,
type: ""
};

var deeds[] = {name: "",
price: ,
mortgage_value: ,
house_cost: ,
rent: [],
group_id: ,
owned: 0,
monopoly: false,
multiplier: 0,
type: ""
};

var deeds[] = {name: "",
price: ,
mortgage_value: ,
house_cost: ,
rent: [],
group_id: ,
owned: 0,
monopoly: false,
multiplier: 0,
type: ""
};

var deeds[] = {name: "",
price: ,
mortgage_value: ,
house_cost: ,
rent: [],
group_id: ,
owned: 0,
monopoly: false,
multiplier: 0,
type: ""
};

var deeds[] = {name: "",
price: ,
mortgage_value: ,
house_cost: ,
rent: [],
group_id: ,
owned: 0,
monopoly: false,
multiplier: 0,
type: ""
};

var deeds[] = {name: "",
price: ,
mortgage_value: ,
house_cost: ,
rent: [],
group_id: ,
owned: 0,
monopoly: false,
multiplier: 0,
type: ""
};

var deeds[] = {name: "",
price: ,
mortgage_value: ,
house_cost: ,
rent: [],
group_id: ,
owned: 0,
monopoly: false,
multiplier: 0,
type: ""
};

var deeds[] = {name: "",
price: ,
mortgage_value: ,
house_cost: ,
rent: [],
group_id: ,
owned: 0,
monopoly: false,
multiplier: 0,
type: ""
};

var deeds[] = {name: "",
price: ,
mortgage_value: ,
house_cost: ,
rent: [],
group_id: ,
owned: 0,
monopoly: false,
multiplier: 0,
type: ""
};

var deeds[] = {name: "",
price: ,
mortgage_value: ,
house_cost: ,
rent: [],
group_id: ,
owned: 0,
monopoly: false,
multiplier: 0,
type: ""
};

var deeds[] = {name: "",
price: ,
mortgage_value: ,
house_cost: ,
rent: [],
group_id: ,
owned: 0,
monopoly: false,
multiplier: 0,
type: ""
};

var deeds[] = {name: "",
price: ,
mortgage_value: ,
house_cost: ,
rent: [],
group_id: ,
owned: 0,
monopoly: false,
multiplier: 0,
type: ""
};

var deeds[] = {name: "",
price: ,
mortgage_value: ,
house_cost: ,
rent: [],
group_id: ,
owned: 0,
monopoly: false,
multiplier: 0,
type: ""
};

var deeds[] = {name: "",
            price: ,
            mortgage_value: ,
            house_cost: ,
            rent: [],
            group_id: ,
            owned: 0,
            monopoly: false,
            multiplier: 0,
            type: ""
            };
