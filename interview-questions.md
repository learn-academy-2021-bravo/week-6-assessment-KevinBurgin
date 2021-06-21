# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating an API with a model called Animal that has_many Sightings, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer:
  $rails g migration add_description_to_table
  Inside migration file: 
  add_column :table, :description, :column_name
  The name would be: animal_id
  This would be part of the sightings model


  Researched answer:
  $rails g migration add_description_to_table
  Inside migration file: 
  add_column :table, :description, :column_name
  The name would be: animal_id
  This would be part of the sightings model



2. Which RESTful routes must always be passed params? Why?

  Your answer:Update, Destroy, and Create because in order to manipulate the data you first have to locate it.

  Researched answer:Update, Destroy, and Create because in order to manipulate the data you first have to locate it.



3. Name three rails generator commands. What is created by each?

  Your answer:
  $rails generate migration add_item_to_schedule = this command will add a column to your table
  $rails generate model Table title:string = this command will create a table/model
  $rails generate migration rename_column_in_table = this command will allow you to rename a column in a table

  Researched answer: $rails generate migration add_item_to_schedule = this command will add a column to your table
  $rails generate model Table title:string = this command will create a table/model
  $rails generate migration rename_column_in_table = this command will allow you to rename a column in a table



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET"    /students       Show = this will show all students

method="GET"    /students/2     Show = this will show student at position 2

method="GET"    /students/new   New = this will add a new student

method="GET"    /students/edit/2    Edit = this will allow you to edit the student at posittion 2

method="POST"   /students/       Create = this will allow you to 

method="PATCH"  /students/2      Update = this will allow you to update the student at position 2

method="DELETE" /students/2      Delete = this will allow you to delete the student at position 2



5. As a developer, you want to make an application that will help you manage your to do list. To get started, you want to create the API. Create 10 user stories that will help you get your application started.


-1-As a developer of the API I can create a To-Do-List application.
-2-As a developer, my To-Do-List can have a name_of_to_do and date_to_be_done.
-3-As a developer, I can add new To-Do directly to my database.
-4-As a developer, I can update a To-Do in the database.
-5-As a developer, I can destroy a To-Do in the database.
-6-As a developer, I can add a new column in my database that logs the duration of time the To-Do takes.
-7-As a developer, I can rename one of the columns in the database.
-8-As a user, I can see a form where I can create a new To-Do task.
-9-As a user, I can navigate from the home page to the show page and viceversa.
-10-As a user, when I submit a new To-Do, I am redirected to the home page.