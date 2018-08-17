# express-MVC


## Installation

Clone the repository and run `npm install`

```
git clone https://github.com/dshabin/express-MVC.git
npm install
```

- Create a MongoDB and add the credentials to `config.dev.js`.

## Starting the server

```
npm start
```

#### Example requests

```
curl -X POST \
  http://localhost:3000/users/create \
  -H 'Cache-Control: no-cache' \
  -H 'Content-Type: application/json' \
  -d '{
	"email" : "example@example.com",
	"username" : "example@example.com",
	"password" : "password"
}'
```

#### Example response
```
{
    "data": {
        "__v": 0,
        "email": "example@example.com",
        "username": "example@example.com",
        "_id": "5b772c9ec543532e1e779379"
    },
    "code": 0
}
```
