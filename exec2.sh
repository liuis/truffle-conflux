#!/bin/zsh

#dir =`pwd`
#echo $dir
head="truffle-conflux"

for i in `cd packages;ls $1`;
do
  strTail=`print $i | awk '{print substr($0,8)}'`;
  new=$head$strTail
  echo "start @ $new"
  #cmd="ack -l --print0 "$i"| xargs -0 -n 1 sed -i -e 's/"$i"/"$new"/g'"
  cmd="cd packages;mv "$i"   "$new
  eval $cmd 
  #echo $cmd 
  #echo "satrt clean"
  #exec `find . -name "*-e" | xargs rm`
  echo "---------------------------"
done

exit
