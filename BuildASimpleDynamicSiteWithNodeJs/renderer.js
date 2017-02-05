var fs = require('fs');

function mergeValues(values, content) {
    // Cycle over keys
    for (var key in values) {
        // Replace all {{key}} with value from values object
        content = content.replace('{{' + key + '}}', values[key]);
    }
    // Return merged content
    return content;
}

function view(templateName, values, res) {

    // Read from template files
    // fs.readFile('./views/' + templateName + '.html', (error, fileContents) => {
    //     if (error) throw error;
    //     // Insert values into content

    //     // Write out contents to response
    //     res.write(fileContents);
    // });

    // Rewrite to not wait on callback
    var fileContents = fs.readFileSync('./views/' + templateName + '.html', {
        encoding: 'utf8'
    });

    // Insert values into content
    fileContents = mergeValues(values, fileContents);

    // Write out contents to response
    res.write(fileContents);
}

module.exports.view = view;