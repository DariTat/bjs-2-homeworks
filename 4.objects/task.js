function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}
let student1 = new Student('Anton', 'male', 39);
let student2 = new Student('Anna', 'female', 26); 

Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
}
Student.prototype.addMark = function(mark) {

  if(this.marks === undefined){
    this.marks = [mark]; 
  } else {
    this.marks.push(mark);
  }
}
Student.prototype.addMarks = function(...arr){
  this.marks = [...arr];
}
Student.prototype.getAverage = function(marks){
  let sum = 0;
  for (let i = 0; i < this.marks.length; i++){
    sum += this.marks[i];
  }
  this.Average = sum/this.marks.length;
  return this.Average;
}
Student.prototype.exclude = function(reason){
  delete Student.prototype.addMark;
  delete Student.prototype.setSubject;
  this.excluded = reason;
}
