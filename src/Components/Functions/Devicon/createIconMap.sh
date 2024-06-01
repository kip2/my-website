#!/bin/bash

curl -s https://raw.githubusercontent.com/devicons/devicon/develop/devicon.json -o devicon.json

echo "const iconMap = {" > iconMap.tsx

jq -r '.[] | .name as $name | .versions.font[] | " \"" + $name + "\": \"devicon-\($name)-plain colored\","' devicon.json | sort | uniq >> iconMap.tsx

sed -i '$ s/,$//' iconMap.tsx

echo "};" >> iconMap.tsx
echo "" >> iconMap.tsx
echo "export default iconMap" >> iconMap.tsx

rm devicon.json

echo "iconMap.tsx has been created."