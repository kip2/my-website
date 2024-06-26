#!/bin/zsh

COPY_PATH="./public/pages/Favorites/page/"
JSON_FILE="./public/json/FavoriteData.json"

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

NEW_ARTICLE_PATH="${COPY_PATH}${new_name}"

if [[ -d "$NEW_ARTICLE_PATH" ]]; then
    echo "Directory $NEW_ARTICLE_PATH already exists. Exiting the script."
    exit 1
fi

mkdir -p "${NEW_ARTICLE_PATH}/img"

touch "${NEW_ARTICLE_PATH}/${new_name}.md"

# ADD data in JSON 
NEW_ENTRY=$(jq -n \
    --arg id "$new_name" \
    --arg title "$new_name" \
    --arg caption "Caption of $new_name" \
    --arg path "/pages/Favorites/page/$new_name/$new_name.md" \
    --arg genre "$genre" \
    --arg published "$(date +%Y/%m/%d)" \
    '{id: $id, title: $title, caption: $caption, path: $path, genre: $genre, published: $published}')

jq --argjson newEntry "$NEW_ENTRY" '. | [$newEntry] + .' "$JSON_FILE" > tmp.json && mv tmp.json "$JSON_FILE"

echo "Ok, success to create $new_name article directory!"
