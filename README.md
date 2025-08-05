# My Portfolio


## [click to visit ](https://aakashmaurya.netlify.app/) 



[05/08, 11:04 am] Shubham Jspm: import pandas as pd

import matplotlib.pyplot as plt

#Load a sample dataset (e.g., from a URL or local file)

Replace the URL with the path to your dataset

try:

dfpd.read csv('https://raw.githubusercontent.com/mwaskom/seaborn-data/master/iris.csv')

Display the first few rows of the dataframe

print("Dataset Head:")

display(df.head())

# Visualize the data (example: scatter plot of sepal length vs. sepal width)

plt.figure(figsize=(8, 6))

plt.scatter (df['sepal length'], dff'sepal width'))

plt.xlabel('Sepal Length')

plt.ylabel('Sepal Width')

plt.title('Sepal Length vs. Sepal Width in Iris Dataset')

plt.grid(True)plt.xlabel('Sepal length')

plt.ylabel('Sepal Width')

plt.title('Sepal Length vs. Sepal Width in Iris Dataset")

pit.grid(True)

plt.show()

Styles

except Exception as et

Print("An error occurred: (e]")

REARLI Please ensure you have a dataset available and replace the placeholder URL/path with the correct one.")
[05/08, 11:06 am] Shubham Jspm: import pandas as pd
import matplotlib.pyplot as plt

try:
    df = pd.read_csv('https://raw.githubusercontent.com/mwaskom/seaborn-data/master/iris.csv')
    print("Dataset Head:")
    print(df.head())

    plt.figure(figsize=(8, 6))
    plt.scatter(df['sepal_length'], df['sepal_width'])
    plt.xlabel('Sepal Length')
    plt.ylabel('Sepal Width')
    plt.title('Sepal Length vs. Sepal Width in Iris Dataset')
    plt.grid(True)
    plt.show()

except Exception as e:
    print("An error occurred:", e)
    print("Please ensure you have a dataset available and replace the placeholder URL/path with the correct one.")