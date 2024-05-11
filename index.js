// Q1 - RESUME IN JSON FORMAT

resume_data = {
    "name": "Deebhika",
    "title": "Data Science and Programming student",
    "contact": {
      "email": "deebhika04@gmail.com",
      "phone": "+91 9498050916",
      "address": "6, Big Street, Koorainadu, Mayiladuthurai, Tamil Nadu"
    },
    "summary": "Enthusiastic student, good at Problem Solving, with a thrist to learn Full Stack Development.",
    "education": {
        "degree": "Bachelor of Science in Data Science and Programming",
        "university": "Indian Institute Of Technology, Madras",
        "year": "2023 - Present"
    },
    "internship_experience": [
        {
            "position": "Data Science Intern",
            "company": "Code Clause",
            "duration": "1 month",
            "tasks": {
                "fraud-detection":"https://github.com/deexp04/CodeClause_Project_Name/tree/main/Fraud_Detection",
                "sales-prediction":"https://github.com/deexp04/CodeClause_Project_Name/tree/main/Sales-Prediction"
            }  
        },
        {
            "position": "Machine Learning Intern",
            "company": "Bharath Intern",
            "duration": "1 month",
            "tasks": {
                "iris-flower-classification":"https://github.com/deexp04/Bharath-Intern/tree/main/Iris-Classification",
                "wine-quality-prediction":"https://github.com/deexp04/Bharath-Intern/tree/main/Wine-Quality-Prediction"
            }
        }
    ],
    "skills": ["Problem solving", "Python", "Flask", "HTML", "CSS"],
    "hobbies": ["Fiction Books", "Chess"],
    "portfolio": "https://github.com/deexp04"
}

// Q2 - ITERATE THROUGH JSON

function loopThroughArray(array_data) {
    for(let i=0; i<array_data.length; i++) {
        if(typeof(array_data[i])==='object') {
            if(Array.isArray(array_data[i])) {
                console.log(i)
                loopThroughArray(array_data[i])
            }
            else {
                console.log(i)
                loopThroughJson(array_data[i])
            }
        }
        else {
            console.log(`${i} : ${array_data[i]}`)
        }
    }
}

function loopThroughJson(resume_data) {
    for(let data in resume_data) {
        if(typeof(resume_data[data])==='object') {
            if(Array.isArray(resume_data[data])) {
                console.log(data+' :')
                loopThroughArray(resume_data[data])
            }
            else {
                console.log(data+' :')
                loopThroughJson(resume_data[data])
            }
        }
        else {
            console.log(`${data} : ${resume_data[data]}`)
        }
            
    }      
}

loopThroughJson(resume_data)