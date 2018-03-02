app.service('CustomService', ['$http',  function($http){
    console.log('CustomService');
    let self = this;

    self.employeeArray = {list: []};
    self.totalArray = {list:[]};

    self.newEmployee = {};

    self.getEmployees = function () {
        $http({
            method:'GET',
            url:'/hr'
        }).then(function (response) {
            console.log(response.data);
            self.employeeArray.list = response.data;
            
        }).catch(function (error) {
            console.log('error on get: ', error);
        })
    }

    self.sendEmployees = function (newEmployee) {
        console.log(newEmployee);
        $http({
            method: 'POST',
            url: 'hr',
            data: newEmployee
        }).then(function (response) {
            self.getEmployees();
        }).catch(function (error) {
            console.log('error on post: ', error);
        })
    }
    
    self.getTotalEmployees = function() {
        $http({
            method:'GET',
            url:'/hr/total'
        }).then(function (response) {
            console.log(response.data);
            self.totalArray.list = response.data;
            
        }).catch(function (error) {
            console.log('error on get: ', error);
        })
    }

}]);