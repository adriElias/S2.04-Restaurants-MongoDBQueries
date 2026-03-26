//Use this file to define indexes for your queries
db.restaurants.createIndex({cuisine: 1, borough: 1})
db.restaurants.createIndex({location: "2dsphere"})
