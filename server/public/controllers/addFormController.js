app.controller('addFormController', ['CustomService', '$scope', function(CustomService, $scope){
    console.log('addFormController');
    let self = this;
    $scope.header = 'Add Employee page';

    self.text = CustomService.text;

    self.newEmployee = CustomService.newEmployee;
    self.sendEmployees = CustomService.sendEmployees;

}]);