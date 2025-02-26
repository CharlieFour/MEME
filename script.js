document.addEventListener("DOMContentLoaded", function ()
{
    const socials = document.querySelector(".socials");
    
    socials.addEventListener("animationiteration", () =>
        {
        socials.style.animation = "none";
        setTimeout(() =>
        {
            socials.style.animation = "roll 10s linear infinite";
        }, 10);
    });
});
