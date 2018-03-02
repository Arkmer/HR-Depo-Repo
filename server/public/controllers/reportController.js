app.controller('reportController', ['CustomService', '$scope', function(CustomService, $scope){
    console.log('reportController');
    let self = this;
    $scope.header = 'Report page';

    self.getEmployees = CustomService.getEmployees;
    self.getEmployees();
    self.employeeArray = CustomService.employeeArray.list.length;

    self.money = CustomService.money;
    self.money();
    self.totalArray = CustomService.totalArray.list;
    self.salaryArray =[];
    console.log(self.totalArray);
    
    
    for (total of self.totalArray) {
        self.salaryArray.push(total.Salary);
    }
    console.log(self.salaryArray);
    self.minSalary = Math.min.apply(null, self.salaryArray);
    self.maxSalary = Math.max.apply(null, self.salaryArray);

    self.total = 0;
    for (average of self.salaryArray) {
        self.total += average;
    }
    console.log(self.total);
    self.average = self.total/self.salaryArray.length;
    console.log(self.average);
    
    console.log( self.employeeArray );

    

}])