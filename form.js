// // function Employees(firstName, lastName, employeeNumber, title, lastReviewScore, salary) {
// //   this.firstName = firstName;
// //   this.lastName = lastName;
// //   this.employeeNumber = employeeNumber;
// //   this.title = title;
// //   this.lastReviewScore = lastReviewScore;
// //   this.salary = salary;
// // }

// $(function() {

//   var $newEmployeeForm = $('#newEmployeeForm');
//   var $firstName = $('#firstName');
//   var employeeList = [];

//   $newEmployeeForm.on('submit', function(e){
//     e.preventDefault();

//         var firstName = $firstName.val();

//         employeeList.push(
//           { 'firstName': firstName }
//         );

//         addToList(firstName);

//         console.log(employeeList);
//   });
// });

// function addToList(firstName, lastName){

//   $("#employeeChart").append("<li class='employee'> <p>"+firstName+"</p><p>"+lastName+"</p> </li>");
// }

$(document).ready(function(){
 
  // form submit
  var $form = $('#EmployeeInfo');
  var $FirstName = $('#FirstName');
  var $LastName = $('#LastName');
  var $EmployeeNumber = $('#EmployeeNumber');
  var $Title = $('#Title');
  var $LastReviewScore = $('#LastReviewScore');
  var $Salary = $('#Salary');
  var $Employees = $('#Employees');
 
  $form.on('submit', function(e){
    e.preventDefault();
    var employee = new Employee(
        $FirstName.val(),
        $LastName.val(),
        $EmployeeNumber.val(),
        $Title.val(),
        $LastReviewScore.val(),
        $Salary.val()
      );
      appendEmployee(employee);
  });
 
  // constructor for employee
  var Employee = function(firstName, lastName, empNum, title, score, salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.empNum = empNum;
    this.title = title;
    this.score = score;
    this.salary = salary;
  }
 
  // function to append employees
  function appendEmployee(emp){
    var $li = $('<li>');
    $li.attr('class', 'score' + emp.score);
    $li.text(
      emp.firstName + ' ' + emp.lastName + ', ' +
      emp.empNum + ', ' +
      emp.title + ', ' +
      emp.score + ', ' +
      emp.salary + '. '
    );
 
    var $button = $('<button>');
    $button.text('Delete');
    $button.attr('class', 'js-delete');
 
    $li.append($button);
 
    $Employees.append($li);
  }
 
  // function to delete employees
  $Employees.on('click', '.js-delete', function(e){
    e.preventDefault();
    $(this).parent().remove();
  })
 
  // colors per rating
});