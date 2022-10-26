class coffeeHouse {
  #products = {
    expresso: {
      milk: 60,
      cream: 75,
      latte: 100,
    },
    cappuccino: {
      milk: 80,
      cream: 90,
      latte: 125,
    },
    latte: {
      milk: 100,
      cream: 125,
      latte: 150,
    },
  };
  constructor() {
    this.addon_arr = ["milk", "cream", "latte"];
  }
  fetchPrice(product, addon) {
    let isPresent = false;
    for (let i = 0; i < this.addon_arr.length; i++) {
      if (this.addon_arr[i] == addon) {
        isPresent = true;
        break;
      }
    }
    if (isPresent) {
      console.log(`product inside fetchprice : ` + product + " " + addon);
      switch (product) {
        case "expresso":
          switch (addon) {
            case "milk":
              return this.#products.expresso.milk;
            case "cream":
              return this.#products.expresso.cream;
            case "latte":
              return this.#products.expresso.latte;
          }
          break;
        case "cappuccino":
          switch (addon) {
            case "milk":
              return this.#products.cappuccino.milk;
            case "cream":
              return this.#products.cappuccino.cream;
            case "latte":
              return this.#products.cappuccino.latte;
          }
          break;
        case "latte":
          switch (addon) {
            case "milk":
              return this.#products.latte.milk;
            case "cream":
              return this.#products.latte.cream;
            case "latte":
              return this.#products.latte.latte;
          }
          break;
        default:
          return -111;
      }
    }
    return -111;
  }
  showMenu() {
    let menu = {
      items: this.#products,
    };
    return menu;
  }
  showAddons() {
    let addon = {
      items: this.addon_arr,
    };
    return JSON.stringify(addon);
  }
}
// Order class
class order extends coffeeHouse {
  constructor() {
    super();
    this.product = null;
    this.addon = null;
    this.price = null;
    this.orderArr = [];
  }
  selectItems(product, addon) {
    this.product = product;
    this.addon = addon;
    this.price = super.fetchPrice(product, addon);
  }
  genrateInvoice() {
    let order = {
      product: this.product,
      addon: this.addon,
      Total: this.price,
    };
    if (order.Total == -111) {
      return `Combination Not found Try again!`;
    }
    console.log("Invoice :", order);
    return this.placeOrder(order);
  }
  placeOrder(order) {
    let x = prompt(
      `To Place order enter "Yes" else press "any key"\n order Total : ${order.Total}`
    );
    if (x.toLowerCase() === "yes") {
      this.orderArr.push(order);
      console.log("Order Placed Successfully");
      return order;
    }
    return;
  }
  showOrders() {
    return this.orderArr;
  }
}
let ch = new coffeeHouse();
let ordr = new order();
let loop = true;
while (loop) {
  let x = prompt(
    "To exit enter -1,\n To show orders press 2,\n To place order press anything"
  );
  if (x == -1) {
    loop = false;
    console.log(`Thank You for shopping with CoffeeHouse!`);
    break;
  } else if (x == 2) {
    console.log(ordr.showOrders());
    continue;
  }
  console.log(ch.showMenu());
  let prod = prompt(
    `To order enter Product name \n
    ${JSON.stringify(ch.showMenu())}`
  );
  let ao = prompt(`Enter addon\n ${ch.showAddons()}`);
  ordr.selectItems(prod, ao);
  let gen_invoice = prompt(
    `To generate invoice enter 'Yes' else press "anything"`
  );
  if (gen_invoice.toLowerCase() == "yes") {
    console.log(ordr.genrateInvoice());
  }
}
