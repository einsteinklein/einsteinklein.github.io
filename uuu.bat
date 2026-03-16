@echo off
git add .
git commit -m "sync" --amend --no-edit
git push origin main -f
echo 同步成功！
pause