    // MULTI-ACTION BUTTON
    {
        // ENABLE ALL MENU BUTTONS
        document.querySelectorAll(".mab").forEach(multiAction => {
const menuButton = multiAction.querySelector(".mab--button--menu");
const list = multiAction.querySelector(".mab--list");


menuButton.addEventListener('click', () => {
list.classList.toggle("mab--list--visible")
});

        });
        // HIDE ALL LISTS WHEN CLICKING ELSEWHERE ON THE PAGE
        document.addEventListener('click', e => {
            const keepOpen = (
                e.target.matches(".mab--list")
                || e.target.matches(".mab--button--menu")
                || e.target.closest(".mab--button--menu")
            );
            if (keepOpen) return;
            document.querySelectorAll(".mab--list").forEach(list => {
                list.classList.remove("mab--list--visible");
            });
        });
    }