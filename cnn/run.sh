#!/usr/bin/env bash

python3 -m pip install --upgrade pip && python3 -m venv MY_ENV && source MY_ENV/Scripts/activate && python3 -m pip install -r requirements.txt && export PYTHONUTF8=1 && set PYTHONUTF8=1 && python3 hangul.py

wait