let richTextField = document.getElementsByClassName(richTextField)

function enableEditMode () {
    richTextField.document.designMode = 'On';
}

function execCmd (command) {
    richTextField.execCommand(command, false, null)
}