//implicit type annotation
const cellPhoneModels = ['iPhone 12', 'Samsung Galaxy S21', 'Google Pixel 5'];

//explicitly annotating the type of the array
const cellPhoneModels1: string[] = ['iPhone 12', 'Samsung Galaxy S21', 'Google Pixel 5'];

//inference works with arrays too   
const dates = [new Date(), new Date()];

//inference works for two dimensional arrays too
const carsbyMake = [['f150'], ['corolla'], ['camaro']];

//corner cases  
//if you want to declare an empty array with no values  
const emptyArray: string[] = [];

//help with inference when extracting values
const car = carsbyMake[0];

//pop method    
const myCar = carsbyMake.pop();

//prevent incompatible values
//carsbyMake.push(100); //error


//Help with 'map'   
cellPhoneModels.map((cellPhoneModel: string): string => {
    return cellPhoneModel;
});


//flexible types    
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];