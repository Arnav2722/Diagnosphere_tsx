<!-- # Diagnosphere | A ML Based Web Application

![Pyhon 3.4](https://img.shields.io/badge/ide-Jupyter_notebook-blue.svg) ![Python](https://img.shields.io/badge/Language-Python-brightgreen.svg) ![Frontend](https://img.shields.io/badge/Frontend-Bootstrap-purple.svg)

## Table of Content

- [Problem statment / Why this topic?](#Problem-statment)
- [Flow Chart / Archeticture](#Flow-chart)
- [Directory Tree](#directory-tree)
- [Installation](#installation)
- [Quick start](#Quick-start)
- [Technical Aspect](#technical-aspect)
- [Team](#team)

## Problem Statment

The envisioned project holds significant value in the medical domain. It proposes the development of a machine learning-driven web application dedicated to medical diagnostics. The project entails the creation of a machine learning model, seamlessly integrated into the web application, enabling users to upload their medical data for analysis. The application will employ the developed machine learning model to detect health diseases. Subsequently, users can schedule appointments with doctors through the web application if they seek professional advice. Additionally, a chat (email) feature will facilitate communication between patients and doctors within the platform.

## Why this Project?

While humans are prone to errors, machines are not, and their predicted outcomes can be assessed for accuracy through machine learning. Bearing this in mind, extensive research was conducted in the realms of allopathic, homeopathic, and ayurvedic data. Due to the limited availability of research papers for patient datasets in homeopathy and ayurvedic medicine, the decision was made to utilize allopathic datasets accessible on platforms such as Kaggle and the UCI machine learning portals.

## Flow chart

Front-end UX/UI, Back-end Machine learning, Deep learning flow chart

![ml](https://user-images.githubusercontent.com/62024355/120781058-4fac3300-c546-11eb-83be-dfc8319fd2f3.png)

## Directory Tree

```
├── data
├── Pyhon notebooks code files
├── trained models.pkl file
├── static logos
├── Templates
│   ├── Home.html
│   ├── contact.html
│   ├── about us.html
│   ├── services.html
│   ├── css folder
│   ├── js folder
│   ├── images folder
│   └── fonts folder
│         ├── Diabetes
│         ├── Breast Cancer
│         ├── Heart Disease
│         ├── Kidney Disease
│         ├── Liver Disease
│         ├── Malaria
│         └── Pneumonia
├── app.py
├── readme.md
└── requirements.txt


```

## Installation

This project was made using [python 3.6.8](https://www.python.org/downloads/release/python-368/). Download and install the same version before running this program.

## Quick start

**Step-1:** Download the files in the repository.<br>
**Step-2:** Get into the downloaded folder, open command prompt in that directory and install all the dependencies using following command<br>

```python
pip install -r requirements.txt
```

**Step-3:** After successfull installation of all the dependencies, run the following command<br>

```python
python app.py
```

```python
or
flask run
```

**Step-4:** Go to the **New command prompt** of root folder, run the following commands in new cmd terminal<br>

```
cd templates
index1.html
```

## Technical aspect

This webapp was developed using Flask Web Framework. The models used to predict the diseases were trained on large Datasets. All the links for datasets and the python notebooks used for model creation are mentioned below in this readme. The webapp can predict following Diseases:

- Diabetes
- Breast Cancer
- Heart Disease
- Kidney Disease
- Liver Disease
- Malaria
- Pneumonia

**Models with their Accuracy of Prediction**

| Disease        | Type of Model            | Accuracy |
| -------------- | ------------------------ | -------- |
| Diabetes       | Machine Learning Model   | 74.03%   |
| Breast Cancer  | Machine Learning Model   | 96.49%   |
| Heart Disease  | Machine Learning Model   | 100%     |
| Kidney Disease | Machine Learning Model   | 96.88%   |
| Liver Disease  | Machine Learning Model   | 77.97%   |
| Malaria        | Deep Learning Model(CNN) | 94.78%   |
| Pneumonia      | Deep Learning Model(CNN) | 95%      |


**Dataset Links**
All the datasets were used from kaggle and drive.

- [CSV Dataset](https://www.kaggle.com/datasets/arnav22215027/diagnosphere-csv-dataset)
- [Image Dataset](https://drive.google.com/drive/folders/1INwJbORQ4vTgcD-nTVLG1_vUfPLDzwBD?usp=sharing)

## Team

[Arnav Sharma](https://github.com/Arnav2722) <br>
[Jahnvi Sharma](https://github.com/jahnvi02-star) -->

# 🩺 Diagnosphere

Diagnosphere is a modern **TypeScript + React (TSX)** based application focused on building an intuitive and scalable healthcare/diagnostics-related interface. The project is designed with clean architecture, reusable components, and a strong emphasis on maintainability and user experience.

---

## ✨ Features

- ⚛️ Built with **React + TypeScript (TSX)**
- 🎨 Modular and reusable UI components
- 📱 Responsive design for multiple screen sizes
- 🧩 Scalable project structure
- 🚀 Optimized for performance and readability

---

## 🛠️ Tech Stack

- **Frontend:** React, TypeScript (TSX)
- **Styling:** CSS / Tailwind / Styled Components _(depending on your setup)_
- **Tooling:** Vite / CRA / npm / yarn
- **Version Control:** Git & GitHub

---

## 📂 Project Structure

```
Diagnosphere_tsx/
│── backend/
│ ├── models/
│ ├── Python Notebooks/
│ ├── app.py
│ ├── requirements.txt
│
│── frontend/
│ ├── public/
│ ├── src/
│   ├── assets/
│   ├── components/
│   ├── hooks/
│   ├── lib/
│   ├── pages/
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│ ├── package.json
│ ├── index.html
│── README.md


```

---

## 🚀 Getting Started

Follow these steps to run the project locally:

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Arnav2722/Diagnosphere_tsx.git
cd Diagnosphere_tsx
cd frontend
npm install
npm run dev
cd ..
cd backend
pip install -r requirements.txt
python app.py or flask run
```

The frontend should be running on port 5173 , and the backend on port 5000 (If backend port is different, then change it in the code also).

### Deployment

The project is deployed using Render Dashboard. Make sure to set up environment variables and configurations properly for deployment.

### Future Improvements

- Authentication & authorization

- Addition to Disease Prediction (ECG Reader, etc.)

- Unit and integration testing

- API integration

- Advanced data visualization

- Accessibility enhancements

### Contributing

Contributions are welcome!
Feel free to fork the repository, create a feature branch, and submit a pull request.

### ⭐ If you like this project, don’t forget to give it a star!
