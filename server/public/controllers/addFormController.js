app.controller('addFormController', ['CustomService', '$scope', function(CustomService, $scope){
    console.log('addFormController');
    let self = this;
    $scope.header = 'Add Employee page';

    self.text = CustomService.text;

    self.addEmployee = function(nameIn, idIn, titleIn, hireDateIn, salaryIn){
        console.log(CustomService.text);

        // Need to be placed into the schema and sent to the right location

        self.text.list.push(newText);
    }
}])