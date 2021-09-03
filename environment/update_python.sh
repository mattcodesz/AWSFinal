#!/bin/bash
sudo yum -y update
alias python=python3
curl -O https://bootstrap.pypa.io/get-pip.py
sudo python36 get-pip.py
python -m pip --version
rm get-pip.py
sudo python36 -m pip install --upgrade --force-reinstall awscli
sudo python36 -m pip install boto3