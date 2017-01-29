'use strict';

const student = {
    name: 'Jamie',
    followerCount: 34
};

let tableHtml = `<table class="table">
    <thead>
        <tr>
            <td>Name</td>
            <td>Followers</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>${student.name}</td>
            <td>${student.followerCount}</td>
        </tr>
    </tbody>
</table>`;

console.log(tableHtml);