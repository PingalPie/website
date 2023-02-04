echo "Building..."
zola build > /dev/null
echo "Removing previous build..."
ssh pingalpie@pingalpie.tildevarsh.in 'rm -rf public_html'
echo "Uploading..."
rsync -az public/* pingalpie@pingalpie.tildevarsh.in:~/public_html
rm -rf public
