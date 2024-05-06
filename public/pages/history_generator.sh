#!/bin/zsh

COPY_SOURCE_PATH="./History/sample"
COPY_PATH="./History/page/"
JSON_FILE="../json/HistoryData.json"

read "new_id?Please enter new article id: "

if [[ -z "$new_id" ]]; then
    echo "No id enterd. Exiting the script."
    exit 1
fi

read "age?Please enter new article age data: "

if [[ -z "$age" ]]; then
    echo "No age data enterd. Exiting the script."
    exit 1
fi

read "title?Please enter new article title: "

if [[ -z "$title" ]]; then
    echo "No title enterd. Exiting the script."
    exit 1
fi

COPY_PATH=$COPY_PATH$new_id

if [[ -d "$COPY_PATH" ]]; then
    echo "Directory $COPY_PATH already exists. Exiting the script."
    exit 1
fi

cp -r $COPY_SOURCE_PATH $COPY_PATH

touch "$COPY_PATH/$new_id.md"

mv "$COPY_PATH/img/sample_t.jpg" "$COPY_PATH/img/${new_id}_t.jpg" 

# ADD data in JSON 
NEW_ENTRY=$(jq -n \
    --arg id "$new_id" \
    --arg title "$title" \
    --arg age "$age" \
    --arg path "/pages/History/page/$new_id/$new_id.md" \
    '{id: $id, age: $age, title: $title, path: $path }')

jq --argjson newEntry "$NEW_ENTRY" '. += [$newEntry] ' "$JSON_FILE" > tmp.json && mv tmp.json "$JSON_FILE"

echo "Ok, success to create $new_id article directory!"

