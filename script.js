function shortcut(str1, str2) {
    if (str1 === "" || str2 === "") {
        return "";  // If either string is empty, return an empty string
    }
    
    const initial1 = str1.charAt(0).toUpperCase();  // Get the initial letter of str1 (converted to uppercase)
    const initial2 = str2.charAt(0).toUpperCase();  // Get the initial letter of str2 (converted to uppercase)
    
    return initial1 + initial2;  // Return the concatenation of initial letters
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
