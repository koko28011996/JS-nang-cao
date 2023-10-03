const account1 = {
    owner: "Pham manh1",
    movenments:[200,450,-400,3000,-650,-130,70,1300],
    interestRate: 1.2,
    pin:111,
};
const account2 = {
    owner: "ham manh2",
    movenments:[200,350,-400,3000,-650,-130,70,1300],
    interestRate: 1.2,
    pin:111,
};
const account3 = {
    owner: "am manh3",
    movenments:[200,650,-400,3000,-650,-130,70,1300],
    interestRate: 1.2,
    pin:111,
};
const account4 = {
    owner: "Pham manh4",
    movenments:[200,850,-400,3000,-650,-130,70,1300],
    interestRate: 1.2,
    pin:111,
};
const accounts = [account1,account2,account3];
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
const disPlayMovenments = function(movenments){
     movenments.forEach(function(mov,i){
         const type = mov > 0 ? 'deposit' : 'withdrawal'
        const html =`
        <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i+1} ${type}</div>

        
        <div class="movements__value">${mov}</div>
      </div>
        `;

        containerMovements.insertAdjacentHTML('afterbegin',html);
    });
};
disPlayMovenments(account1.movenments);
const calcDisplayBalance = function(movements){
    const balance = movements.reduce((acc,mov) => acc +mov ,0);
    labelBalance.textContent = `${balance}EUR` ;
};
calcDisplayBalance(account1.movenments);
const calcDisplaySummary = function(movements){
    const incomes =  movements.filter(mov => mov > 0).reduce((acc,mov) => acc +mov ,0);
    labelSumIn.textContent = `${incomes}`

    const out = movements.filter(mov => mov < 0).reduce((acc,mov ) => acc +mov ,0);
    labelSumOut.textContent =`${Math.abs(out)}`;

    const int = movements.filter(mov => mov >0).map(deposit =>(deposit * 1.2)/100).reduce((acc,aa)=> acc + aa,0);
    labelSumInterest.textContent = `${int}`
};
calcDisplaySummary(account1.movenments);

const createUsernames = function (accs) {
    accs.forEach(function (acc) {
      acc.username = acc.owner
    //    bo viet hoa
        .toLowerCase() 
        //  tach tung chu 
        .split(' ')
        // lay vi chu cai dau tien
        .map(name => name[0])
        .join('');
    });
  };
  createUsernames(accounts);

// 4.1
  let currentAccount;
  btnLogin.addEventListener('click', function (e) {
    e.preventDefault();
  
    currentAccount = accounts.find(
      acc => acc.username === inputLoginUsername.value
    );
    console.log(currentAccount);
  
    if (currentAccount?.pin === Number(inputLoginPin.value)) {
      labelWelcome.textContent = `Welcome back, ${
        currentAccount.owner.split(' ')[0]
      }`;
      containerApp.style.opacity = 100;
    }
    inputLoginUsername.value = inputLoginPin.value ='';
    inputLoginPin.blur()
    disPlayMovenments(currentAccount.movenments);
    calcDisplayBalance(currentAccount.movenments);
    calcDisplaySummary(currentAccount.movenments);
});
// 4.2
btnTransfer.addEventListener('click', function (e) {
    e.preventDefault();
    const amount = Number(inputTransferAmount.value);
    const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
    );
    inputTransferAmount.value = inputTransferTo.value = '';
    if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
    ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
    }
   });
// 4.3
// 1
//  tong so tien gui 

const bankDepositSum = accounts
 .flatMap(acc => acc.movements)
 .filter(mov => mov > 0)
 .reduce((sum, cur) => sum + cur, 0)
 console.log(bankDepositSum);
//  2
// co bn tai khoan co so tien > 1000
const numDeposits1000 = accounts
 .flatMap(acc => acc.movements)
 .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
console.log(numDeposits1000);
let a = 10;
console.log(++a);
console.log(a)
// 3
const { deposits, withdrawals } = accounts
 .flatMap(acc => acc.movements)
 .reduce(
 (sums, cur) => {
 sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
 return sums;
 },
 { deposits: 0, withdrawals: 0 }
 );
console.log(deposits, withdrawals);


















// 3.2
const checkDogs = function(dogsJulia,dogsKate){
    const dogsJuliaCorrected = dogsJulia.slice();
    dogsJuliaCorrected.splice(0,1);
    dogsJuliaCorrected.splice(-2);
    const dogs = dogsJuliaCorrected.concat(dogsKate);
    console.log(dogs);
    dogs.forEach(function(dog,i) {
        if(dog >=3){
        console.log(`"Chó số ${i+1} là người chó lớn và ${dog} tuổi"`);
        }else{
            console.log(`"Chó số ${i+1} vẫn là chó 
            con �`);
        }
    });
};
checkDogs([3,2,5,12,7],[4,1,15,8,3]);
// 3.3
// 
const calcAverageHumanAge = function(ages){
    const humanAges = ages.map(age => (age <=2 ? 2 * age : 16 + age * 4));
    const adults = humanAges.filter(age => age >= 18);
    console.log(humanAges);
    console.log(adults);
    const average = adults.reduce((acc,age) => acc + age,0) / adults.length;
    return average;
};
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1,avg2);
// 3.4
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
 ];
 dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
 console.log(dogs);
//  2
const dogSara = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSara);
console.log(`cho cua sara an ${dogSara.curFood > dogSara.recFood ? 'nhieu' :'it' } `);
// 3
const anNhieu = dogs.filter(dog => dog.curFood > dog.recFood).flatMap(dog => dog.owners)
console.log(anNhieu);
const anit = dogs.filter(dog => dog.curFood < dog.recFood).flatMap(dog => dog.owners)
console.log(anit);
// 4
console.log(`${anNhieu.join('va')}Cho an qua nhieu`);
console.log(`${anit.join('va')}Cho an qua it`);
// 5
console.log(dogs.some(dog => dog.curFood === dog.recFood));
//6
const check = dog => dog.curFood > dog.recFood * 0.9 &&
dog.curFood < dog.curFood * 1.1;
console.log(dogs.some((check)));
// 7
console.log(dogs.filter(check));
// 8
const dogsCoppy = dogs.slice().sort((a,b) => a.recFood -b.recFood);
console.log(dogsCoppy);
