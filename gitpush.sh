git add .
commit_message="Default message"
current_date=`date`
read -p 'Commit message: ' commit_message
commit_message="$commit_message updated on $current_date"
echo "commit message: $commit_message"

git commit -a -m "$commit_message"
git push origin master