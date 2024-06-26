#!/bin/zsh

# Note: This script requires execute permissions.
# You can set these permissions by running:
# chmod +x page_generator.sh
# chmod +x products_generator.sh
# chmod +x favorite_generator.sh
# chmod +x influenced_generator.sh
# chmod +x history_generator.sh

echo "What kind of page do you want to create?"
echo "Select a page generator script to run:"
echo "1) Products page "
echo "2) Favorite page "
echo "3) Influenced page "
echo "4) History page "

read "choice?Enter your choice (1-4): "

case $choice in 
    1)
        echo ""
        echo "--- products_generator.sh run ---"
        echo ""
        ./public/pages/scripts/products_generator.sh
        echo ""
        ;;
    2)
        echo ""
        echo "--- favorite_generator.sh run ---"
        echo ""
        ./public/pages/scripts/favorite_generator.sh
        echo ""
        ;;
    3)
        echo ""
        echo "--- influenced_generator.sh run ---"
        echo ""
        ./public/pages/scripts/influenced_generator.sh
        echo ""
        ;;
    4)
        echo ""
        echo "--- history_generator.sh run ---"
        echo ""
        ./public/pages/scripts/history_generator.sh
        echo ""
        ;;
    *)
        echo "Invalid choice. Exiting."
        exit 1
        ;;
esac

echo "Generator script has finished running."
