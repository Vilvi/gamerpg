function Resource(name, id, sell, xpGather, xpWork, timeGather, timeWork, src) {

  this.name = name;
  this.id = id;
  this.sell = sell;
  this.xpGather = xpGather;
  this.xpWork = xpWork;
  this.timeGather = timeGather;
  this.timeWork = timeWork;
  this.src = src;

}

function Player(name, gold, inventory, woodcuttinglvl, mininglvl) {

  this.name = name;
  this.gold = gold;
  this.inventory = inventory;
  this.woodcuttinglvl = woodcuttinglvl;
  this.mininglvl = mininglvl;

}

const wood = new Resource('Wood', 1, 20, 35, 20, 55, 65, '../sources/wood.png');
const stone = new Resource('Stone', 2, 30, 15, 10, 25, 60, '../sources/stone.png');
let currentPlayer = new Player('Vilvi', 50, new Object(), 4, 5)

const updateInventory = (resource) => {

  if (currentPlayer.inventory[resource] == null) {

    currentPlayer.inventory[resource] = 1;

  } else {

    currentPlayer.inventory[resource] += 1;

  }

  console.log(currentPlayer.inventory[resource]);

}

const inventoryVisual = (resource) => {

  let inventoryID = $('.inventory-slot').length + 1

  let outerDiv = document.createElement('div');
  outerDiv.id = inventoryID;
  outerDiv.className = 'inventory-slot';

  let topRow = document.createElement('div');
  topRow.className = 'row';

  let bottomRow = document.createElement('div');
  bottomRow.className = 'row';

  let topCol = document.createElement('div');
  topCol.className = 'col-lg-12';

  let bottomColRight = document.createElement('div');
  bottomColRight.className = 'col-lg-6';

  let bottomColLeft = document.createElement('div');
  bottomColLeft.className = 'col-lg-6';

  let woodImage = document.createElement('img');
  woodImage.className = 'img-fluid inventory-item';
  woodImage.src = '../sources/' + resource + '.png';

  let itemAmount = document.createElement('p');
  itemAmount.className = resource + '-amount';

  $('.' + resource + '-amount').text(currentPlayer.inventory[resource])

  bottomColRight.append(itemAmount);
  bottomRow.append(bottomColRight);
  topRow.append(woodImage);
  outerDiv.append(topRow);
  outerDiv.append(bottomRow);

  if (currentPlayer.inventory[resource] == 1) {

    return $('#inventory-slots').append(outerDiv);

  }

}

$('.inventory-button').click(function() {

  updateInventory(resource = $(this).attr('value'));
  inventoryVisual(resource = $(this).attr('value'));

})
/*

const increaseWood = () => currentPlayer.inventory.push(wood);

const inventoryAmount = () => $('.inventory-slot').length;

const inventoryID = () => inventoryAmount() + 1;

const createItem = () => {

  increaseWood();

  let outerDiv = document.createElement('div');
  outerDiv.id = 'inventory-' + inventoryID();
  outerDiv.className = 'inventory-slot';

  let topRow = document.createElement('div');
  topRow.className = 'row';

  let bottomRow = document.createElement('div');
  bottomRow.className = 'row';

  let topCol = document.createElement('div');
  topCol.className = 'col-lg-12';

  let bottomColRight = document.createElement('div');
  bottomColRight.className = 'col-lg-6';

  let bottomColLeft = document.createElement('div');
  bottomColLeft.className = 'col-lg-6';

  let woodImage = document.createElement('img');
  woodImage.className = 'img-fluid inventory-item';
  woodImage.src = wood.src;

  let itemAmount = document.createElement('p');
  itemAmount.className = 'inventory-amount';

  bottomColRight.append(itemAmount);
  bottomRow.append(bottomColRight);
  topRow.append(woodImage);
  outerDiv.append(topRow);
  outerDiv.append(bottomRow);

  if (currentPlayer.inventory.length == 1) {
    console.log('if')
    $('.inventory-amount').text(currentPlayer.inventory.length)
    return $('#inventory-slots').append(outerDiv);
  } else {
    console.log('elseif');
    return $('.inventory-amount').text(currentPlayer.inventory.length)
  }

}
*/
