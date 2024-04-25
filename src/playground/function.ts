

//we exclusively annotated return type. Mouse hover on add
const add = (a: number, b: number): number => {
    console.log(a + b);
    return a + b;
}
//type script infers the return type as number based on the body.Mouse hover on add
const addtion = (a: number, b: number) => {
    return a + b;
}
//type script inferences the return type as void based on the body.Mouse hover on sub
const sub = (a: number, b: number) => {
    a - b;
}

function divide(a: number, b: number): number {
    return a / b;
}

const multiply = function (a: number, b: number): number {
    return a * b;
}

const thorwError = (message: string): never => {
    throw new Error(message);
}

const forcast = { date: new Date(), weather: 'sunny' };
const logWeather = (forcast: { date: Date, weather: string }): void => {
    console.log(forcast.date);
    console.log(forcast.weather);
}
divide(10, 2);