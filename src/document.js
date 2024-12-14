export class ProjectConstructor {

    constructor(Name) {
       
        this.Name = Name;

    }


    CreateProject(){

        return this.Name;

    }

}

export class ToDoList {

    constructor(title, description, dueDate, priority, notes, checklist) {
        
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checklist = checklist;

    }
}




