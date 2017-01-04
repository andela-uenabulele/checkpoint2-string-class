    var clipboard = new Clipboard('.fa-files-o');
    var pasteIcon = document.getElementById('pasteIcon');

    function showTooltip(elem, msg) {
        elem.parentNode.setAttribute('class', 'material-icon tooltipped tooltipped-s');
        elem.parentNode.setAttribute('aria-label', msg);
    }

    function setFocusOnString() {
        var stringInput = document.getElementById('stringInput');
        stringInput.focus();
        stringInput.select();
    }

    clipboard.on('success', function(e) {
        e.clearSelection();
        console.info('Action:', e.action);
        console.info('Text:', e.text);
        showTooltip(e.trigger, 'Copied!');
    });

    pasteIcon.setAttribute('onclick', 'setFocusOnString()');
