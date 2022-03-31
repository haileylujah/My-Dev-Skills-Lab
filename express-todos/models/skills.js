const skills = [
    {id: 100001, skill: 'HTML', done: true},
    {id: 100002, skill: 'CSS', done: true},
    {id: 100003, skill: 'Javascript', done: true},
    {id: 100004, skill: 'Node', done: false},
    {id: 100005, skill: 'Express', done: false},
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    };
    
    function getAll() {
    return skills;
    }
   
    function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
    }

    function create(skill) {
      skill.id = Date.now() % 1000000;
      skill.done = false;
      skills.push(skill);
      }

    function deleteOne(id) {
      const idx = skills.findIndex(skill => skill.id === parseInt(id));
      skills.splice(idx, 1);
    }