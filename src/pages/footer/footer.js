import React from "react";

import "./footer.styles.scss";

// import Background from "../../img/bg.png";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-section_upper">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="footer-section_upper_header d-flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="66"
                  height="66"
                  viewBox="0 0 66 66"
                  fill="none"
                >
                  <path
                    opacity="0.8"
                    d="M32.5875 0.491455C14.5899 0.491455 0 15.0609 0 33.0331C0 51.0054 14.5899 65.5748 32.5875 65.5748C48.7346 65.5748 62.1387 53.8474 64.7244 38.4567H64.4906C62.0788 47.8137 53.5729 54.7276 43.45 54.7276C31.4517 54.7276 21.725 45.0147 21.725 33.0331C21.725 21.0516 31.4517 11.3387 43.45 11.3387C53.5729 11.3387 62.0788 18.2525 64.4906 27.6095H64.7244C62.1387 12.2189 48.7346 0.491455 32.5875 0.491455Z"
                    fill="white"
                  />
                  <path
                    d="M0 33.0331C0 15.0609 14.5899 0.491455 32.5875 0.491455C48.7346 0.491455 62.1387 12.2189 64.7244 27.6095H42.7656C40.3539 18.2526 31.848 11.3387 21.725 11.3387C9.72661 11.3387 0 21.0516 0 33.0331Z"
                    fill="white"
                  />
                  <path
                    d="M0 33.033C0 51.0053 14.5899 65.5747 32.5875 65.5747C48.7346 65.5747 62.1387 53.8473 64.7244 38.4566H42.7656C40.3539 47.8136 31.848 54.7275 21.725 54.7275C9.72661 54.7275 0 45.0146 0 33.033Z"
                    fill="white"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="152"
                  height="40"
                  viewBox="0 0 152 40"
                  fill="none"
                >
                  <path
                    d="M26.7438 10.8665C25.8159 4.17456 20.661 0.291748 13.9744 0.291748C6.0947 0.291748 0.15918 6.02772 0.15918 15.7642C0.15918 25.4859 6.02106 31.2366 13.9744 31.2366C21.1471 31.2366 25.9043 26.6037 26.7438 20.853L21.2354 20.8236C20.5432 24.3534 17.6564 26.3389 14.048 26.3389C9.15819 26.3389 5.65285 22.6768 5.65285 15.7642C5.65285 8.96925 9.12874 5.18939 14.0627 5.18939C17.7301 5.18939 20.6021 7.26316 21.2354 10.8665H26.7438Z"
                    fill="white"
                  />
                  <path
                    d="M38.022 31.2807C41.5716 31.2807 43.6924 29.6188 44.6645 27.7215H44.8413V30.8248H49.9667V15.7053C49.9667 9.73404 45.0916 7.93971 40.7762 7.93971C36.019 7.93971 32.3664 10.0576 31.1881 14.1757L36.1663 14.8817C36.6965 13.3374 38.1988 12.0137 40.8057 12.0137C43.2801 12.0137 44.6351 13.2786 44.6351 15.4994V15.5877C44.6351 17.1173 43.0297 17.1908 39.0383 17.6173C34.6493 18.088 30.4517 19.397 30.4517 24.4858C30.4517 28.9275 33.7066 31.2807 38.022 31.2807ZM39.4065 27.3685C37.1825 27.3685 35.5919 26.3537 35.5919 24.3975C35.5919 22.3532 37.374 21.5001 39.76 21.1619C41.1592 20.9707 43.9576 20.6177 44.6498 20.0588V22.7209C44.6498 25.2359 42.6173 27.3685 39.4065 27.3685Z"
                    fill="white"
                  />
                  <path
                    d="M66.6245 8.23386H62.1618V2.82146H56.8301V8.23386H53.6193V12.352H56.8301V24.9123C56.8007 29.1628 59.8936 31.2513 63.8997 31.1336C65.4167 31.0895 66.4624 30.7954 67.0369 30.6042L66.1384 26.4419C65.8439 26.5154 65.24 26.6478 64.5772 26.6478C63.2369 26.6478 62.1618 26.1772 62.1618 24.0299V12.352H66.6245V8.23386Z"
                    fill="white"
                  />
                  <path
                    d="M77.5934 31.2807C81.1429 31.2807 83.2638 29.6188 84.2359 27.7215H84.4126V30.8248H89.5381V15.7053C89.5381 9.73404 84.663 7.93971 80.3476 7.93971C75.5903 7.93971 71.9377 10.0576 70.7594 14.1757L75.7376 14.8817C76.2678 13.3374 77.7701 12.0137 80.377 12.0137C82.8514 12.0137 84.2064 13.2786 84.2064 15.4994V15.5877C84.2064 17.1173 82.601 17.1908 78.6096 17.6173C74.2206 18.088 70.023 19.397 70.023 24.4858C70.023 28.9275 73.278 31.2807 77.5934 31.2807ZM78.9779 27.3685C76.7539 27.3685 75.1632 26.3537 75.1632 24.3975C75.1632 22.3532 76.9453 21.5001 79.3313 21.1619C80.7305 20.9707 83.5289 20.6177 84.2211 20.0588V22.7209C84.2211 25.2359 82.1886 27.3685 78.9779 27.3685Z"
                    fill="white"
                  />
                  <path
                    d="M100.231 0.703562H94.8992V30.8248H100.231V0.703562Z"
                    fill="white"
                  />
                  <path
                    d="M115.581 31.266C122.209 31.266 126.421 26.6037 126.421 19.6176C126.421 12.6167 122.209 7.93971 115.581 7.93971C108.954 7.93971 104.741 12.6167 104.741 19.6176C104.741 26.6037 108.954 31.266 115.581 31.266ZM115.611 27.0008C111.944 27.0008 110.147 23.7357 110.147 19.6029C110.147 15.47 111.944 12.1608 115.611 12.1608C119.219 12.1608 121.016 15.47 121.016 19.6029C121.016 23.7357 119.219 27.0008 115.611 27.0008Z"
                    fill="white"
                  />
                  <path
                    d="M140.785 39.767C146.898 39.767 151.404 36.9726 151.404 31.1925V8.23386H146.146V11.9696H145.852C145.042 10.3371 143.348 7.93971 139.357 7.93971C134.128 7.93971 130.019 12.0284 130.019 19.4558C130.019 26.8243 134.128 30.5012 139.342 30.5012C143.215 30.5012 145.027 28.4274 145.852 26.7655H146.117V31.0454C146.117 34.3693 143.908 35.7371 140.874 35.7371C137.663 35.7371 136.249 34.2222 135.601 32.8986L130.799 34.0605C131.772 37.2226 135.027 39.767 140.785 39.767ZM140.829 26.3242C137.309 26.3242 135.454 23.5886 135.454 19.4264C135.454 15.3229 137.28 12.3079 140.829 12.3079C144.261 12.3079 146.146 15.1464 146.146 19.4264C146.146 23.7357 144.232 26.3242 140.829 26.3242Z"
                    fill="white"
                  />
                </svg>
              </div>

              <p>
                We are a collaboration of non-government organisation and
                professionals working to ensure that government spending.
              </p>

              <div className="social-links">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="37"
                  viewBox="0 0 36 37"
                  fill="none"
                >
                  <rect
                    y="0.951416"
                    width="36"
                    height="36"
                    rx="18"
                    fill="white"
                  />
                  <path
                    d="M21.0271 11.6527V11.6494H21.8711L22.1794 11.711C22.385 11.751 22.5717 11.8034 22.7394 11.8682C22.9071 11.9331 23.0694 12.0087 23.2263 12.0951C23.3832 12.1816 23.5255 12.2697 23.6532 12.3593C23.7798 12.448 23.8934 12.542 23.9941 12.6414C24.0936 12.7419 24.2489 12.7678 24.4599 12.7192C24.6709 12.6705 24.8981 12.603 25.1416 12.5166C25.385 12.4301 25.6258 12.3329 25.8638 12.2248C26.1019 12.1168 26.2469 12.0481 26.2988 12.019C26.3497 11.9887 26.3768 11.9725 26.38 11.9703L26.3832 11.9655L26.3995 11.9574L26.4157 11.9493L26.4319 11.9412L26.4482 11.9331L26.4514 11.9282L26.4563 11.925L26.4612 11.9217L26.4644 11.9169L26.4806 11.912L26.4968 11.9087L26.4936 11.9331L26.4887 11.9574L26.4806 11.9817L26.4725 12.006L26.4644 12.0222L26.4563 12.0384L26.4482 12.0627C26.4427 12.0789 26.4373 12.1005 26.4319 12.1276C26.4265 12.1546 26.3751 12.2626 26.2777 12.4517C26.1803 12.6408 26.0586 12.8326 25.9125 13.0271C25.7665 13.2216 25.6355 13.3686 25.5198 13.468C25.4029 13.5685 25.3255 13.6387 25.2876 13.6787C25.2498 13.7198 25.2038 13.7576 25.1497 13.7922L25.0685 13.8457L25.0523 13.8538L25.0361 13.8619L25.0328 13.8667L25.028 13.87L25.0231 13.8732L25.0198 13.8781L25.0036 13.8862L24.9874 13.8943L24.9841 13.8991L24.9793 13.9024L24.9744 13.9056L24.9711 13.9105L24.9679 13.9153L24.963 13.9186L24.9582 13.9218L24.9549 13.9267H25.0361L25.4905 13.8294C25.7935 13.7646 26.083 13.6863 26.3589 13.5944L26.7971 13.4485L26.8458 13.4323L26.8702 13.4242L26.8864 13.4161L26.9026 13.408L26.9188 13.3999L26.9351 13.3918L26.9675 13.387L27 13.3837V13.4161L26.9919 13.4194L26.9838 13.4242L26.9805 13.4291L26.9757 13.4323L26.9708 13.4356L26.9675 13.4404L26.9643 13.4453L26.9594 13.4485L26.9546 13.4518L26.9513 13.4567L26.9481 13.4615L26.9432 13.4648L26.9351 13.481L26.927 13.4972L26.9221 13.5004C26.9199 13.5037 26.8512 13.5955 26.716 13.776C26.5807 13.9575 26.5077 14.0493 26.4968 14.0515C26.486 14.0547 26.4709 14.071 26.4514 14.1001C26.433 14.1304 26.3183 14.2509 26.1073 14.4616C25.8963 14.6723 25.6897 14.8597 25.4873 15.024C25.2839 15.1893 25.1811 15.3925 25.1789 15.6334C25.1757 15.8733 25.1632 16.1446 25.1416 16.4471C25.1199 16.7497 25.0794 17.0765 25.0198 17.4277C24.9603 17.7789 24.8684 18.176 24.7439 18.619C24.6195 19.0621 24.468 19.4943 24.2894 19.9157C24.1109 20.3371 23.9243 20.7153 23.7295 21.0503C23.5347 21.3853 23.3562 21.6689 23.1939 21.9012C23.0316 22.1335 22.8666 22.3524 22.6988 22.5577C22.5311 22.763 22.319 22.9942 22.0626 23.2514C21.8051 23.5075 21.6644 23.648 21.6406 23.6728C21.6157 23.6966 21.5097 23.7852 21.3225 23.9386C21.1363 24.0931 20.9362 24.2477 20.7219 24.4022C20.5088 24.5556 20.3129 24.6837 20.1344 24.7863C19.9558 24.889 19.7405 25.0062 19.4884 25.1381C19.2373 25.271 18.9657 25.3941 18.6736 25.5076C18.3814 25.6211 18.073 25.7264 17.7484 25.8237C17.4238 25.9209 17.11 25.9966 16.807 26.0506C16.5041 26.1046 16.1605 26.1505 15.7764 26.1884L15.2002 26.2451V26.2532H14.1452V26.2451L14.0072 26.237C13.9152 26.2316 13.8395 26.2262 13.78 26.2208C13.7205 26.2154 13.4959 26.1856 13.1064 26.1316C12.7169 26.0776 12.4112 26.0236 12.1894 25.9695C11.9675 25.9155 11.6375 25.8129 11.1993 25.6616C10.761 25.5103 10.3861 25.3574 10.0745 25.2029C9.76394 25.0494 9.56917 24.9522 9.49017 24.9111C9.41226 24.8711 9.32462 24.8215 9.22723 24.762L9.08115 24.6729L9.07792 24.668L9.07304 24.6648L9.06817 24.6615L9.06492 24.6567L9.04869 24.6486L9.03246 24.6405L9.02923 24.6356L9.02435 24.6323L9.01948 24.6291L9.01623 24.6242L9.013 24.6194L9.00812 24.6161H9V24.5837L9.01623 24.587L9.03246 24.5918L9.1055 24.5999C9.15419 24.6053 9.28675 24.6134 9.50316 24.6242C9.71958 24.6351 9.9495 24.6351 10.193 24.6242C10.4364 24.6134 10.6853 24.5891 10.9396 24.5513C11.1939 24.5135 11.4941 24.4487 11.8404 24.3568C12.1867 24.265 12.5048 24.1558 12.7948 24.0294C13.0837 23.9019 13.2893 23.8068 13.4116 23.7441C13.5327 23.6825 13.7178 23.568 13.9666 23.4005L14.3399 23.1493L14.3432 23.1444L14.3481 23.1412L14.3529 23.1379L14.3562 23.1331L14.3594 23.1282L14.3643 23.125L14.3692 23.1217L14.3724 23.1169L14.3886 23.112L14.4049 23.1088L14.4081 23.0926L14.413 23.0763L14.4179 23.0731L14.4211 23.0682L14.2913 23.0601C14.2047 23.0547 14.1208 23.0493 14.0397 23.0439C13.9585 23.0385 13.8314 23.0142 13.6583 22.971C13.4851 22.9278 13.2985 22.8629 13.0983 22.7765C12.8981 22.69 12.7033 22.5874 12.514 22.4685C12.3246 22.3497 12.1877 22.2508 12.1033 22.1719C12.02 22.0941 11.9118 21.9839 11.7787 21.8413C11.6467 21.6976 11.532 21.55 11.4346 21.3988C11.3372 21.2475 11.2442 21.073 11.1555 20.8752L11.0207 20.5802L11.0126 20.5559L11.0045 20.5316L10.9996 20.5154L10.9964 20.4992L11.0207 20.5024L11.0451 20.5073L11.2236 20.5316C11.3427 20.5478 11.5293 20.5532 11.7836 20.5478C12.0379 20.5424 12.2137 20.5316 12.3111 20.5154C12.4085 20.4992 12.468 20.4884 12.4896 20.483L12.5221 20.4749L12.5627 20.4668L12.6032 20.4587L12.6065 20.4538L12.6114 20.4506L12.6162 20.4473L12.6195 20.4425L12.587 20.4344L12.5546 20.4263L12.5221 20.4182L12.4896 20.4101L12.4572 20.402C12.4355 20.3966 12.3977 20.3857 12.3436 20.3695C12.2895 20.3533 12.1434 20.2939 11.9053 20.1912C11.6673 20.0886 11.4779 19.9886 11.3372 19.8914C11.1962 19.7939 11.0618 19.6872 10.9347 19.5721C10.8081 19.4554 10.6691 19.3052 10.5176 19.1215C10.3661 18.9378 10.2308 18.7244 10.1118 18.4813C9.99279 18.2381 9.90352 18.0058 9.844 17.7843C9.78472 17.5641 9.74561 17.3389 9.72716 17.1116L9.69793 16.7713L9.71416 16.7745L9.73039 16.7794L9.74662 16.7875L9.76285 16.7956L9.77908 16.8037L9.79531 16.8118L10.0469 16.9253C10.2146 17.0009 10.4229 17.0657 10.6718 17.1198C10.9207 17.1738 11.0694 17.2035 11.1181 17.2089L11.1912 17.217H11.3372L11.334 17.2121L11.3291 17.2089L11.3243 17.2057L11.321 17.2008L11.3178 17.1959L11.3129 17.1927L11.308 17.1894L11.3048 17.1846L11.2885 17.1765L11.2723 17.1684L11.2691 17.1635L11.2642 17.1603L11.2593 17.157L11.2561 17.1522L11.2399 17.1441L11.2236 17.136L11.2204 17.1311C11.2171 17.1289 11.1706 17.0944 11.0808 17.0274C10.9921 16.9593 10.899 16.8712 10.8016 16.7632C10.7042 16.6551 10.6069 16.5416 10.5095 16.4228C10.4119 16.3037 10.325 16.1762 10.2498 16.0419C10.174 15.9068 10.094 15.735 10.0096 15.5265C9.92625 15.319 9.86294 15.1099 9.81966 14.8992C9.77639 14.6885 9.75204 14.4805 9.74662 14.2752C9.74121 14.0699 9.74662 13.8943 9.76285 13.7484C9.77908 13.6025 9.81154 13.4377 9.86023 13.254C9.90893 13.0704 9.97927 12.8759 10.0712 12.6705L10.2092 12.3626L10.2173 12.3383L10.2254 12.314L10.2303 12.3107L10.2335 12.3059L10.2368 12.301L10.2417 12.2978L10.2465 12.301L10.2498 12.3059L10.253 12.3107L10.2579 12.314L10.2628 12.3172L10.266 12.3221L10.2693 12.3269L10.2741 12.3302L10.2822 12.3464L10.2904 12.3626L10.2952 12.3658L10.2985 12.3707L10.5176 12.6138C10.6637 12.7759 10.8368 12.9569 11.037 13.1568C11.2372 13.3567 11.3481 13.4604 11.3697 13.468C11.3914 13.4766 11.4184 13.5015 11.4509 13.5426C11.4833 13.5825 11.5915 13.6782 11.7755 13.8294C11.9594 13.9807 12.2002 14.1563 12.4977 14.3562C12.7953 14.5561 13.1253 14.7533 13.4878 14.9478C13.8503 15.1423 14.2399 15.3179 14.6564 15.4746C15.073 15.6313 15.3652 15.7339 15.5329 15.7826C15.7006 15.8312 15.9874 15.8933 16.3931 15.969C16.7989 16.0446 17.1046 16.0932 17.3102 16.1148C17.5158 16.1364 17.6565 16.1489 17.7322 16.1521L17.8458 16.1554L17.8426 16.131L17.8377 16.1067L17.8052 15.9041C17.7836 15.7691 17.7728 15.58 17.7728 15.3368C17.7728 15.0937 17.7917 14.8695 17.8296 14.6642C17.8675 14.4589 17.9243 14.2509 18 14.0402C18.0757 13.8294 18.1499 13.6603 18.2224 13.5328C18.296 13.4064 18.3923 13.2622 18.5113 13.1001C18.6303 12.938 18.7845 12.7705 18.9739 12.5976C19.1632 12.4247 19.3796 12.2707 19.6231 12.1357C19.8665 12.0006 20.0911 11.8979 20.2967 11.8277C20.5023 11.7575 20.6754 11.7115 20.8161 11.6899C20.9567 11.6683 21.0271 11.6559 21.0271 11.6527Z"
                    fill="#3A3D43"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="37"
                  viewBox="0 0 36 37"
                  fill="none"
                >
                  <rect
                    y="0.951416"
                    width="36"
                    height="36"
                    rx="18"
                    fill="white"
                  />
                  <path
                    d="M9 12.3712C9 11.794 9.20271 11.3178 9.60811 10.9427C10.0135 10.5675 10.5405 10.3799 11.1892 10.3799C11.8263 10.3799 12.3417 10.5646 12.7355 10.934C13.1409 11.3149 13.3436 11.8113 13.3436 12.4232C13.3436 12.9773 13.1467 13.439 12.7529 13.8085C12.3475 14.1894 11.8147 14.3799 11.1544 14.3799H11.1371C10.5 14.3799 9.98456 14.1894 9.59073 13.8085C9.19691 13.4275 9 12.9484 9 12.3712ZM9.22587 27.5227V15.9556H13.083V27.5227H9.22587ZM15.2201 27.5227H19.0772V21.0639C19.0772 20.6598 19.1236 20.3481 19.2162 20.1288C19.3784 19.7363 19.6245 19.4044 19.9546 19.1331C20.2847 18.8618 20.6988 18.7262 21.1969 18.7262C22.4942 18.7262 23.1429 19.5978 23.1429 21.3409V27.5227H27V20.8907C27 19.1822 26.5946 17.8864 25.7838 17.0033C24.973 16.1201 23.9015 15.6786 22.5695 15.6786C21.0753 15.6786 19.9112 16.3193 19.0772 17.6007V17.6353H19.0598L19.0772 17.6007V15.9556H15.2201C15.2432 16.325 15.2548 17.4737 15.2548 19.4015C15.2548 21.3294 15.2432 24.0364 15.2201 27.5227Z"
                    fill="#3A3D43"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="37"
                  viewBox="0 0 36 37"
                  fill="none"
                >
                  <rect
                    y="0.951416"
                    width="36"
                    height="36"
                    rx="18"
                    fill="white"
                  />
                  <path
                    d="M18.4383 25.9313L14.3761 25.8554C13.0608 25.829 11.7423 25.8818 10.4528 25.6077C8.49128 25.1982 8.35232 23.1903 8.20691 21.506C8.00654 19.1382 8.08411 16.7274 8.46222 14.3793C8.67567 13.0618 9.51571 12.2756 10.8148 12.1901C15.2001 11.8796 19.6146 11.9164 23.9903 12.0612C24.4524 12.0745 24.9177 12.1471 25.3734 12.2297C27.6227 12.6326 27.6775 14.908 27.8233 16.8235C27.9688 18.7587 27.9074 20.7038 27.6294 22.6259C27.4065 24.2173 26.9798 25.5518 25.1795 25.6807C22.9237 25.8491 20.7197 25.9848 18.4576 25.9416C18.4577 25.9313 18.4447 25.9313 18.4383 25.9313ZM16.0501 21.9024C17.75 20.905 19.4175 19.9242 21.1076 18.9334C19.4046 17.936 17.7403 16.9552 16.0501 15.9645V21.9024Z"
                    fill="#3A3D43"
                  />
                </svg>
              </div>
            </div>

            <div className=" col-lg-5 footer-section_upper_right d-flex justify-content-between">
              <ul>
                <h3>Links</h3>
                <li>Campaigns</li>
                <li>Resouces</li>
                <li>News</li>
                <li>About Us</li>
              </ul>

              <ul>
                <h3>Resources</h3>
                <li>Transparency Toolkit</li>
                <li>Evidence</li>
                <li>Best Practices</li>
              </ul>

              <ul>
                <h3>Work with Us</h3>
                <li>Contact Us</li>
                <li>Join Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-section_lower">
        <div className="container d-flex justify-content-between">
          <span>Terms and Conditions</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="105"
            height="26"
            viewBox="0 0 105 26"
            fill="none"
          >
            <g clip-path="url(#clip0_109_3520)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M32.6672 17.5016C31.7109 15.7744 30.0824 15.0835 28.1871 15.0835C25.4325 15.0835 23.2393 17.0284 23.2393 20.317C23.2393 23.6609 25.3182 25.5471 28.2807 25.5471C29.1899 25.5461 30.0821 25.3012 30.8636 24.8381C31.6452 24.3749 32.2873 23.7106 32.7227 22.9148L30.6437 21.8508C30.1725 22.9701 29.4622 23.3051 28.5648 23.3051C27.0091 23.3051 26.2988 22.0166 26.2988 20.317C26.2988 18.6174 26.8982 17.3289 28.5648 17.3289C28.9753 17.3524 29.3704 17.4932 29.7028 17.7346C30.0352 17.9759 30.2909 18.3076 30.4393 18.69L32.6672 17.5016Z"
                fill="#7C7D82"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M38.0274 17.3152C39.694 17.3152 40.4078 18.6037 40.4078 20.1928C40.4078 22.0029 39.694 23.3018 38.0274 23.3018C36.3608 23.3018 35.647 22.0133 35.647 20.3137C35.647 18.6141 36.3573 17.3152 38.0274 17.3152ZM38.0274 15.0698C34.909 15.0698 32.7227 16.9594 32.7227 20.3033C32.7227 23.6473 34.9159 25.5334 38.0274 25.5334C41.1389 25.5334 43.3287 23.6473 43.3287 20.3033C43.3287 16.9594 41.1389 15.0698 38.0274 15.0698Z"
                fill="#7C7D82"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M43.9277 25.2741H46.8521V19.0872C46.8521 18.1925 47.2263 17.4256 48.4078 17.4256C49.5339 17.4256 49.8319 18.0785 49.8319 19.0526V25.2707H52.7563V19.1632C52.7563 18.1545 53.2621 17.4359 54.2358 17.4359C55.3411 17.4359 55.7361 18.0716 55.7361 19.4741V25.2741H58.6604V17.6743C58.6604 15.3944 56.5607 15.0558 55.5871 15.0558C54.9896 15.0415 54.3957 15.1522 53.8436 15.3806C53.2916 15.6091 52.7937 15.9503 52.3821 16.3823C52.0876 15.9586 51.6914 15.6152 51.2296 15.3835C50.7678 15.1518 50.2551 15.0391 49.7384 15.0558C48.8375 15.0558 47.6005 15.3184 46.8521 16.1958V15.3322H43.9277V25.2741Z"
                fill="#7C7D82"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M59.5967 25.2742H62.5176V19.0872C62.5176 18.1925 62.8953 17.4256 64.0733 17.4256C65.2514 17.4256 65.487 18.0785 65.487 19.0527V25.2707H68.4114V19.1632C68.4114 18.1545 68.9172 17.436 69.8943 17.436C70.9996 17.436 71.3912 18.0716 71.3912 19.4741V25.2742H74.3155V17.6744C74.3155 15.3944 72.2158 15.0559 71.2422 15.0559C70.6447 15.0418 70.0508 15.1525 69.4989 15.381C68.9469 15.6094 68.449 15.9506 68.0371 16.3824C67.743 15.9585 67.3468 15.6149 66.8849 15.3831C66.423 15.1514 65.9102 15.0389 65.3934 15.0559C64.496 15.0559 63.2591 15.3184 62.5072 16.1959V15.3322H59.5967V25.2742Z"
                fill="#7C7D82"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M80.2261 17.3152C81.8962 17.3152 82.6065 18.6037 82.6065 20.1928C82.6065 22.0029 81.9135 23.3018 80.2261 23.3018C78.5387 23.3018 77.8457 22.0133 77.8457 20.3137C77.8457 18.6141 78.5595 17.3152 80.2261 17.3152ZM80.2261 15.0698C77.1077 15.0698 74.9248 16.9594 74.9248 20.3033C74.9248 23.6473 77.1146 25.5334 80.2261 25.5334C83.3376 25.5334 85.5308 23.6473 85.5308 20.3033C85.5308 16.9594 83.3376 15.0698 80.2261 15.0698Z"
                fill="#7C7D82"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M86.3174 25.2743H89.2418V19.0874C89.2418 18.1927 89.616 17.4258 90.7975 17.4258C91.9201 17.4258 92.2216 18.0787 92.2216 19.0528V25.2709H95.1459V17.9301C95.1459 16.4343 94.4876 15.0698 92.128 15.0698C91.2271 15.0698 89.9902 15.3324 89.2418 16.2098V15.3324H86.3174V25.2743Z"
                fill="#7C7D82"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M104.906 16.5103C103.613 15.6071 102.081 15.1058 100.502 15.0698C98.479 15.0698 96.2857 16.044 96.2857 18.5485C96.2857 22.0789 102.176 20.8457 102.176 22.3968C102.176 23.2915 101.071 23.4055 100.582 23.4055C99.2517 23.4055 98.3335 22.8631 97.4361 22.0029L95.6309 23.5747C97.093 24.9185 98.33 25.5334 100.502 25.5334C102.675 25.5334 105.007 24.6007 105.007 21.9857C105.007 18.2652 99.1165 19.6677 99.1165 17.9681C99.1165 17.4638 99.6397 17.2012 100.371 17.2012C101.289 17.2012 102.543 17.5743 103.125 18.2652L104.906 16.5103Z"
                fill="#7C7D82"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M32.6672 6.06022C31.7109 4.33298 30.0824 3.64209 28.1871 3.64209C25.4325 3.64209 23.2393 5.57659 23.2393 8.86525C23.2393 12.2126 25.3182 14.0988 28.2807 14.0988C29.1902 14.0971 30.0824 13.8515 30.864 13.3878C31.6455 12.9241 32.2875 12.2592 32.7227 11.463L30.6437 10.399C30.1725 11.5217 29.4622 11.8568 28.5648 11.8568C27.0091 11.8568 26.2988 10.5683 26.2988 8.86525C26.2988 7.16219 26.8982 5.87713 28.5648 5.87713C28.9779 5.90187 29.3748 6.0456 29.7076 6.29087C30.0403 6.53615 30.2945 6.87243 30.4393 7.25892L32.6672 6.06022Z"
                fill="#7C7D82"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M33.3809 13.8364H36.3052V8.08123C36.3052 6.97925 36.9982 6.68217 38.7306 6.4749L39.0494 6.4369V3.85986C38.0486 3.90119 37.0882 4.2648 36.3122 4.8962V3.89786H33.3809V13.8364Z"
                fill="#7C7D82"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M48.9899 9.46287C48.9691 6.40567 47.7322 3.64209 44.0975 3.64209C41.0623 3.64209 39.2051 5.6595 39.2051 9.16924C39.2051 11.9708 41.0034 14.1022 44.0975 14.1022C46.3289 14.1022 47.9089 13.2248 48.9483 11.3386L46.7377 10.2056C45.8958 11.4008 45.3899 11.9605 44.3123 11.9605C43.3768 11.9605 42.1572 11.3628 42.1398 9.45596L48.9899 9.46287ZM42.0913 7.67C42.1185 7.16089 42.3387 6.68109 42.7073 6.3277C43.0759 5.97432 43.5654 5.77375 44.0767 5.76659C44.3363 5.74987 44.5966 5.78691 44.8411 5.87537C45.0856 5.96383 45.3092 6.1018 45.4976 6.28059C45.686 6.45938 45.8353 6.67512 45.936 6.91424C46.0368 7.15336 46.0868 7.41068 46.0829 7.67H42.0913Z"
                fill="#7C7D82"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M55.6948 9.68741C55.6948 11.2039 54.832 11.9674 53.6886 11.9674C52.9956 11.9674 52.3234 11.6219 52.3234 10.8481C52.3234 10.0743 52.9956 9.76341 53.7267 9.5596L55.6948 8.99652V9.68741ZM58.5083 6.51275C58.4875 4.2708 56.7828 3.64209 54.0524 3.64209C52.7011 3.64209 50.0401 3.90463 49.9465 6.75111H52.7566C52.909 5.76313 53.356 5.4246 54.295 5.4246C55.0815 5.4246 55.6809 5.74241 55.6809 6.48857V7.31074L54.6137 7.46273C51.426 7.91181 49.4961 8.75125 49.4961 11.1417C49.4961 13.0486 50.9202 14.0953 52.8328 14.0953C53.8722 14.0953 55.3448 13.591 55.8299 12.8068H55.868C55.8857 13.1588 55.9485 13.5071 56.0551 13.8431H58.7543C58.5441 13.1733 58.4561 12.4713 58.4944 11.7705L58.5083 6.51275Z"
                fill="#7C7D82"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M65.3826 4.08442H63.6502V1.22412H60.7258V4.10169H59.3018V5.89456H60.7258V11.1108C60.7258 12.5479 61.0723 14.0989 63.574 14.0989C64.2115 14.0989 65.0743 14.0229 65.4485 13.9849V11.6877C65.1563 11.7221 64.8625 11.7405 64.5684 11.743C64.0417 11.743 63.6502 11.5392 63.6502 10.755V5.87729H65.3826V4.08442Z"
                fill="#7C7D82"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M66.4844 3.89786V13.8364H69.4053V3.89786H66.4844ZM69.4053 2.77515V0.533203H66.4844V2.77515H69.4053Z"
                fill="#7C7D82"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M73.3416 13.8365H76.2833L79.6962 3.89795H76.5847L74.8592 10.9209H74.8211L73.0991 3.89795H69.9668L73.3416 13.8365Z"
                fill="#7C7D82"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M89.1375 9.46287C89.1167 6.40567 87.8797 3.64209 84.2451 3.64209C81.2098 3.64209 79.3457 5.65259 79.3457 9.16924C79.3457 11.9708 81.144 14.1022 84.2381 14.1022C86.4695 14.1022 88.0495 13.2248 89.0716 11.3386L86.8888 10.2056C86.0433 11.4008 85.5375 11.9605 84.4633 11.9605C83.5278 11.9605 82.3082 11.3628 82.2909 9.45596L89.1375 9.46287ZM82.2389 7.67C82.2661 7.16089 82.4862 6.68109 82.8548 6.3277C83.2235 5.97432 83.7129 5.77375 84.2243 5.76659C84.4825 5.75234 84.7408 5.79122 84.9833 5.88079C85.2258 5.97036 85.4472 6.10872 85.6337 6.28725C85.8203 6.46578 85.968 6.68067 86.0676 6.91855C86.1673 7.15644 86.2168 7.41222 86.2131 7.67H82.2389Z"
                fill="#7C7D82"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.9492 3.46968C9.51669 3.45073 8.09536 3.72274 6.77174 4.26912C5.44812 4.81551 4.24994 5.62483 3.25017 6.64779C1.178 8.70646 0.00921551 11.5004 0.000101438 14.4169C-0.00613709 15.8506 0.27544 17.2711 0.828251 18.5947C1.38106 19.9183 2.19393 21.1182 3.21898 22.1238C4.22812 23.147 5.43116 23.9601 6.7582 24.5158C8.08525 25.0714 9.50982 25.3586 10.9492 25.3607C13.897 25.3503 16.7204 24.1751 18.8006 22.0927C19.8136 21.0898 20.6122 19.8925 21.1482 18.5732C21.6842 17.2539 21.9464 15.84 21.919 14.4169C21.9319 12.9766 21.6571 11.5481 21.1105 10.2148C20.5639 8.88146 19.7565 7.66998 18.7354 6.651C17.7144 5.63201 16.5 4.82592 15.1632 4.27972C13.8263 3.73352 12.3938 3.45815 10.9492 3.46968ZM10.9803 5.44909C12.1624 5.44493 13.3336 5.67474 14.4259 6.12519C15.5183 6.57565 16.5101 7.23779 17.3439 8.07323C18.1776 8.90867 18.8368 9.90081 19.2831 10.9921C19.7295 12.0834 19.9541 13.2522 19.944 14.4307C19.9678 15.5937 19.7532 16.7493 19.3136 17.8268C18.8739 18.9043 18.2183 19.881 17.3869 20.6971C15.6884 22.395 13.3856 23.3548 10.9803 23.3674C9.80443 23.3678 8.64024 23.1346 7.55573 22.6815C6.47122 22.2283 5.48812 21.5643 4.66384 20.7282C3.82178 19.9044 3.15159 18.9227 2.69191 17.8395C2.23222 16.7563 1.99213 15.593 1.98548 14.4169C2.00091 12.0276 2.96375 9.74132 4.66384 8.05721C5.48266 7.21601 6.46541 6.5507 7.55167 6.10217C8.63793 5.65365 9.80473 5.4314 10.9803 5.44909Z"
                fill="#7C7D82"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.8377 12.5962C10.2175 11.4701 9.16074 11.021 7.9307 11.021C6.14282 11.021 4.71875 12.2819 4.71875 14.4167C4.71875 16.5516 6.05966 17.8056 7.99307 17.8056C8.58321 17.8044 9.16217 17.645 9.66933 17.3442C10.1765 17.0433 10.5932 16.6121 10.8759 16.0956L9.51069 15.4047C9.426 15.6909 9.24676 15.9401 9.00208 16.112C8.7574 16.2838 8.46165 16.3681 8.16285 16.3512C7.1511 16.3512 6.69027 15.5153 6.69027 14.4133C6.69027 13.3113 7.07834 12.4719 8.16285 12.4719C8.42947 12.4868 8.6861 12.5782 8.90185 12.7351C9.11761 12.892 9.28331 13.1077 9.37903 13.3562L10.8377 12.5962Z"
                fill="#7C7D82"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.1717 12.5962C16.5515 11.4701 15.4947 11.021 14.2647 11.021C12.4733 11.021 11.0527 12.2784 11.0527 14.4167C11.0527 16.5551 12.3936 17.8056 14.3271 17.8056C14.9172 17.8044 15.4961 17.645 16.0033 17.3442C16.5105 17.0433 16.9272 16.6121 17.2098 16.0956L15.8481 15.4047C15.7622 15.6909 15.5822 15.9398 15.3371 16.1115C15.0919 16.2832 14.796 16.3677 14.4968 16.3512C13.4886 16.3512 13.0243 15.5153 13.0243 14.4133C13.0243 13.3113 13.4123 12.4719 14.4968 12.4719C14.7635 12.4868 15.0201 12.5782 15.2358 12.7351C15.4516 12.892 15.6173 13.1077 15.713 13.3562L17.1717 12.5962Z"
                fill="#7C7D82"
              />
            </g>
            <defs>
              <clipPath id="clip0_109_3520">
                <rect
                  width="105"
                  height="25"
                  fill="white"
                  transform="translate(0 0.533203)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Footer;
