# nmdvideowall-server
Creating server for New Media Design Interactive video wall

## Development
Start mongdb  
    `sudo mongod`

Start the server (port 3000)  
    `npm start`

Start ember and proxy requests to the API server running on port 3000  
    `cd client`  
    `npm start`

## Deployment
Build ember into public directory for deployment  
    `cd client`
    `npm run build`