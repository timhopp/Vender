function VenderController(){
  var venderService = new VenderService();
  var elemId = document.getElementById('money');
  var itemsElem = document.getElementById('items'); 
  var stashElem = document.getElementById('stash');

function drawStash(){
  let stash = venderService.getStash()
 var template = ""
 for(let i = 0; i < stash.length; i++){
  var stashItem = stash[i]
 template +=`
  <div class = "row justify-content-center">
   <h2>${stashItem.count} ${stashItem.name}</h2>
  </div>
  `
 }
  stashElem.innerHTML = template;
 }

function drawItems(items){
 var template = ""
 for (let i = 0; i < items.length; i++){
   var item = items[i];
   template +=`
   <div class = "col-2 bg-info text-warning m-2 p-2">
     <h3>${item.name}</h3>
     <p>${item.description}</p>
     <p>${item.price}</p>
     <p>Qty: ${item.amount}</p>
     <button class="btn btn-danger" onclick="app.controllers.venderController.purchaseItem('${item.id}')">${item.id}</button>   
   </div>
   `
 }
 itemsElem.innerHTML = template;
 
 drawStash()
}



this.addMoney = function(){
  elemId.textContent= "money: $" + venderService.addMoney();
};

this.purchaseItem = function(id){
  venderService.purchaseItem(id, drawItems);
  elemId.textContent = 'money: $' + venderService.getMoney();
};

 venderService.onLoad(drawItems)
 venderService.onLoadStash(drawStash)
}