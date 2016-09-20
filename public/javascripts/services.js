app.factory('notes', ['$http', function ($http) {
    var o = {
        notes: []
    };

    o.getAllNotes = function () {
        return $http.get('/getAllNotes').success(function (data) {
            angular.copy(data, o.notes);
        });
    };

    o.createNote = function (note) {
        return $http.post('/createNote', note).success(function (data) {
            o.notes.push(data);
        });
    };

    o.editNote = function (note) {
        return $http.put('/editNote', note).success(function (data) {
            for (var i = 0; i < o.notes.length; i++) {
                if (data._id == o.notes[i]._id) {
                    o.notes[i] = data;
                }
            }
        });
    }

    o.deleteNote = function (id) {
        return $http.delete('/deleteNote/' + id)
            .success(function (data) {
                console.log('deleted');
                return true;
            })
            .error(function (err) {
                return false;
            });
    }

    return o;
}]);

app.factory('users', ['$http', function ($http) {
    var o = {};

    o.authen = function (username, password) {
        if (username == 'bell' && password == '1123579') return true;
        return false;
    }

    return o;
}]);