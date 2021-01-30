var one = `{
    "response_code": 0,
    "results": [
        {
            "category": "Entertainment: Musicals & Theatres",
            "type": "multiple",
            "difficulty": "medium",
            "question": "When was the play Macbeth written?",
            "correct_answer": "1606",
            "incorrect_answers": [
                "1605",
                "1723",
                "1628"
            ]
        },
        {
            "category": "Science & Nature",
            "type": "multiple",
            "difficulty": "easy",
            "question": "What is the standard SI unit for temperature?",
            "correct_answer": "Kelvin",
            "incorrect_answers": [
                "Fahrenheit",
                "Celsius",
                "Rankine"
            ]
        },
        {
            "category": "Entertainment: Television",
            "type": "multiple",
            "difficulty": "easy",
            "question": "Who is the main character in the show Burn Notice?",
            "correct_answer": "Michael Westen",
            "incorrect_answers": [
                "Sam Axe",
                "Fiona Glenanne",
                "Madeline Westen"
            ]
        }
        
    ]
}`

            var end = JSON.parse (one)

            for(var i = 0; i < end.results.length; i++){
    
            var Li = document.createElement("li")
            Li.textContent = end.results[i].category
            Li.style.color = "blue"
            Li.style.textAlign = "center"
            document.body.appendChild(Li)

            var Li2 = document.createElement("li")
            Li2.textContent = end.results[i].type
            Li2.style.color = "purple"
            Li2.style.textAlign = "center"
            document.body.appendChild(Li2)

            var Li3 = document.createElement("li")
            Li3.textContent = end.results[i].difficulty
            Li3.style.color = "green"
            Li3.style.textAlign = "center"
            document.body.appendChild(Li3)

            var Li4 = document.createElement("li")
            Li4.textContent = end.results[i].question
            Li4.style.color = "orange"
            Li4.style.textAlign = "center"
            document.body.appendChild(Li4)

            var Li5= document.createElement("li")
            Li5.textContent = end.results[i].correct_answer
            Li5.style.color = "red"
            Li5.style.textAlign = "center"
            document.body.appendChild(Li5)

            var Li6 = document.createElement("li")
            Li6.textContent = end.results[i].incorrect_answers
            Li6.style.color = "black"
            Li6.style.textAlign = "center"
            document.body.appendChild(Li6)
        }


       
        