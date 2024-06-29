function shortcut(str1, str2) {
    if (str1 === "" || str2 === "") {
        return "";  
    }
    
    const initial1 = str1.charAt(0).toUpperCase();  
    const initial2 = str2.charAt(0).toUpperCase();  
    
    return initial1 + initial2;
}

// Do not change the code below.
const str1 = prompt("Enter s1:");
const str2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
