"use strict";

const btns = document.querySelectorAll(".btn");

const arrOfTips = [0.05, 0.1, 0.15, 0.25, 0.5];

const customTip = document.getElementById("custom");

const tips = document.querySelector(".tips");

const total = document.querySelector(".total");

const Bills = document.getElementById("Bill");

const ppl = document.getElementById("people");

const res = document.querySelector(".res");

let value;

Bills.addEventListener("change", (e) => {
  const billAmt = +e.target.value;
  // console.log(billAmt);

  btns.forEach((el1, i1) => {
    el1.addEventListener("click", (e) => {
      arrOfTips.forEach((el2, i2) => {
        if (i1 === i2) {
          value = el2;
          el1.classList.toggle("active");

          ppl.addEventListener("change", (e) => {
            const numPpl = +e.target.value;

            console.log(value, billAmt, numPpl);

            if (billAmt >= 1 && value >= 0.01 && numPpl >= 1) {
              const tipAmt = (billAmt * value) / numPpl;

              const totalAmt = tipAmt + billAmt / numPpl;

              console.log(tipAmt, totalAmt);

              tips.innerHTML = `$${tipAmt.toFixed(2)}`;

              total.innerHTML = `$${totalAmt.toFixed(2)}`;
            }
          });
        }
      });
    });
  });

  customTip.addEventListener("change", (e) => {
    const customTipValue = +e.target.value;

    ppl.addEventListener("change", (e) => {
      const numPpl = +e.target.value;

      console.log(customTipValue, billAmt, numPpl);

      if (billAmt >= 1 && customTipValue >= 0.01 && numPpl >= 1) {
        const tipAmt = (billAmt * (customTipValue / 100)) / numPpl;

        const totalAmt = tipAmt + billAmt / numPpl;

        console.log(tipAmt, totalAmt);

        tips.innerHTML = `$${tipAmt.toFixed(2)}`;

        total.innerHTML = `$${totalAmt.toFixed(2)}`;
      }
    });
  });
});

res.addEventListener("click", (e) => {
  window.location.reload();
});
