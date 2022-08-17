function dialogAppearance() {    
    var dialog = document.getElementById('dialog__box');    
    document.getElementById('show').onclick = function() {    
        dialog.show();    
    };    
    document.getElementById('hide').onclick = function() {    
        dialog.close();    
    };    
}

dialogAppearance();