class ToDoList{

 constructor(title,description,dueDate,priority,notes,checklist){

        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checklist = checklist;


    }

    ConstructToDO(){

        return `${this.title} + ${this.description} + ${this.dueDate}`


    }




}

const firstTask = new ToDoList (`Hobbit`,`I like to watch this movie`,`20th december`);

//console.log(firstTask)