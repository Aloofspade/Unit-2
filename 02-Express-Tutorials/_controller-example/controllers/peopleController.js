let {people} = require('../../data')




const readPeople = (req, res) => {
    res.status(200).json({success: true, data: people});
}

const createPerson = (req, res) => {
    const {name} = req.body;
    if(!name){
        return res.status(400).json({success: false, msg: "please enter a name"})
    }
    people.push({id: new Date().getTime(), name})
    res.json({success: true, person: name})
}

//crud
//create <== Posts 
//Read <== Get 
//Update <== Put/patch
//delete <== delete


  const updatePerson =  (req, res) => {
    const {id} = req.params;
    const {name} = req.body;

    const person = people.find((each) => each.id === 1*id)
    if(!person){
        return res.status(400).json({success: false, msg: `no person with id ${id}`}
        )
    }
    const newPeople = people.map((person) => {
        if (person.id === 1 * id){
            person.name = name
        }
        return person
    })

    people = newPeople;
    res.status(202).json({success: true, data: people})
}

 const deletePerson = (req, res) => {
    const {id} = req.params;
   

    const person = people.find((each) => each.id === 1*id)
    if(!person){
        return res.status(400).json({success: false, msg: `no person with id ${id}`}
        )
    }
    newPeople = people.filter((person) => {
        return person.id === 1 * id
    });
    people = newPeople;
    res.status(200).json({success: true, data: people});

}

module.exports = {readPeople, createPerson, deletePerson, updatePerson}