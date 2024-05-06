#!/bin/zsh

COPY_SOURCE_PATH="./Favorites/sample"
COPY_PATH="./Favorites/page/"
JSON_FILE="../json/FavoriteData.json"

read "new_name?Please enter new article name: "

if [[ -z "$new_name" ]]; then
    echo "No name enterd. Exiting the script."
    exit 1
fi

read "genre?Please enter new article genre: "

if [[ -z "$genre" ]]; then
    echo "No genre enterd. Exiting the script."
    exit 1
fi

COPY_PATH=$COPY_PATH$new_name

if [[ -d "$COPY_PATH" ]]; then
    echo "Directory $COPY_PATH already exists. Exiting the script."
    exit 1
fi

cp -r $COPY_SOURCE_PATH $COPY_PATH

touch "$COPY_PATH/$new_name.md"

mv "$COPY_PATH/img/sample_t.jpg" "$COPY_PATH/img/${new_name}_t.jpg" 

# ADD data in JSON 
NEW_ENTRY=$(jq -n \
    --arg id "$new_name" \
    --arg imgUrl "/pages/Favorites/page/$new_name/img/${new_name}_t.jpg" \
    --arg title "$new_name" \
    --arg caption "Caption of $new_name" \
    --arg path "/pages/Favorites/page/$new_name/$new_name.md" \
    --arg genre "$genre" \
    --arg published "$(date +%Y/%m/%d)" \
    '{id: $id, imgUrl: $imgUrl, title: $title, caption: $caption, path: $path, genre: $genre, published: $published}')

jq --argjson newEntry "$NEW_ENTRY" '. | [$newEntry] + .' "$JSON_FILE" > tmp.json && mv tmp.json "$JSON_FILE"

echo "Ok, success to create $new_name article directory!"
