# My Portfolio


## [click to visit ](https://aakashmaurya.netlify.app/) 

import pandas as pd
import numpy as np

# Create a sample student dataset with missing values
data = {
    'student_id': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    'math_score': [85, 78, np.nan, 92, 65, 70, 88, np.nan, 80, 90],
    'science_score': [90, np.nan, 88, 95, 70, 75, np.nan, 90, 82, 85],
    'english_score': [78, 85, 80, np.nan, 72, 88, 90, 76, 84, 79]
}

# Create the DataFrame
student_df = pd.DataFrame(data)

# Display the original dataset
print("Original Student Dataset:")
print(student_df)

# Check for missing values
print("\nMissing values before imputation:")
print(student_df.isnull())
