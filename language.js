let userLang = navigator.language || navigator.userLanguage;
if (userLang.includes("en")) {
    window.location.href = 'en';  
}
else if (userLang.includes("ru")) {
    window.location.href = 'ru';  
}
else if (userLang.includes("uk")) {
    window.location.href = 'uk';  
}
else
window.location.href = 'en'; 
