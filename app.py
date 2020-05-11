from flask import Flask, request, jsonify, render_template

# Creating the app
app = Flask(__name__)

# Creating Data Objects
items = [
    {
        "description": "Drake Sweatpants",
        "image": "https://i.pinimg.com/236x/a4/45/eb/a445eb4e5562a94093fb7555be62446a--couch-drake.jpg",
        "item_id": "d83ff143-9f8b-445a-8d8f-b9b8fe0f9f29",
        "price": 30
    }
]

customers = [
    {
        "customer_id": "d83ff143-9f8b-445a-8d8f-b9b8fe0f9f28",
        "email": "nihad.dedic@drake.edu",
        "first_name": "Nihad",
        "last_name": "Dedic"
    }
]

carts = [
    {
        'cart_id': '44ef41f4-485b-44d6-8635-7418e026be89',
        'customer_id': 'd83ff143-9f8b-445a-8d8f-b9b8fe0f9f28'
    },
    {
        'cart_id': '5581858f-a20e-4ada-9ccf-dd3e2cea0eb3',
        'customer_id': 'd83ff143-9f8b-445a-8d8f-b9b8fe0f9f28'
    }
]

cartItems = [
    {
        'cart_id': '44ef41f4-485b-44d6-8635-7418e026be89',
        'cart_item_id': 'd83ff143-9f8b-445a-8d8f-b9b8fe0f9f30',
        'item_id': 'd83ff143-9f8b-445a-8d8f-b9b8fe0f9f29',
        'quantity': 2
    }
]

# Home page
@app.route('/', methods=['GET'])
def home():
    return "<div><p>Drake University Apparel</p> <ul> <li> <a href='/items'>View Apparel!</a> </li> <li> <a href='/cart'>View Cart!</a> </li> </ul> </div>"

# View all items
@app.route('/items', methods=['GET'])
def getItems():
    return render_template('items.html', items=items)

# View the cart
@app.route('/cart', methods=['GET'])
def getCart():
    for indexCart in carts:
        for indexCustomer in customers:
            if indexCart['customer_id'] == indexCustomer['customer_id']:
                firstName = indexCustomer['first_name']
                cartLength = len(indexCart)
                accumulator = 0
                for index in cartItems:
                    for indexItem in items:
                        if index['item_id'] == indexItem['item_id']:
                            accumulator = accumulator + (index['quantity']*indexItem['price'])
                if accumulator == 0:
                    return "<a href='/items'>View Apparel!</a>"
                else:
                    return render_template('cart.html', firstName=firstName, cartLength=cartLength, items=items, priceTotal=accumulator, removeItem=removeItem)

# Removes an item from the cart when you click the remove button
def removeItem(itemId, firstName):
    for customer in customers:
        for cart in carts:
            for cartItem in cartItems:
                if customer['first_name'] == firstName:
                    if cart['customer_id'] == customer['customer_id']:
                        if cartItem['cart_item_id'] == itemId and cartItem['cart_id'] == cart['cart_id']:
                            del cartItems[cartItems.key().index(cartItem['cart_item_id'])]

# Adds an item to the cart
def addToCart(itemId):
    cartItems.append({'cart_id': '44ef41f4-485b-44d6-8635-7418e026be89', 'cart_item_id': '', 'item_id': 'd83ff143-9f8b-445a-8d8f-b9b8fe0f9f29', 'quantity': 1})

# View the specific item's page
@app.route('/items/<item_Id>', methods=['GET'])
def getOneItem(item_Id=None):
    for index in items:
        if index['item_id'] != None and index['item_id'] == item_Id:
            itemId = index['item_id']
            itemDescription = index['description']
            itemImage = index['image']
            itemPrice = index['price']
            return render_template('item.html', itemId=itemId, itemDescription=itemDescription, itemImage=itemImage, itemPrice=itemPrice, addToCart=addToCart)
    return "404 Item Not Found"

# Running the app
app.run(port=15155)