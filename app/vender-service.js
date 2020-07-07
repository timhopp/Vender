function VenderService(){
//private
let money = 0

class Item {
  constructor(name, description, price, amount, id, count){
    this.name = name;
    this.description = description;
    this.price = price;
    this.amount = amount;
    this.id = id;
    this.count = count;
  }
}
let items = [
  new Item('Doritos', 'Totally REAL Cheese!', 1.50, 30, 'A1', 1),
  new Item('Fruit Gummies', 'Healthy REAL Fruit!', 1.00, 30, 'A2', 1),
  new Item('Kit-Kat', 'Definitely Not Bland', 1.25, 30, 'A3', 1),
  new Item('Reeces', 'The Best, Period', 1.75, 50, 'A4', 1),
  new Item('Cherry Poptarts', 'Why Would Anyone Buy Me?', 2.00, 10, 'A5', 1),
]

let stash = [];

//public

this.getStash = function(){
  return stash
}

this.getMoney = function(){
  return money
}

this.addMoney = function(){
  money += .25
  return this.getMoney()
}

this.purchaseItem = function(id, callback){
  for(let i = 0; i < items.length; i++){
    const item = items[i];
    if(id == item.id && money >= item.price && item.amount > 0){
      item.amount--
      money -= item.price
      if(item.count == 1){
        let clonedItem = JSON.parse(JSON.stringify(item))
            stash.push(clonedItem)
            item.count++
      } else {
        for(let k = 0; k < stash.length; k++){
        if(item.name == stash[k].name){
          stash[k].count++
        }
       }
      } 
    

      console.log(stash)
      callback(items)
    }
   }
  }

this.onLoad = function(cb){
  console.log(cb)
  cb(items)
 }

 this.onLoadStash = function(cb){
  console.log(cb)
  cb(stash)
 }
}