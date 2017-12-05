branch=`git rev-parse --abbrev-ref HEAD`;
git pull origin master;
git pull origin develop;
git pull origin $branch;
git push origin $branch;
echo "部署daily到预发中.."
def p -d;
sh ./ispublish.sh;