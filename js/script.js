/*-------------Завдання №1-------------*/
// let user = {

// };

// Object.defineProperty(user, 'name', {
//     value: 'Davis',
//     writable: false,
// });

// Object.defineProperty(user, 'age', {
//     value: 18,
//     writable: false,
// });

// Object.defineProperty(user, 'id', {
//     value: 1,
//     writable: false,
//     configurable: false,
// });

// console.log(user);
// user.name = 'Mike';
// console.log(user.name);
// delete user.id;
// console.log(user.id);

/*-------------Завдання №2-------------*/
// let dataBase = {
//     dbName: 'user',
//     dbType: 'MySQL'
// }
// let configurateDB = {
//     token: '123',
//     password: '567',
//     user: 'admin'
// }

// Object.freeze(dataBase);
// dataBase.dbName = 'surname';
// delete dataBase.dbType;
// dataBase.dbPassword = '123';
// console.log(dataBase);

// Object.seal(configurateDB);
// delete configurateDB.token;
// configurateDB.surname = 'administration';
// configurateDB.password = '8910';
// console.log(configurateDB);

/*-------------Завдання №3-------------*/
// let salaries = {
//     frontend: 2000,
//     backend: 1500,
//     design: 1000,
//     set addSalaries(value) {
//         for(let  i = 0; i < value.length; i++) {
//             const salary = value[i].split(': ');
//             this[salary[0]] = salary[1];
//         }
//     }
// }
// Object.defineProperty(salaries, 'sum', {
//     get (){
//         let sum = 0;
//         for(salary in this){
//             sum += this[salary];
//         }
//         console.log(sum);
//     },
//     enumerable: false,
// })

// salaries.addSalaries = ['frontend: 2500', 'backend: 1750', 'design: 1300', 'manager: 800'];
// console.log(salaries);

/*-------------Завдання №4-------------*/
// let user = {
//     name: 'Mike',
//     surname: 'Davis',
//     age: 25,
//     get userInfo(){
//         console.log(`name: ${this.name}, surname: ${this.surname}, age: ${this.age}`);
//     }
// }
// user.userInfo
// user.login = 'MK_18';
// user.userInfo