
const initCatalog = () => {
    const productsToShow = products;
    console.log(productsToShow);
    const catalogContent = document.querySelector("#catalogContent");

    const createLabel = (amountInStock) => {
        const labelList = document.createElement('div');
        const label = document.createElement('span');
        const labelText = document.createElement('span');

        labelList.className = "catalog-item__label-list";

        if (amountInStock > 0) {
            labelText.textContent = amountInStock + " in Stock";
            label.className = "catalog-item__label catalog-item__label-stock";

        } else {
            labelText.textContent = "Out of Stock";
            label.className = "catalog-item__label catalog-item__label-sold";
        }

        labelList.appendChild(label);
        label.appendChild(labelText);
        return labelList;
    };

    const createPriceBox = (price) => {
        const priceBox = document.createElement('div');
        const priceText = document.createElement('span');

        priceBox.className = "catalog-item__price-box";
        priceText.className = "catalog-item__price current-price";

        priceText.textContent = price;

        priceBox.appendChild(priceText);

        return priceBox;
    };

    for (let index = 0; index < productsToShow.length; index++) {
        const currentItem = productsToShow[index];
        const currentItemAmount = currentItem.amountInStock;

        const catalogItem = document.createElement('button');
        const itemImage = document.createElement('img');
        const itemName = document.createElement('p');

        catalogItem.className = "button-6 catalog-item";
        itemImage.className = "catalog-item__image";
        itemName.className = "catalog-item__name";

        itemImage.src = currentItem.miniImg;
        itemName.textContent = currentItem.name;


        if (currentItemAmount > 0) {
            catalogItem.addEventListener("click", () => { modalSelect(currentItem.miniImg); });
        }

        catalogContent.appendChild(catalogItem);
        catalogItem.appendChild(createLabel(currentItemAmount));
        catalogItem.appendChild(itemImage);
        catalogItem.appendChild(itemName);

        // if (currentItem.oldPrice) {
        //     catalogItem.appendChild(createPriceBox(currentItem.oldPrice));
        // }
    }
};

const modalSelect = (imgPath) => {
    const touchSupported = window.matchMedia("(pointer: coarse)").matches;
    const modalSection = document.createElement("section");
    const modalWrapper = document.createElement("div");
    const modalContent = document.createElement("div");
    const modalHeading = document.createElement("h2");
    const modalSubHeading = document.createElement("h3");
    document.createElement("a");
    document.createElement("h3");
    document.createElement("p");
    document.createElement("p");
    const texts = modals.select.texts;
    modalSection.classList.add("modal");
    modalSection.ariaHidden = true;
    modalSection.id = "modal";
    modalWrapper.classList.add("modal__wrapper");
    modalContent.classList.add("modal__content");
    modalHeading.classList.add("modal__heading");

    const createBackButton = () => {
        const backButton = document.createElement("button");

        backButton.className = "back-button";
        backButton.addEventListener("click", handlerClickBack);

        modalContent.appendChild(backButton);
    };

    const createImage = () => {
        const modalImg = document.createElement("img");
        modalImg.className = "modal__img modal__img-animate";

        cfg.selectedProduct = products.find(p => p.miniImg === imgPath || p.images.includes(imgPath));
        if (cfg.selectedProduct) {
            console.log(cfg.selectedProduct.id); // Output the id of the found product
        } else {
            console.log("Product not found");
        }

        modalImg.src = imgPath;
        modalImg.width = "150";
        modalContent.appendChild(modalImg);
    };

    const createModalText = (text) => {
        // const modalText = document.createElement("p");
        // modalText.classList.add("modal__text");
        modalHeading.textContent = texts.header;
        const modalDescription = document.createElement('p');
        modalDescription.classList.add("modal__text");
        modalDescription.textContent = text;
        modalContent.appendChild(modalDescription);
        // modalText.innerHTML = text;
        // modalContent.append(modalText);
    };

    const handlerClickOk = (e) => {
        closeCatalog();
        enableLoader();
        setTimeout(() => {
            checkoutInit();
            disableLoader();
            // openCatalog();
            openCheckout();
        }, 2680);
    };

    const handlerClickBack = (e) => {
        setTimeout((event) => {
            modalSection.remove();
        }, 200);
    };

    const createModalButton = () => {
        const modalButtonOk = document.createElement("button");
        modalButtonOk.style.display = "inline-block";
        modalButtonOk.classList.add(
            "button",
            "modal__button",
            "modal__button-ok"
        );
        modalButtonOk.style.background = "#0838A2";
        modalButtonOk.style.color = "white";
        modalButtonOk.innerText = texts.button.toUpperCase();
        modalButtonOk.ariaLabel = texts.button;
        modalContent.appendChild(modalButtonOk);
        modalButtonOk.focus();
        modalButtonOk.addEventListener("click", handlerClickOk);
    };

    const createModalPrice = (newPrice) => {
        const newPriceBox = document.createElement('p');
        newPriceBox.className = "catalog-modal__price new-price";
        newPriceBox.textContent = "With Coupon Your New Price: " + newPrice;

        return newPriceBox;
    };

    createBackButton();
    createImage();
    document.querySelector("#catalog").querySelector("#boxes").appendChild(modalSection);
    modalSection.appendChild(modalWrapper);
    modalWrapper.appendChild(modalContent);
    modalContent.appendChild(modalHeading);
    modalContent.appendChild(modalSubHeading);
    createModalText(cfg.selectedProduct.description);
    // modalContent.appendChild(createModalPrice(cfg.selectedProduct.newPrice));
    createModalButton();
    // document.querySelector(".boxes").style.pointerEvents = "auto";
};