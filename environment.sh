clear 

echo "Copied deploy.sh"
scp -i "/home/felipe/workspace/Java/Cloud/AWS-Keys/BackOfficeKey.pem" /home/felipe/workspace/Java/Cloud/angular-chassi/deploy.sh ubuntu@ec2-34-224-174-173.compute-1.amazonaws.com:/home/ubuntu

echo "Copied latest angular-app"
scp -i "/home/felipe/workspace/Java/Cloud/AWS-Keys/BackOfficeKey.pem" /home/felipe/workspace/Java/Cloud/angular-chassi/ ubuntu@ec2-34-224-174-173.compute-1.amazonaws.com:/home/ubuntu

echo "Connecting to ec2 instance and starting ng server using ng serve --port 8080"
ssh -i "/home/felipe/workspace/Java/Cloud/AWS-Keys/BackOfficeKey.pem" ubuntu@ec2-34-224-174-173.compute-1.amazonaws.com ./deploy.sh