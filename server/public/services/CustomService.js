app.service('CustomService', function(){
    console.log('CustomService');
    let self = this;

    self.employeeArray = {list: []};

    self.getEmployees = function () {
        $http({
            method:''
        })
    }

})