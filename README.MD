# TopStore API

topStore API is a free REST API that can be used with any type of shopping project that needs products data in JSON format. You can use examples below to check how topStore API works and feel free to enjoy it in your awesome projects!

## How to use it

You can fetch data with any kind of methods you know (fetch API, Axios, jquery ajax).

### Get One product

```js
fetch("https://topstore-api.herokuapp.com/products/1")
  .then((res) => res.json())
  .then((data) => console.log(data));
```

### Get all products

```js
fetch("https://topstore-api.herokuapp.com/products")
  .then((res) => res.json())
  .then((data) => console.log(data));
```

### Get Categories

```js
fetch("https://topstore-api.herokuapp.com/products/categories")
  .then((res) => res.json())
  .then((data) => console.log(data));
```

### Get Products by Category

```js
fetch("https://topstore-api.herokuapp.com/products/category/electronics")
  .then((res) => res.json())
  .then((data) => console.log(data));
```

### Add a new Product

```js
fetch("https://topstore-api.herokuapp.com/products", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Nike T-Shirt",
    price: 2000,
    description: "Lorem ipsum set dolor...",
    image: "https://picsum.photos/200/300",
    category: "clothing",
  }),
})
  .then((res) => res.json())
  .then((json) => console.log(json));
```

- NOTE - If you send an object like the code above, it will return you an object with a new id. remember that nothing in real will insert into the database. so if you want to access the new id you will get a 404 error.

### Update an Existing Product

```js
fetch("https://topstore-api.herokuapp.com/products/2", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Nike T-Shirt",
    price: 2000,
    description: "Lorem ipsum set dolor...",
    image: "https://picsum.photos/200/300",
    category: "clothing",
  }),
})
  .then((res) => res.json())
  .then((json) => console.log(json));
```

### Update a specific field

```js
fetch("https://topstore-api.herokuapp.com/products/2", {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Nike T-Shirt",
  }),
})
  .then((res) => res.json())
  .then((json) => console.log(json));
```

- NOTE - This will return an object with sent id. And remember nothing in real will update in Database!

### Delete a Product

```js
fetch("https://topstore-api.herokuapp.com/products/1", {
  method: "DELETE",
})
  .then((res) => res.json())
  .then((json) => console.log(json));
```

- NOTE - The product will not be deleted on the database. It will return you the fake deleted product.

### Limit Results

You can use query string to limit results

```js
fetch("https://topstore-api.herokuapp.com/products?limit=10")
  .then((res) => res.json())
  .then((data) => console.log(data));
```

---

## All Available Routes

- GET

  - /products (get all products)

  - /products/1 (get specific product based on id)

  - /products?limit=5 (limit return results )

  - /products/categories (get all categories)

  - /products/category/electronics (get all products in specific category)

- POST

  - /products

- PATCH, PUT

  - /products/:id

- DELETE

  - /products/:id

---

### Product Document Fields

```js
{
    id:Number,
    title:String,
    price:Number,
    category:String,
    description:String,
    image:String
}
```
