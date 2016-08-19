app.controller('learningSchedulerCtrl', ['$scope', 'notes', function ($scope, notes) {
    notes.getAllNotes();
    $scope.notes = notes.notes;
    console.log($scope.notes);
    $scope.revisionTimes = [];

    $scope.getDayText = function (i, day) {
        if (i == 0) {
            return 'Study at: ' + day;
        }
        return 'Revise #' + i + ' at: ' + day;
    }

    $scope.addRevisionTime = function () {
        $scope.revisionTimes.push($scope.inputRevisionTime);
        $scope.inputRevisionTime = '';
    }

    $scope.createNote = function () {
        if (!$scope.isCreating) {
            $scope.inputNoteType = 'text';
            $scope.inputName = '';
            $scope.inputStudyTime = '';
            $scope.inputContent = '';
            $scope.inputRevisionTime = '';
            $scope.revisionTimes = [];
            $scope.isCreating = true;
        } else {
            $scope.isCreating = false;
        }
    }

    $scope.saveNote = function () {
        var days = [];
        var day1 = $scope.inputStudyTime;
        if (day1.length) {
            days.push(day1);
            for (var i = 0; i < $scope.revisionTimes.length; i++) {
                days.push($scope.revisionTimes[i]);
            }
        }
        var data = {
            name: $scope.inputName,
            type: $scope.inputNoteType,
            content: $scope.inputContent,
            days: days
        }
        notes.createNote(data);
        $scope.isCreating = false;
    }

    $scope.removeNote = function (id) {
        var l=$scope.notes.length;
        if(notes.deleteNote(id)){
            for(var i=0; i<l; i++){
                if($scope.notes[i]._id==id){
                    $scope.notes.splice(i,1);
                    return;
                }
            }
        }
    }

    window.setTimeout(function () {
        $('.datepicker').datepicker({
            orientation: "top",
            format: 'dd/mm/yyyy'
        });
    }, 0);
}])