

// Prototype of a customer
// what do they look like?
class Customer {
  // attributes of a customer
  name;
  address;
  phone;
  email;
  customerID;
  
  constructor(_name, _address, _phone, _email, _customerID) { 
    this.name = _name;
    this.address = _address;
    this.phone = _phone;
    this.email = _email;
    this.customerID = _customerID;
}

  // Methods => functions / Operations

    addItemToCart(item)
    {
      console.log("Adding item to cart");
    }

    placeOrder()
    {
      console.log("Placing order");
    }

    payForOrder()
    {
        console.log("Paying for order");
    }
    
    seeProducts()
    {
        console.log("Seeing products");
    }
}

var customer1 = new Customer("john", "123 Main St", "123-456-7890", "john@hotmail.com", 1.001);
// customer1.name = "John";
// customer1.address = "123 Main Street";
// customer1.phone = "123-456-7890";
// customer1.email = "john@hotmail.com";
// customer1.customerID = 1.001;

var customer2 = new Customer("jo", "123 Main St", "234-5678-9012", "jo@hotmail.com", 1.002);
// customer1.name = "Jo";
// customer1.address = "123 Main Street";
// customer1.phone = "234-5678-9012";
// customer1.email = "jo@hotmail.com";
// customer1.customerID = 1.002;

console.log(customer1.email);
console.log(customer2.email);

// create a class for a tweet


class Tweet
{
    message = "";
    likes = 0;
    retweets = 0;
    replies = 0;
    mentions = 0;
    time = 0;
    date = 0;
    hashtags = ""; 
    
    constructor(_message, _likes, _retweets, _replies, _mentions, _time, _date, _hashtags)
    {
        this.message = _message;
        this.likes = _likes;
        this.retweets = _retweets;
        this.replies = _replies;
        this.mentions = _mentions;
        this.time = _time;
        this.date = _date;
        this.hashtags = _hashtags;
    }
}

var tweet1 = new Tweet();
tweet1.message = "I am learning JavaScript!";
tweet1.likes = 7;
tweet1.retweets = 1;
tweet1.replies = 3;
tweet1.mentions = 1;
tweet1.time = 12;
tweet1.date = 11;
tweet1.hashtags = "#JavaScript";

console.log(tweet1);

class Car
{
    color = "";
    year = 0;
    make = "";
    model = "";
    price = 0;
    mileage = 0;
    engine = "";

    constructor(_color, _year, _make, _model, _price, _mileage, _engine)
    {
        this.color = _color;
        this.year = _year;
        this.make = _make;
        this.model = _model;
        this.price = _price;
        this.mileage = _mileage;
        this.engine = _engine;
    }
}

class SuperCar extends Car
{
    superCar;
    constructor(_color, _year, _make, _model, _price, _mileage, _engine, _superCar)
    {
        super(_color, _year, _make, _model, _price, _mileage, _engine);
        this.superCar = _superCar;
    }
}

var superCar1 = new SuperCar("red", 2020, "Ferrari", "F8", 300000, 0, "V8", true);

console.log(superCar1);

class HyperCar extends Car
{
    hyperCar;
    constructor(_color, _year, _make, _model, _price, _mileage, _engine, _hyperCar)
    {
        super(_color, _year, _make, _model, _price, _mileage, _engine);
        this.hyperCar = _hyperCar;
    }
}

var hyperCar1 = new HyperCar("orange", 2022, "McLaren", "Speedtail", 1100000, 0, "V8 twin-turbo", true);

console.log(hyperCar1);

var car1 = new Car();
car1.color = "Red";
car1.year = 2019;
car1.make = "Ford";
car1.model = "Mustang";
car1.price = 30000;
car1.mileage = 10000;
car1.engine = "V8";

console.log(car1);

class Robot
{
    name = "";
    color = "";
    height = 0;
    weight = 0;
    speed = 0;
    strength = 0;
    intelligence = 0;
    weapon = "";

    constructor(_name, _color, _height, _weight, _speed, _strength, _intelligence, _weapon)
    {
        this.name = _name;
        this.color = _color;
        this.height = _height;
        this.weight = _weight;
        this.speed = _speed;
        this.strength = _strength;
        this.intelligence = _intelligence;
        this.weapon = _weapon;
    }
}

var robot1 = new Robot();
robot1.name = "Gundam 1";
robot1.color = "Red";
robot1.height = 6;
robot1.weight = 300;
robot1.speed = 100;
robot1.strength = 100;
robot1.intelligence = 100;
robot1.weapon = "Laser";

console.log(robot1);

class Product
{
    id = 0;
    name = "";
    price = 0;
    description = "";
    category = "";
    quantity = 0;
    image = "";

    constructor(_id, _name, _price, _description, _category, _quantity, _image)
    {
        this.id = _id;
        this.name = _name;
        this.price = _price;
        this.description = _description;
        this.category = _category;
        this.quantity = _quantity;
        this.image = _image;
    }
}

var product1 = new Product();
product1.id = 1;
product1.name = "iPhone 12";
product1.price = 1000;
product1.description = "New iPhone";
product1.category = "Electronics";
product1.quantity = 1;
product1.image = "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-finish-unselect-gallery-1-202207_GEO_EMEA_FMT_WHH?wid=1280&hei=492&fmt=p-jpg&qlt=80&.v=1662129044219";

console.log(product1);

class Seller
{
    name = "";
    address = "";
    phone = "";
    email = "";
    sellerID = 0;
}

var seller1 = new Seller();
seller1.name = "Adam";
seller1.address = "123 Main Street";
seller1.phone = "123-456-7890";
seller1.email = "Seller@sales.com";
seller1.sellerID = 1.001;

console.log(seller1);

// extends is a keyword which implies inheritance. by extending parent's attributes and methods.
class GoldCustomer extends Customer
{
    goldService;

    // purpose of a constructor is to accept values for properties and initalise them.
    constructor(_name, _address, _phone, _email, _customerID, _goldService)
    {
        // super is a keyword which refers to the parent class constructor
        super(_name, _address, _phone, _email, _customerID);
        this.goldService = _goldService;
    }
}

class PlatinumCustomer extends Customer
{
    platinumService;

    constructor(_name, _address, _phone, _email, _customerID, _platinumService)
    {
        super(_name, _address, _phone, _email, _customerID);
        this.platinumService = _platinumService;
    }
}

var goldCustomer1 = new GoldCustomer("Steve", "UK", "1234-567-8901", "gold@hotmail.com", 1.003, "20% discount");


console.log(goldCustomer1);
// console.log(goldCustomer1.goldService);
// console.log(customer1.goldService);

var platinumCustomer1 = new PlatinumCustomer("Holly", "USA", "1234-567-8901", "plat@hotmail.com", 1.004, "50% discount, free shipping");

console.log(platinumCustomer1);


