// =============== Exercise 1 =====================
const nums = [13, 87, 2, 89, 12, 4, 90, 63];

const mapping = nums.map(num =>{
   return num * 2;
});
console.log('=============== Exercise 1 =====================')
console.log('Answer:' + mapping)


// =============== Exercise 2 =====================
console.log('=============== Exercise 2 =====================')
const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];
const [firstTopping, secondTopping] = pizzaToppings ;
console.log(firstTopping)
console.log(secondTopping)


// =============== Exercise 3 =====================
const car = {
    make: 'Audi',
    model: 'q5',
  };

  // Your code here
  const {make, model} = car;

  console.log('=============== Exercise 3 =====================')
  console.log(make);
  console.log(model)


// =============== Exercise 4 =====================
const controversialPizzaToppings = [...pizzaToppings];

console.log('=============== Exercise 4 =====================')
console.log(controversialPizzaToppings)


// =============== Exercise 5 =====================

  const myCar = {...car}
  myCar.model = 'q7';

console.log('=============== Exercise 5 =====================')
console.log(car);
console.log(myCar)


// =============== Exercise 6 =====================
const userProfile = {
    propertyName: 'Doug'
}

const name = 'propertyName';
const profileName = userProfile[name];

console.log('=============== Exercise 6 =====================')
console.log(profileName)


// =============== Exercise 8 =====================
function defaultValues(noun ='cat', adjective = 'white') {
    console.log(`The ${noun} is ${adjective}`)
}
console.log('=============== Exercise 8 =====================')
defaultValues();


// =============== Exercise 9 =====================
let pizza = 'tasty';

// Your code here
console.log('=============== Exercise 9 =====================')
let flavor = pizza === 'tasty' ? 'yum': 'yuck';
console.log(flavor)


// =============== Exercise 10 =====================
// 1. SET LANGUAGE
const localLangConfig = null;  // Change to 'es', 'fr', etc., or keep it null
// Your code here
const LANG = localLangConfig || 'en';
// Log the result
console.log('=============== Exercise 10 =====================')
console.log('Language setting:', LANG);

// 2. SET WEBSITE THEME
const userSavedTheme = 'Dark'; // Change to 'dark', 'contrast', etc., or keep it null
// Your code here
const USER_THEME = userSavedTheme || 'light'
// Log the result
console.log('User theme setting:', USER_THEME);


// =============== Exercise 11 =====================
// Now check for `cat.age` on `adventurer`. See how it errors out? Use optional chaining in a console.log that it returns undefined instead.

const adventurer = {
    name: 'Alice',
  };
  
  let cat = adventurer.cat?.age; // Your code here

  console.log('=============== Exercise 101=====================')
  console.log(cat);