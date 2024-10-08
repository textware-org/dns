#!/bin/bash

# Zmienne
SERVER_USER="your_username"
SERVER_IP="your_server_ip"
SERVER_PATH="/path/to/your/app"

# Budowanie aplikacji React
cd client
npm run build

# Kopiowanie plików na serwer
scp -r build/* $SERVER_USER@$SERVER_IP:$SERVER_PATH/public/
scp -r server/* $SERVER_USER@$SERVER_IP:$SERVER_PATH/server/

# Restart serwera (przykład z użyciem PM2)
ssh $SERVER_USER@$SERVER_IP "pm2 restart your_app_name"