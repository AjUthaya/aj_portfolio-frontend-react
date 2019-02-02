#!/bin/bash

### REQUIRED: Declare variable ###
Container_Name="aj_portfolio-frontend"
Port="80"
### REQUIRED: Declare variable ###

Host="127.0.0.1"

#____ START: Check if container name already exists, if true: remove/delete container ____#

# List all containers and store in a variable
Container_List=$(docker ps -a)


# Check if Container_Name exists, if true: remove/delete it

if [[ $Container_List = *$Container_Name* ]];

then
  echo -e "\xE2\x9D\x95 Container already exists with the name <$Container_Name>"
  echo -e "  \xE2\x9E\x96 Stoping and deleteing old container"

  # Removes/Deletes container with name Container_Name
  Delete_Container=$(docker stop $Container_Name && docker rm $Container_Name)

    # Check if deleteing container displayed an error
    if [[ $Delete_Container =~ "Error" ]] || [[ $Delete_Container =~ "Failed" ]];
      then
        if [[ $Delete_Container =~ "No such container" ]];
          then
            echo -e "\xE2\x9C\x85 Seems like the container with the name <$Container_Name> does not exist"
          else
            echo -e "\xE2\x9D\x8C Failed to delete container, read the error code above and consult docker manual"
            # !! Exit out of script !! #
            exit 1
        fi
      else
        echo -e "\xE2\x9C\x85 Old container was deleted"
    fi

else

  echo -e "\xE2\x9C\x85 <$Container_Name> container name was not taken"

fi

#____ END: Check if container name already exists, if true: remove/delete container ____#



echo -e "  \xE2\x9E\x96 Running docker build ..."



#____ START: Check if docker build was successfull or not, if successfull: get Build_Id ____#

# Build docker image, and store value inside
Temp_Build=$(docker build .)

# Check if build was successfull
if [[ $Temp_Build =~ "Successfully built" ]];
  then
    Build_Id=${Temp_Build#*Successfully built}
    echo -e "\xE2\x9C\x85 Docker build was successfull, Build_Id:$Build_Id"
  else
    echo $Temp_Build
    echo -e "\xE2\x9D\x8C Docker build failed, se code above"
    # !! Exit out of script !! #
    exit 1
fi

#____ END: Check if docker build was successfull or not, if successfull: get Build_Id ____#



echo -e "  \xE2\x9E\x96 Running docker image ..."



#____ START: Run docker image ____#

Temp_Run=$(docker run -d --name $Container_Name -p $Host:$Port:80$Build_Id)
Container_List=$(docker ps)


# Check if container is in the docker process list
if [[ $Container_List = *$Container_Name* ]];
  then
    echo -e "\xE2\x9E\xA1 Starting up server in the background. Server address: http://$Host:$Port/"
    echo -e "  \xE2\x9E\x96 Run <docker exec -ti $Container_Name /bin/bash> to enter the server"
    echo -e "  \xE2\x9E\x96 Run <docker stop $Container_Name> to stop server"
  else
    echo -e "\xE2\x9D\x8C Docker running image failed, se code above"
    # !! Exit out of script !! #
    exit 1
fi

#____ END: Run docker image ____#
