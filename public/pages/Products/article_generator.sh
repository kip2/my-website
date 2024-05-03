#!/bin/zsh

COPY_SOURCE_PATH="./page/sample"
COPY_PATH="./page/"

read "new_name?Please enter new article name: "

if [[ -z "$new_name" ]]; then
    echo "No name enterd. Exiting the script."
    exit 1
fi

COPY_PATH=$COPY_PATH$new_name

cp -r $COPY_SOURCE_PATH $COPY_PATH

touch "$COPY_PATH/$new_name.md"

mv "$COPY_PATH/img/sample_t.jpg" "$COPY_PATH/img/${new_name}_t.jpg" 

echo "Ok, success to create $new_name article directory!"
