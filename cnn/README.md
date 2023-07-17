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

Or:

```bash
bash run.sh
```

## Example Output

```

Label class mappings loaded and found:
{'0': 'ㅏ', '1': 'ㅑ', '2': 'ㅓ', '3': 'ㅕ', '4': 'ㅗ', '5': 'ㅛ', '6': 'ㅜ', '7': 'ㅠ', '8': 'ㅡ', '9': 'ㅣ'}


*************************************************************************************************************


Found 23 files belonging to 3 classes.
2023-07-17 16:06:33.824200: I tensorflow/core/platform/cpu_feature_guard.cc:193] This TensorFlow binary is optimized with oneAPI Deep Neural Network Library (oneDNN) to use the following CPU instructions in performance-critical operations:  AVX AVX2
To enable them in other operations, rebuild TensorFlow with the appropriate compiler flags.


*************************************************************************************************************


Epoch 1/500
1/1 [==============================] - 3s 3s/step - loss: 6.6847 - accuracy: 0.0000e+00
Epoch 2/500
1/1 [==============================] - 2s 2s/step - loss: 6.6263 - accuracy: 0.4783
Epoch 3/500
1/1 [==============================] - 2s 2s/step - loss: 6.3247 - accuracy: 0.4783
Epoch 4/500
1/1 [==============================] - 2s 2s/step - loss: 5.4655 - accuracy: 0.4783

...

1/1 [==============================] - 2s 2s/step - loss: 0.0000e+00 - accuracy: 1.0000
Epoch 494/500
1/1 [==============================] - 2s 2s/step - loss: 0.0000e+00 - accuracy: 1.0000
Epoch 495/500
1/1 [==============================] - 2s 2s/step - loss: 0.0000e+00 - accuracy: 1.0000
Epoch 496/500
1/1 [==============================] - 2s 2s/step - loss: 0.0000e+00 - accuracy: 1.0000
Epoch 497/500
1/1 [==============================] - 2s 2s/step - loss: 0.0000e+00 - accuracy: 1.0000
Epoch 498/500
1/1 [==============================] - 2s 2s/step - loss: 0.0000e+00 - accuracy: 1.0000
Epoch 499/500
1/1 [==============================] - 2s 2s/step - loss: 0.0000e+00 - accuracy: 1.0000
Epoch 500/500
1/1 [==============================] - 2s 2s/step - loss: 0.0000e+00 - accuracy: 1.0000


*************************************************************************************************************


1/1 [==============================] - 0s 349ms/step


*************************************************************************************************************


ㅑ
ㅓ
ㅓ
ㅑ
ㅓ
ㅓ
ㅑ
ㅑ
ㅏ
ㅓ
ㅓ
ㅓ
ㅏ
ㅏ
ㅏ
ㅓ
ㅑ
ㅓ
ㅓ
ㅑ
ㅏ
ㅓ
ㅑ


*************************************************************************************************************
```