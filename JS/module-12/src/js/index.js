
const form = document.querySelector(".bookmarks__form");
const addButton = document.querySelector(".bookmark-add__button");
const container = document.querySelector(".bookmarks__container");
const input = document.querySelector(".bookmark__input");
const urlListWrap = document.querySelector(".bookmarks__list");

const LOCALSTORAGE = (w => {
    if (!w) return;

    const isActive = "localStorage" in w;
    
    const get = key => {
        try {
            const LSData = localStorage.getItem(key);
            console.log(typeof(JSON.parse(LSData)));
            return LSData === null && typeof(JSON.parse(LSData)) != object ?
                undefined :
                JSON.parse(LSData);
        } catch (err) {
            console.error("Get state error: ", err);
        }
    };

    const set = (key, value) => {
        try {
            const valueToSave = JSON.stringify(value);
            localStorage.setItem(key, valueToSave);
        } catch (err) {
            console.error("Set state error: ", err);
        }
    };

    const userAPI = {
        isActive,
        get,
        set,
    };

    return userAPI;
})(window);

function handleOnDomcreated() {
    const urlList = LOCALSTORAGE.get("urlList") ? LOCALSTORAGE.get("urlList") : [];
    updateLocalStorage(urlList);
    createMarkup(urlList);
};

function updateLocalStorage(valueToUpdate) {
    LOCALSTORAGE.set("urlList", valueToUpdate);
}

function checkForPrevSaved(name) {
    let urlListFromLS = LOCALSTORAGE.get("urlList");
    const savedUrlNames = urlListFromLS ? urlListFromLS.map(i => i.name) : [];
    return savedUrlNames.some(bookmark => bookmark === name);
}

function checkForValidUrlSyntax(url) {
    const regExp = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
    return regExp.test(url)
}

function handleAddBookmark(e) {
    e.preventDefault();

    const target = event.target;
    let urlListFromLS = LOCALSTORAGE.get("urlList");

    if (target.textContent === "Add") {
        let urlList = urlListFromLS.reverse();
        const bookmark = {
            name: "",
        };

        if (!checkForValidUrlSyntax(input.value)) {
            alert("Not valid Url");
            form.reset();
            return
        }

        if (!checkForPrevSaved(input.value)) {
            bookmark.name = input.value;
            urlList.push(bookmark);

            createMarkup(urlListFromLS.reverse());
            updateLocalStorage(urlList);
            form.reset();
        } else {
            alert("This URL has been already saved!!!");
            form.reset();
        }
    }
}

function createMarkup(list) {
    urlListWrap.innerHTML = "";
    const source = document.querySelector("#bookmark__template").innerHTML.trim();
    const template = Handlebars.compile(source);
    const markup = list.reduce((acc, bookmark) => acc + template(bookmark), "");
    urlListWrap.insertAdjacentHTML("beforeend", markup);
}

function handleRemoveBookmark(e) {
    e.preventDefault();
    const target = event.target;

    if (target.textContent === "x") {
        const card = target.parentNode;
        const bookmarkToDelete = target.previousElementSibling.textContent;

        let urlListFromLS = LOCALSTORAGE.get("urlList");
        let updatedUrlList = urlListFromLS.filter(e => e.name != bookmarkToDelete);

        localStorage.removeItem('urlList');
        updateLocalStorage(updatedUrlList);

        card.remove();
        form.reset();
    }
}

form.addEventListener('click', handleAddBookmark);
container.addEventListener('click', handleRemoveBookmark)
document.addEventListener('DOMContentLoaded', handleOnDomcreated)