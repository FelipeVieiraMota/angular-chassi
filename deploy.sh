echo "Killed process running on port 80"
fuser -k 80/tcp 

echo "Killed process running on port 4200"
fuser -k 4200/tcp 

echo "Killed process running on port 8080"
fuser -k 8080/tcp 

cd ~/angular-achassi
echo "Change to the project path"

echo "Started server using ng serve --port 8080 command"
ng serve --port 8080
