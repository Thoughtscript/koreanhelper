import tensorflow as tf
import json
import numpy as np

if __name__ == '__main__':

    try:

        MAIN_IMAGE_DIR = 'G:\_active\koreanhelper\data\cnn_images'
        RESIZED_IMAGE_SIZE = 800
        CLASS_MAPPINGS_FILE = open('G:\_active\koreanhelper\data\cnn_image_mappings.json')
        CLASS_MAPPINGS = json.load(CLASS_MAPPINGS_FILE)

        print("\n\n*************************************************************************************************************\n\n")
        print("Label class mappings loaded and found:")
        print(CLASS_MAPPINGS)
        print("\n\n*************************************************************************************************************\n\n")

        def kerasLoadDir(directory):
            dir_data_set = tf.keras.utils.image_dataset_from_directory(
                directory,
                labels='inferred',
                image_size=(RESIZED_IMAGE_SIZE, RESIZED_IMAGE_SIZE),
            )
            return dir_data_set
 
        DATA_SET = kerasLoadDir(MAIN_IMAGE_DIR)
        print("\n\n*************************************************************************************************************\n\n")

        def train(dataset):
            # Tweak these settings
            model = tf.keras.Sequential([
                tf.keras.layers.Rescaling(1./255, input_shape=(RESIZED_IMAGE_SIZE, RESIZED_IMAGE_SIZE, 3)),
                tf.keras.layers.Flatten(input_shape=(RESIZED_IMAGE_SIZE, RESIZED_IMAGE_SIZE)),
                tf.keras.layers.Dense(128, activation='relu'),
                tf.keras.layers.Dense(256, activation='relu'),
                tf.keras.layers.Dense(512, activation='relu'),
                 tf.keras.layers.Dense(1024, activation='relu'),
                 tf.keras.layers.Dense(512, activation='relu'),
                tf.keras.layers.Dense(256, activation='relu'),
                tf.keras.layers.Dense(128, activation='relu'),
                tf.keras.layers.Dense(64),
                tf.keras.layers.Dense(RESIZED_IMAGE_SIZE)
            ])

            model.compile(
                optimizer=tf.keras.optimizers.Adam(learning_rate=1e-3),
                loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
                metrics=['accuracy']
            )

            model.fit(dataset, epochs=500, use_multiprocessing=True)

            print("\n\n*************************************************************************************************************\n\n")
            return model
        
        def predict(model):
            probability_model = tf.keras.Sequential([model])
            predictions = probability_model.predict(DATA_SET)
            print("\n\n*************************************************************************************************************\n\n")
            return predictions
        
        def mapToLabels(predictions):
            for x in range(0, len(predictions), 1):
                argMax = np.argmax(predictions[x])
                label = CLASS_MAPPINGS[str(argMax)]
                print(label)
            print("\n\n*************************************************************************************************************\n\n")

        mapToLabels(predict(train(DATA_SET)))

    except Exception as ex:
        print('Exception: ' + str(ex))