#!/bin/bash

curl -s https://raw.githubusercontent.com/devicons/devicon/develop/devicon.json -o devicon.json

echo "type IconMap = {\n\t[key: string]: string,\n}" > iconMap.tsx

echo "const iconMap: IconMap = {" >> iconMap.tsx

jq -r '
    .[] |
    .name as $name |
    .versions.font |
    (if index("original") then "original"
    elif index("plain") then "plain"
    else .[0] end) as $version |
    "  \"" + $name + "\": \"devicon-" + $name + "-" + $version + "\","' devicon.json | sort | uniq >> iconMap.tsx


sed -i '$ s/,$//' iconMap.tsx

echo "};" >> iconMap.tsx
echo "" >> iconMap.tsx
echo "export default iconMap" >> iconMap.tsx

rm devicon.json

echo "iconMap.tsx has been created."