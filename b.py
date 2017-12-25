# -*- coding: utf-8 -*-
import os 
import shutil
import time
path = '/home/ubuntu/.ssh/'
path2 = '/home/ubuntu/workspace/'
def changefile():
    os.chdir(path2)
    os.system('chmod 400 ~/.ssh/id_rsa')
    shutil.copy("id_rsa.pub","/home/ubuntu/.ssh/") 
    shutil.copy("id_rsa","/home/ubuntu/.ssh/")
    os.system('git config --global user.name "Deft-pawN"')
    os.system('git config --global user.email "799397253@qq.com"')
    os.system('git add .')
    os.system('git  commit -m "'+time.strftime("%y/%m/%d")+'"')
    #os.system('git push')
    #git config --global user.name "Deft-pawN"
    #git config --global user.email "799397253@qq.com"
changefile()