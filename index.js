var inventory = {
    products : [],
    //This method adds products to the inventory
    addProducts : function(productName, amount){
        this.products.push(
               {
                   title : `${productName}`,
                   quantity : `${amount}`
               }
            )
        console.log(this.products)
    },

    //This methos shows all products in the product array
    getProducts: function(){
        console.log(this.products)
    },

    //This method removes a product from the array
    removeProducts: function(productName){
        const newProducts = this.products.filter((item) => item.title !== productName)
        console.log(newProducts)
    },

    //This method updates a product in the array
    updateProducts: function(productName, newProductName, quantity){
        const newProducts = this.products.filter((item) => item.title !== productName)
        newProducts.push({
            title: `${newProductName}`,
            quantity: `${quantity}`
        })
        console.log(newProducts)
    }
}

inventory.addProducts("Orange", 20)
inventory.addProducts("Mango", 30)
inventory.getProducts()

inventory.addProducts("Tomato", 10)
inventory.addProducts("Apple", 5)
inventory.addProducts("Guava", 40)

inventory.removeProducts("Guava")

inventory.updateProducts("Guava","Mango", 20)