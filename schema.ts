const product={
    "products": [
      {
        "id": 1,
        "name": "Product A",
        "price": 100,
        "stock": 50,
        "image": "https://example.com/product-a.jpg"
      },
      {
        "id": 2,
        "name": "Product B",
        "price": 200,
        "stock": 30,
        "image": "https://example.com/product-b.jpg"
      }
    ],
    "newOrder": {
      "customer": {
        "name": "John Doe",
        "email": "john.doe@example.com",
        "address": "123 Main St, Anytown, USA"
      },
      "products": [
        {
          "id": 1,
          "name": "Product A",
          "quantity": 2,
          "price": 100
        },
        {
          "id": 2,
          "name": "Product B",
          "quantity": 1,
          "price": 200
        }
      ],
      "paymentStatus": "Paid"
    },
    "orderResponse": {
      "orderId": "abc123",
      "status": "Order Created",
      "totalAmount": 400
    },
    "shipment": {
      "shipmentId": "sh123",
      "orderId": "abc123",
      "status": "In Transit",
      "expectedDeliveryDate": "2025-01-20"
    }
  }
  