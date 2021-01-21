const myDialog = new BaseDialog("Dialog Title", /*style*/); // Anuke what style
//Add "go back" button
myDialog.addCloseButton();
//Add text to the main content
myDialog.cont.add("Goodbye.");
//Show dialog
myDialog.show();