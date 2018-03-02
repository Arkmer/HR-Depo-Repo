app.controller('trackerController', ['CustomService', '$scope', function(CustomService, $scope){
    console.log('trackerController');
    let self = this;
    $scope.header = 'Tracker page';

    self.getEmployees = CustomService.getEmployees;
    

    self.getEmployees();
    self.employeeArray = CustomService.employeeArray;

   self.deleteEmployee = CustomService.deleteEmployee;

   self.editEmployee = CustomService.editEmployee;
}])