
function run() {
    getInput();

    //general disp value
    document.getElementById('general').innerHTML = 
    `<kbd>${(q(input)/31).toFixed(4)}</kbd>`;

    document.getElementById('group').innerHTML = 
    `<kbd>${(q1(input)/3).toFixed(4)}</kbd>`;

    document.getElementById('rest').innerHTML = 
    `<kbd>${(q2(input)/24).toFixed(4)}</kbd>`;

    document.getElementById('fisher').innerHTML = 
    `<kbd>${((q1(input)/3)/(q2(input)/24)).toFixed(4)}</kbd>`;

    document.getElementById('table').innerHTML = 
    `<kbd>${(tableValue).toFixed(4)}</kbd>`;

    document.getElementById('compare').innerHTML = 
    `<kbd>${comp()}</kbd>`;

}