const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

   console.log(explorers)

   console.log("Ejercicio 2, punto 1")
   explorers.forEach(explorer => console.log(explorer.name))
   ///punto 2
   explorers.forEach(item => console.log(item.stack))
   ///punto 3
   console.log("Ejercicio 2.3")
   const explorer_stack = explorers.map(myexplolist => myexplolist.stack)
   console.log(explorer_stack)
   console.log("Ejercicio 2.4")
   const word = explorers.filter(myexplolist => myexplolist.stack.includes('js'));
   console.log(word)
   console.log("Ejercicio 2.5")
   const cdmx = explorers.find(myexplolist => myexplolist.city == "CDMX");
   console.log(cdmx)
   console.log("Ejercicio 2.6")
   const exercises = explorers.map(myexplolist => myexplolist.exercises_completed).reduce((prevValue,CurrValue) => prevValue+CurrValue,0);
   console.log(exercises)
   console.log("Segundo metodo")
   const exercises2 = explorers.reduce((prev,curr)=> prev+curr.exercises_completed,0)
   console.log(exercises)
   console.log("Ejercicio 2.7")
   const frontend = explorers.some((myexplolist) => myexplolist.missions.frontend.isFinished == true);
   console.log(frontend)
   console.log("Ejercicio 2.8")
   const every = explorers.every((myexplolist) => myexplolist.missions.onboarding.isFinished == true);
   console.log(every)