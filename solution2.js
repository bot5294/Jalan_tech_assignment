class coffeeHouse {
  #addon = ["milk", "cream", "latte"];
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
  constructor() {}
  fetchPrice(product, addon) {
    let isPresent = false;
    for (let a in this.addon) {
      if (this.addon[a] == addon) isPresent = true;
    }
    if (isPresent) {
      let price = 0;
      switch (product) {
        case "expresso":
          price = this.products.product.addon;
          return price;
        case "cappuccino":
          price = this.products.product.addon;
          return price;
        case "latte":
          price = this.products.product.addon;
          return price;
        default:
          return "No Product with this name " + product + " found!";
      }
    }
    return `Selected Addon(${addon}) Not Pressent, try again!`;
  }
  showMenu() {
    let menu = {
      items: this.products,
    };
    return menu;
  }
}
class order extends coffeeHouse {
  constructor(product, addon) {
    super();
    this.product = product;
    this.addon = addon;
    this.price = super.fetchPrices(product, addon);
  }
  genrateInvoice() {
    let order = {
      product: this.product,
      addon: this.addon,
      Total: this.price,
    };
    return order;
  }
}
let ch = new coffeeHouse();
while (true) {
  let x = prompt("To exit enter -1");
  if (x == -1) break;
  ch.showMenu();
  let prod = prompt(`To order enter Product name`);
  let ao = prompt(`Enter addon`);
  let ordr = new order(prod, ao);
  let gen_invoice = prompt(
    `To generate invoice enter 'YES|yes' else press anything`
  );
  if (gen_invoice.toLowerCase() == "yes") {
    console.log(ordr.genrateInvoice());
  }
}
