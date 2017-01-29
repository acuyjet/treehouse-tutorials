'use strict';

let followerCount = 34;

let tableHtml = [
    '<table class="table">',
    '<thead>',
    '<tr>',
    '<td>Name</td>',
    '<td>Followers</td>',
    '</tr>',
    '</thead>',
    '<tbody>',
    '<tr>',
    '<td>Jamie</td>',
    '</td>' + followerCount + '</td>',
    '<tr>',
    '</tbody>',
    '</table>'
].join('\n');

console.log(tableHtml);