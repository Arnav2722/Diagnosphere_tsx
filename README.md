# Diagnosphere

Diagnosphere is a modern **TypeScript + React (TSX)** based application focused on building an intuitive and scalable healthcare/diagnostics-related interface. The project is designed with clean architecture, reusable components, and a strong emphasis on maintainability and user experience.

---

## Features

- Built with **React + TypeScript (TSX)**
- Modular and reusable UI components
- Responsive design for multiple screen sizes
- Scalable project structure
- Optimized for performance and readability

---

## Tech Stack

- **Frontend:** React, TypeScript (TSX)
- **Styling:** CSS / Tailwind / Styled Components _(depending on your setup)_
- **Tooling:** Vite / CRA / npm / yarn
- **Version Control:** Git & GitHub

---

## Project Structure

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

## Getting Started

Follow these steps to run the project locally:

### 1️ Clone the repository

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

## 2 Technical aspect

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

---

### Deployment

The project is deployed using Render Dashboard. Make sure to set up environment variables and configurations properly for deployment.

**Dataset Links**
All the datasets were used from kaggle and drive.

- [CSV Dataset](https://www.kaggle.com/datasets/arnav22215027/diagnosphere-csv-dataset)
- [Image Dataset](https://drive.google.com/drive/folders/1INwJbORQ4vTgcD-nTVLG1_vUfPLDzwBD?usp=sharing)

---

### Future Improvements

- Authentication & authorization

- Addition to Disease Prediction (ECG Reader, etc.)

- Unit and integration testing

- API integration

- Advanced data visualization

- Accessibility enhancements

---

### Contributing

Contributions are welcome!
Feel free to fork the repository, create a feature branch, and submit a pull request.

### ⭐ If you like this project, don’t forget to give it a star!
