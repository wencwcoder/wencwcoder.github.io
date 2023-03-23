npm run build

cd dist

git init
git add -A
git commit -m 'deploy(all): deploy by script.'

git push -f git@github.com:wencwcoder/wencwcoder.github.io.git gh-pages

cd ../
rm -rf dist
