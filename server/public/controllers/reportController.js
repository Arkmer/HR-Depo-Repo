app.controller('reportController', ['CustomService', '$scope', function(CustomService, $scope){
    console.log('reportController');
    let self = this;
    $scope.header = 'Report page';

    self.getEmployees = CustomService.getEmployees;
    self.getEmployees();
    self.employeeArray = CustomService.employeeArray.list.length;

    
  
    console.log( self.employeeArray );

}])