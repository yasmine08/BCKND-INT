import fetch from 'node-fetch';

var SupplierClient = new Object();

SupplierClient.Name="babis";
SupplierClient.Email="babis@exampletest.com"; 
SupplierClient.ShippingAddress="Example 8, Athens"; 
SupplierClient.Phone= 1235698967;  

var Product = new Object();

Product.SKU= 1112256 ;
Product.Description= "Nike shoes";
Product.SalesPrice= 99.99 ;
Product.PurchasePrice= 44.99;  

var InventoryLocation = new Object();

InventoryLocation.Abbreviation="Test";
InventoryLocation.Name= "Test Project Location";
Address= "Example 20, Athens"; 

var Tax = new Object();
Tax.Name= "VAT";
Tax.Description= "VAT GR";
Tax.Value= "24%";

var Discount= new Object();
Discount.Name= "Loyalty"
Discount.Description= "Loyalty Customer Discount"
Discount.Value= "50%"

var SalesOrder = new Object();

 
try {
	const response = await fetch('https://api.megaventory.com/v2017a/json/reply/ProductGet?APIKEY=54d754a36776236a@m125623', {
	method: 'post',
	body: JSON.stringify( SupplierClient),
	headers: {'Content-Type': 'application/json'}
});
const data = await response.json();
} catch (error) {
	console.log(error);
}

try {
	const response = await fetch('https://api.megaventory.com/v2017a/Product/ProductUpdate?APIKEY=54d754a36776236a%40m125623', {
	method: 'post',
	body: JSON.stringify(Product),
	headers: {'Content-Type': 'application/json'}
});
const data = await response.json();
} catch (error) {
	console.log(error);
}

try {
	const response = await fetch('https://api.megaventory.com/v2017a/InventoryLocation/InventoryLocationUpdate?APIKEY=54d754a36776236a%40m125623', {
	method: 'post',
	body: JSON.stringify(InventoryLocation),
	headers: {'Content-Type': 'application/json'}
});
const data = await response.json();
} catch (error) {
	console.log(error);
}

try {
	const response = await fetch('https://api.megaventory.com/v2017a/Tax/TaxUpdate?APIKEY=54d754a36776236a%40m125623', {
	method: 'post',
	body: JSON.stringify(Tax),
	headers: {'Content-Type': 'application/json'}
});
const data = await response.json();
} catch (error) {
	console.log(error);
}

try {
	const response = await fetch('https://api.megaventory.com/v2017a/Discount/DiscountUpdate?APIKEY=54d754a36776236a%40m125623', {
	method: 'post',
	body: JSON.stringify(Discount),
	headers: {'Content-Type': 'application/json'}
});
const data = await response.json();
} catch (error) {
	console.log(error);
}