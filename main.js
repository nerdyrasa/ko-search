/**
 * Created by rasai_000 on 3/4/2017.
 */
function employee(firstName, lastName, department) {
  this.firstName = ko.observable(firstName);
  this.lastName = ko.observable(lastName);
  this.department = ko.observable(department);
}

function model() {
  var self = this;
  self.employees = ko.observableArray("");
  self.query = ko.observable("");
  self.filteredEmployees = ko.computed(function () {
    var filter = self.query().toLowerCase();

    if (!filter) {
      return self.employees();
    } else {
      return ko.utils.arrayFilter(self.employees(), function (item) {
        return item.firstName().toLowerCase().indexOf(filter) !== -1;
      });
    }
  });
}

var mymodel = new model();

loaddata();
ko.applyBindings(mymodel);


function loaddata() {
  mymodel.employees.push(new employee("Bob", "Jones", "HR"));
  mymodel.employees.push(new employee("Mary", "Smith", "HR"));
  mymodel.employees.push(new employee("Greg", "Black", "Finance"));
}