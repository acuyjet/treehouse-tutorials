function getJSON(url) {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onreadystatechange = handleResponse;
        xhr.onerror = function(error) {
            reject(error);
        };
        xhr.send();

        function handleResponse() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    var employees = JSON.parse(xhr.responseText);
                    resolve(employees)
                } else {
                    reject(this.statusText)
                }
            }
        };
    });
}

var xhr = new XMLHttpRequest();
xhr.open('GET', '../data/employees.json');
xhr.onreadystatechange = handleResponse;
xhr.send();

function handleResponse() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var employees = JSON.parse(xhr.responseText);
        addEmployeesToPage(employees)
    }
};

function generateListItems(employees) {
    var statusHTML = '';
    for (var i = 0; i < employees.length; i += 1) {
        if (employees[i].inoffice === true) {
            statusHTML += '<li class="in">';
        } else {
            statusHTML += '<li class="out">';
        }
        statusHTML += employees[i].name;
        statusHTML += '</li>';
    }

    return statusHTML;
}

function generateUnorderedList(listItems) {
    return '<ul class="bulleted">' + listItems + '</ul>';
}

function addEmployeesToPage(unorderedList) {
    document.getElementById('employeeList').innerHTML = unorderedList;
}

getJSON('../data/employees.json')
    .then(generateListItems)
    .then(generateUnorderedList)
    .then(addEmployeesToPage)
    .catch(function(e) {
        console.log(e);
    });