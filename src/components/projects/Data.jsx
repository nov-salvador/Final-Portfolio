import kamarites from '../../../public/assets/kamarites.png';
import ahas from '../../../public/assets/ahas.png';
import serbisio from '../../../public/assets/serbisio.png';
import ilutomo from '../../../public/assets/ilutomo.png';
import bridge_crack_detection from '../../../public/assets/bridge-crack-detection.png';
import spacex from '../../../public/assets/spacex.png';
import weatherPrediction from '../../../public/assets/weatherPrediction.png'
import titanic from '../../../public/assets/titanic.png'
import ETL from '../../../public/assets/ETL.png'
import dataVisualization from '../../../public/assets/dataVisualization.png'
import freightRate from '../../../public/assets/freightRate.png'

export const projectsData =[
  {
    id: 1,
    picture: bridge_crack_detection,
    demo: "https://bridge-crack-detection.netlify.app/",
    github:"https://github.com/nov-salvador/CNN-Learning-with-Bridge-Crack-Detection",
    title: "Bridge Crack Detection",
    category: "Machine Learning",
    description: "Developed an end-to-end computer vision application to classify bridge images as crack or no crack using a pretrained ResNet18 model and transfer learning. \
                  Implemented image preprocessing, data augmentation, class weighting, early stopping, and learning-rate scheduling to \
                  improve model performance.\
                  Built a FastAPI REST API for image inference and containerized the application using Docker."
  },
  {
    id: 2,
    picture: spacex,
    demo: "https://github.com/nov-salvador/SpaceX_Landing",
    github:"https://github.com/nov-salvador/SpaceX_Landing",
    title: "SpaceX Landing Prediction",
    category: "Data Science",
    description: "Collected launch data through REST APIs and web scraping. Cleaned and transformed datasets using Pandas. Developed and compared classification models including Logistic Regression, Decision Tree, Random Forest, SVM, and \
                  Performed SQL queries for exploratory analysis. Built interactive visualizations with Matplotlib, Folium, and Dash. \
                  XGBoost. Optimized model performance using GridSearchCV and cross-validation."
  },
  {
    id: 3,
    picture: weatherPrediction,
    demo: "https://github.com/nov-salvador/Machine-Learning-with-Python---IBM",
    github:"https://github.com/nov-salvador/Machine-Learning-with-Python---IBM",
    title: "Weather Prediction",
    category: "Machine Learning",
    description: "Built a classification model to predict weather conditions based on past data. Performed data preprocessing, feature \
                  engineering, and exploratory data analysis. Trained and evaluated multiple machine learning algorithms. \
                  Assessed performance using metrics such as Accuracy, Precision, Recall, F1-score, and Confusion Matrix."
  },
  {
    id: 4,
    picture: titanic,
    demo: "https://github.com/nov-salvador/Machine-Learning-with-Python---IBM",
    github:"https://github.com/nov-salvador/Machine-Learning-with-Python---IBM",
    title: "Titanic Survival Prediction",
    category: "Data Science",
    description: "Developed a binary classification model to predict passenger survival on the Titanic dataset. Handled missing values, \
                  encoded categorical variables, and engineered new features. \
                  Compared several machine learning models and evaluated performance using cross-validation and classification \
                  metrics."
  },
  {
    id: 5,
    picture: dataVisualization,
    demo: "https://github.com/nov-salvador/Data-Visualization",
    github:"https://github.com/nov-salvador/Data-Visualization",
    title: "Data Visualization",
    category: "Data Science",
    description: "Created interactive dashboards using Dash. Built geospatial visualizations with Folium. Produced statistical charts and \
                  exploratory analyses with Matplotlib. Communicated insights through effective data visualization techniques."
  },
  {
    id: 6,
    picture: ETL,
    demo: "https://github.com/nov-salvador/Python_Project_Data_Engineering_ETL ",
    github:"https://github.com/nov-salvador/Python_Project_Data_Engineering_ETL ",
    title: "ETL Pipeline",
    category: "Data Science",
    description: "ETL pipeline that extracts data from external sources, transforms it through cleaning and mapping, and \
                  loads it into SQLite and CSV. Automated preprocessing workflows using Python and Pandas"
  },
  {
    id: 7,
    picture: freightRate,
    demo: "https://github.com/nov-salvador/Freight-Rate-Prediction/",
    github:"https://github.com/nov-salvador/Freight-Rate-Prediction/",
    title: "Freight Rate Prediction",
    category: "Machine Learning",
    description: "Developed a machine learning solution to predict freight rates from historical shipment data. \
                  Performed exploratory data analysis, data-quality checks, feature engineering, and preprocessing to prepare the dataset for modeling."
  },
  {
    id: 8,
    picture: kamarites,
    demo: "https://kamarites.netlify.app",
    github:"https://github.com/nov-salvador/NodeApp",
    title: "KaMarites",
    category: "Fullstack",
    description: "Social media web app. Technologies used are MongDB, ExpresJs, React, NodeJs."
  },
  {
    id: 9,
    picture: ahas,
    demo: "https://ahas.netlify.app",
    github:"https://github.com/nov-salvador/AHAS",
    title: "Ahas",
    category: "Javascript",
    description: "Old-school gaming with my very own Javascript Snake Game!."
  },
  {
    id: 10,
    picture: serbisio,
    demo: "https://serbisio.netlify.app",
    github:"https://github.com/nov-salvador/Serbisio-Team-Project",
    title: "Serbisio",
    category: "Fullstack",
    description: "Explore, Apply, Succeed: Your Gateway to Opportunity. A MERN stack web application."
  },
  {
    id: 11,
    picture: ilutomo,
    demo: "https://ilutomobaybe.netlify.app",
    github:"https://github.com/nov-salvador/React-RecipeWeb",
    title: "iLutoMo",
    category: "React",
    description: "From mouthwatering classics to innovative delights, discover the essence of homemade goodness. Using React stack."
  }
];

export const categories = ['All', 'Data Science', 'Machine Learning', 'Fullstack', 'React', 'Javascript']

