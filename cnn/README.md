## Python3

To install dependencies into a [Python 3.8.2](https://www.python.org/downloads/) **Virtual Environment** (venv):

```bash
python3 -m pip install --upgrade pip
python3 -m venv MY_ENV
source MY_ENV/Scripts/activate
```

Then, after activating the selected environment:

```bash
python3 -m pip install -r requirements.txt
```

Windows has issues writing UTF-8 characters (including Korean characters):

```bash
export PYTHONUTF8=1
set PYTHONUTF8=1
```

Run those before executing:

```bash
python3 hangul.py
```